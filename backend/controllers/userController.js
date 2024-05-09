import { uploadPicture } from "../middleware/uploadPictureMiddleware,js";
import User from "../models/Users";

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    //check if user already exists

    let user = await User.findOne({ email });
    if (user) {
      throw new Error("User with the given email already exists");
      //use custom error handler in next(), otherwise it doesnot work
    }

    //create a new user

    user = await User.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      verified: user.verified,
      isAdmin: user.isAdmin,
      token: await user.generateJWT(),
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not Found");
    }

    if (await user.comparePassword(password)) {
      return res.status(201).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        verified: user.verified,
        email: user.email,
        isAdmin: user.isAdmin,
        token: await user.generateJWT(),
      });
    } else {
      throw new Error("Invalid email or Password");
    }
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req, res, next) => {
  try {
    //here we have access to id because in auth middleware, we get user from the tverofy of token
    let user = await User.findById(req.user._id);
    if (user) {
      return res.status(200).json({
        _id: user._id,
        avatar: user.avatar,
        name: user.name,
        email: user.email,
        verified: user.verified,
        isAdmin: user.isAdmin,
      });
    } else {
      let error = new Error("User not Found");
      error.statusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);

    if (!user) {
      throw new Error("User not found");
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.password.length < 6) {
      throw new Error("Password length must be 6 characters");
    } else if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUserProfile = await user.save();

    res.json({
      _id: updatedUserProfile._id,
      avatar: updatedUserProfile.avatar,
      name: updatedUserProfile.name,
      email: user.email,
      verified: updatedUserProfile.verified,
      isAdmin: updatedUserProfile.isAdmin,
    });
  } catch (error) {
    next(error);
  }
};

const updateUserAvatar = async (req, res, next) => {
  try {
    const upload = uploadPicture.single("profilePicture");
    upload(req, res, async function (err) {
      if (err) {
        const err = new Error("An unknown Error occured while uploading");
        next(err);
      } else {
        //no error then

        if (req.file) {
          const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            {
              avatar: req.file.fileName,
            },
            //if we pass new:true , we get back updated user
            { new: true }
          );
          res.json({
            _id: updatedUser._id,
            avatar: updatedUser.avatar,
            name: updatedUser.email,
            verified: updatedUser.verified,
            isAdmin: updatedUser.isAdmin,
          });
        } else {
          let fileName;
          let updatedUser = await User.findById(req.user._id);
          fileName = updatedUser.avatar;
          updatedUser.avatar = " ";
          await updatedUser.save();
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

export {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateUserAvatar,
};
