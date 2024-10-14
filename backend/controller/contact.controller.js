import { contact } from "../models/contact.model.js";
export const createContact =async (req,res)=>{
  
    try {
        const {name,email,message}=req.body;
        if(!name || !email || !message) {
            return res.status(400).json({message:"please fill all details"});

        }
        const user = await contact.findOne({email})
        if(user){
            return res.status(400).json({message:"email already exists"})
        }
        const newContact = new contact({
            name,
            email,
            message
        })
        await newContact.save()
        res.status(201).json({message:"Message sent successfully"})
        console.log(newContact)
    } catch (error) {
        console.log(error)
        res.status(404).json({error:"internal server error"})
    }
}