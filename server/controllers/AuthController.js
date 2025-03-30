import UserModel from "../models/AuthModel";

export const Register = async (res,req) => {
    try {
        const { username, email, password } = req.body;
        const user = await UserModel.findOne({
            email
        })
        if (!user) {
            throw new Error("Already register, go for login")
        }
      
        const newUser = new UserModel({
            username,
            email,
            password
        })
        const hashedPassword = await bcrypt.hash(password, 10);
        await newUser.save();
        return res.status(201).json("User registered successfully");
    } catch (e) {
        console.error("Internal server error")
    }
}

export const Login = async (req,res) => {
    try {
        
        const existingUser = await UserModel.findOne({
            email:UserValidation.email
        })
        if (!existingUser) {
            throw new Error("User not found, Do registration");
        }
        const isPasswordEqual = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordEqual) {
            throw new Error("Password is Invalid")
        }
        const jwtToken = jwt.sign({
            userId: existingUser._id,
            email:existingUser.email
        }, {
            expiresIn:'24h'
        },process.env.JWT_SECRET)   
        return res.status(201).json({
            message:"Login Successfully",
            jwtToken,
            email,
            username: existingUser.username
        })
    } catch (e) {
        console.error("Internal server error");
    }
} 

