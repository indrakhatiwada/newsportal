import {verify} from "jsonwebtoken"
import User from "../models/Users"

export const authGuard = async (req,res,next) =>{
    //if there is authorization header and authorization header starts with bearer

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {

            //take out token from header
            const token = req.headers.authorization.split(" ")[1]
            console.log(token,"token")
            //find id of the user by verifying the token
            const {id} = verify(token,process.env.JWT_SECRET)
            //send user everything except password
            req.user = await User.findById(id).select("-password");
            //continue
            next()
            
        } catch (error) {
            let err = new Error("User not Authorized, Token Failed")
            err.statusCode = 401
            next(err)
            
        }
    }else{
        let err = new Error("Not Authorized")
        err.statusCode = 401
        next(err)
    }


}