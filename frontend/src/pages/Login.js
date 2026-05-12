import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
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
                "http://localhost:5000/api/auth/login",
                form
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch(error) {

            alert("Invalid Email or Password");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-box">

                <h1>🎬 Movie System</h1>

                <p className="subtitle">
                    Login to continue
                </p>

                <form onSubmit={handleSubmit}>

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
                        Login
                    </button>

                </form>

                <p className="link-text">
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>

            </div>

        </div>

    );

}

export default Login;