const User = require("../model/User")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET_KEY = 'shhhhh'
const signup = async (req, res, next) => {



    // Deconstruct request from postman or request

    const { name, email, password } = req.body

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email })
    }
    catch (err) {

        console.log(err)

    }

    if (existingUser) {
        return res.status(400).json({ message: "User Aleady Exist" })
    }



    // connecting moongoose to  request body



    const hashpassword = bcrypt.hashSync(password, 10);

    const user = new User({
        name,
        email,
        password: hashpassword,
    });

    try {
        await user.save();

    } catch (err) {
        console.log(err)
    }
    return res.status(201).json({ message: user })
}


const login = async (req, res, next) => {

    const { email, password } = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        return new Error(err)
    }
    if (!existingUser) {
        return res.status(400).json({ message: "User Not found. signup" })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Email/Password" })
    }

    const token = jwt.sign({ id: existingUser._id }, JWT_SECRET_KEY, { expiresIn: '30s' });

    res.cookie(String(existingUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: 'lax'

    })
    return res.status(200).json({ message: "Logged in Succesfully", user: existingUser, token })
}



const verifytoken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1]
    console.log(token)
    if (!token) {
        res.status(404).json({ message: "No token found" })
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {

        if (err) {
            return res.status(400).json({ message: "Invalid Token" })
        }
        console.log(user.id);
        req.id = user.id;
    });
    next();
};

const getUser = async (req, res, next) => {
    const userid = req.id;
    let user;
    try {
        user = await User.findById(userid, "-password")

    } catch (err) {
        return new Error(err)

    }
    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }
    return res.status(200).json({ user })
}

exports.signup = signup;
exports.login = login;
exports.verifytoken = verifytoken;
exports.getUser = getUser;