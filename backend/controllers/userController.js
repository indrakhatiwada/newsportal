import User from "../models/Users"

export const registerUser = async (req, res, next) => {
    try {
        const {name,email,password} = req.body

        //check if user already exists

        let user = await User.findOne({email})
        if(user){
            
            throw new Error("User with the given email already exists")
            //use custom error handler in next(), otherwise it doesnot work


        }

        //create a new user

        user = await User.create({
            name,
            email,
            password
        })
        return res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.email,
            verified: user.verified,
            isAdmin: user.isAdmin,
            token: await user.generateJWT()
        })


    }catch(error){
       next(error)
    }
}


export  const loginUser  = async (req,res,next) => {
    try {
        const {email,password} = req.body
        let user  = await User.findOne({email})


        if(!user){
            throw new Error("User not Found")

        }

        if(await user.comparePassword(password)){
            return res.status(201).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.email,
                verified: user.verified,
                isAdmin: user.isAdmin,
                token: await user.generateJWT()
            })

        }else{
            throw new Error("Invalid email or Password")
        }
        

    } catch (error) {
        next(error)
        
    }
}


export const userProfile = async(req,res,next) => {

    try {
        //here we have access to id because in auth middleware, we get user from the tverofy of token
        let user = await User.findById(req.user._id)
        if(user){
            return res.status(200).json({
                _id: user._id,
                avatar: user.avatar,
                name: user.email,
                verified: user.verified,
                isAdmin: user.isAdmin,
            })
        }else{
            let error = new Error("User not Found")
            error.statusCode = 404
            next(error)
        }

        
    } catch (error) {
        next(error)
        
    }

}

export {registerUser, loginUser, userProfile}