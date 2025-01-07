import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
config()

//generate token
export const generateToken = (data) => {
    try {
        const token = jwt.sign(data , process.env.JWT_SECRET);
        return token;
    } catch (error) {
        throw new Error("Error in token creation");
    }
}

//verify token

