import React, { useState } from 'react'


const Signup = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:8080/api/signup", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,

                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
<>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Create</button>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </form>
                </>
    )
}

export default Signup;