import Admin from "../models/admin.model.js";
import { generateToken } from "../utils/jwt.js";

export const adminLogin = async (req , res) => {
    try {
        const {email , password} = req.body;
        // check all fields
        if (!email || !password) {
            return res.status(400).send({message:"Provide All Required Field"})
        }
        else{
            //check the admin is available or not
            let isAdmin = await Admin.findOne({email});
            if (isAdmin) {
                // match the password
                if (isAdmin.password == password) {
                    //send the auth token
                    let token = generateToken({id:isAdmin._id});
                    return res.status(200).send({token})
                }else{
                    return res.status(401).send({error:"Password is not matching"})
                }
            }else{
                return res.status(400).send({error:"Email Address not matched"})
            }
        }
    } catch (error) {
        res.status(500).send({message:"Something went wrong" , error:error.message})
    }
}