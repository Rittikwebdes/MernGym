import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { secret_key } from "../index.js";
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      name,
      email,
      password: hashPassword,
    });
    await createdUser.save();
    console.log(createdUser);
    res.status(201).json({
      message: "User created successfully",
      createdUser
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const login = async(req,res)=>{
    const {email , password} = req.body;

    try {
       const user = await User.findOne({email});
       if(!user)
        return res.status(400).json({message:"user not found"});
    const isMatch = await bcryptjs.compare(password, user.password);
    if(!isMatch) 
        return res.status(400).json({message:"password is not match"});
 const token = jwt.sign({userId:user._id}, secret_key,{
    expiresIn:"365d"
 })
 res.status(200).json({message:`${user.name} you are logged in successfully`, token , success:true})
    } catch (error) {
        console.log(error)
        res.status(404).json({message:"internal server error"})
    }
}
