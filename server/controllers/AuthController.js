import UserModel from "../models/AuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
export const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
    const user = await UserModel.findOne({
        email
    });
    if (user) {
        throw new Error("Already registered, go for login");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
        username,
        email,
        password: hashedPassword
    });
        await newUser.save();
        return res.status(201).json("User registered successfully");
    } catch (e) {
        console.error("Internal server error",e.message)
    }
}

export const Login = async (req,res) => {
    try {
        
        const { email, password } = req.body;
        const existingUser = await UserModel.findOne({
            email
        });
        if (!existingUser) {
            throw new Error("User not found, Do registration");
        }
        const isPasswordEqual = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordEqual) {
            throw new Error("Password is Invalid")
        }
        const jwtToken = jwt.sign({
            userId: existingUser._id,
        }, process.env.JWT_SECRET, {
            expiresIn: '24h'
        })   
        return res.status(201).json({
            message:"Login Successfully",
            jwtToken,
            email,
            username: existingUser.username
        })
        
    }
    catch (e) {
        console.error("Internal server error", e.message);
        return res.status(500).json({ error: e.message }); 
    }
} 

