import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function TestForm() {

    const history = useNavigate()

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

        console.log(e.target.name, "value", e.target.value)

    };

    const sendRequest = async () => {
        const res = await axios.post('http://localhost:8080/api/signup', {
            name: input.name,
            email: input.email,
            password: input.password

        }).catch(err => {
            console.log(err)
        });
        const data = await res.data;
        return data;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/'))

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <input
                        name="name"
                        value={input.name}
                        type="text"

                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        name="email"
                        value={input.email}
                        type="email"


                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        name="password"
                        value={input.password}
                        type="password"

                        onChange={handleChange}
                    />
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default TestForm