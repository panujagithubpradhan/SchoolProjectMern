import Admin from "../models/admin.model.js";
import { generateToken } from "../utils/jwt.js";
import { sendOtpMail } from "../utils/nodeMailer.js";
import { generateOTP } from "../utils/otp.js";

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

//Forget Password
export const forgetPassword = async (req , res) => {
    try {
        const {email} = req.body;
        if(!email) return res.status(400).send({error:"Provide the email address"})
        const isAdmin = await Admin.findOne({email})
        if (isAdmin) {
            //if OTP is already created wait for 30sec before creating next one
            if (isAdmin.otp) {
                const timelimit =(30*1000) >= (Date.now() - isAdmin.otpCreatedAt);
                if (timelimit) {
                    return res.status(420).send({error:"Too many otp requisted wait for 30sec before next"})
                }
            }
            //generate otp
            let otp = generateOTP();

            //send the otp in user email
            await sendOtpMail({to:isAdmin.email , otp})

            //save the otp in database
            isAdmin.otp = otp;
            isAdmin.otpCreatedAt = Date.now();
            await isAdmin.save()
            res.status(201).send({message:"OTP send to the email address"})
        }else{
            res.status(400).send({error:"Admin email not found"})
        }
    } catch (error) {
        res.status(500).send({error:"Something went wrong" , msg:error.message})
    }
}

//verify the otp
export const verifyOTP = async(req , res) => {
    try {
        const {otp , email} = req.body;
        if (!email || !otp) {
            return res.status(400).send({error:"Provide all fields"})
        }
        const isAdmin = await Admin.findOne({email})
        if(!isAdmin) return res.status(400).send({error:"Admin email not found"})
        else{
            if (!isAdmin.otp) {
                return res.status(400).send({error:"Generate the otp first"})
            }
            else{
                const isExpired =  (Date.now() - isAdmin.otpCreatedAt) >= (1000 * 60 * 5)
                if (isExpired) {
                    return res.status(400).send({error:"otp exprired generate otp again"})
                }
                else{
                    if (isAdmin.otp === otp) {
                        //remove the otp and otpCreatedAt from database
                        isAdmin.otp = null;
                        isAdmin.otpCreatedAt = null;
                        await Admin.save;
                        //send the auth token to the user
                        const token = generateToken({id:isAdmin._id});
                        return res.status(200).send({token})
                    }
                    else{
                        return res.status(400).send({error:"Invalid otp"})
                    }
                }
            }
        }
    } catch (error) {
        res.status(500).send({error:"Something went wrong" , msg:error.message})
    }
}