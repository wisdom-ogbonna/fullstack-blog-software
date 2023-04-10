const express = require('express')
const app = express()
const cors = require("cors")
require('dotenv').config()
const mongoose = require("mongoose");
const router = require('../routes/user-routes');
const cookieParser = require('cookie-parser')
app.use(express.json());
app.use(cors());
app.use(cookieParser())


const port = process.env.PORT || 8080



app.use('/api', router)


mongoose.connect(`mongodb+srv://Blogging:SATE5NznbuJIMDLt@blogging.hkuzcua.mongodb.net/?retryWrites=true&w=majority`)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })





app.post('', (req, res) =>{

console.log(req.body)
res.send("User created Succesfully")

})


app.listen(port, () => {
  console.log(`Example app listening on port! ${port}`)
})

// SATE5NznbuJIMDLt

router