import User from "../models/User.js";


export const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check existing user
        const userExists = await User.findOne({ email });

        if(userExists) {

            return res.status(400).json({
                message: "User already exists"
            });

        }

        // Create user
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: "Registration Successful",
            user
        });

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};


export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        
        const user = await User.findOne({ email });

        if(!user) {

            return res.status(400).json({
                message: "Invalid Email"
            });

        }

        
        if(user.password !== password) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }

        res.json({
            message: "Login Successful",
            user
        });

    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};