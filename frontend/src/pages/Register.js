import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {

    const [form, setForm] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/auth/register",
                form
            );

            alert("Registration Successful");

        } catch(error) {

            alert("User already exists");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-box">

                <h1>🍿 Create Account</h1>

                <p className="subtitle">
                    Register your account
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Register
                    </button>

                </form>

                <p className="link-text">
                    Already have an account?
                    <Link to="/"> Login</Link>
                </p>

            </div>

        </div>

    );

}

export default Register;