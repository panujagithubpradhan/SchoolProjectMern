import { Router } from "express";
import { adminLogin, forgetPassword, verifyOTP } from "../auth/admin.auth.js";


const adminRouter = Router();

//api
//demo
adminRouter.get("/" , (req , res) => {
    res.send("admin router is working");
})

//login
adminRouter.post("/login" , adminLogin);

//forgot password(generate OTP)
adminRouter.post("/otp/create" , forgetPassword)

//(verify OTP)
adminRouter.post("/otp/verify" , verifyOTP)

//change password

adminRouter.post("/changepass")
//add student


//add teacher






export default adminRouter;