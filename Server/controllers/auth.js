const User = require("../models/User");
const Verification = require("../models/Verification");
const bcrypt = require("bcrypt");
const createError = require("../error");
const jwt = require("jsonwebtoken");
const { PINGenerator } = require("../utils/pinGenrator");


const {
  registerValidation,
  signinValidation,
  pinValidation,
} = require("../utils/validation");

const { transporter } = require("../config/email");

module.exports = {
  signup: async (req, res, next) => {
    // Validate the inputs
    const { error } = registerValidation(req.body);
    if (error)
      return res
        .status(400)
        .json({ status: "fail", message: error.details[0].message });

    // Checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res
        .status(400)
        .json({ status: "fail", message: "Email already exists" });

    try {
      const pin = PINGenerator();
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({ ...req.body, password: hash});
      await newUser.save();
      const newVerification = new Verification({ pin, userId: newUser._id });
      await newVerification.save();
      

      const { password, ...others } = newUser._doc;
      // send Verification Email
      transporter.sendMail({
        from: "yonatantesfaye30@gmail.com",
        to: newUser.email,
        subject: "Verifiy yor email",
        html: `Your Verification code is ${pin}`,
      });

      return res.status(200).json({ message: others });
    } catch (err) {
      next(err);
    }
  },

  signin: async (req, res, next) => {
    const { error } = signinValidation(req.body);
    if (error)
      return res
        .status(400)
        .json({ status: "fail", message: error.details[0].message });

    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) return next(createError(400, "Wrong credentials!"));

      if (!user.verified)
        return next(createError(400, "Please confirm your email to login"));

      const isCorrect = await bcrypt.compare(req.body.password, user.password);

      if (!isCorrect) return next(createError(400, "Wrong credentials!"));

      // const j =
      const token = jwt.sign(
        { id: user._id},
        process.env.JWT
      );

      const { password, ...others } = user._doc;
      const final = { ...others, token };
      res.header("access_token", token).status(200).json(final);
    } catch (err) {
      next(err);
    }
  },

  confirmation: async (req, res, next) => {
    const { error } = pinValidation(req.body);
    if (error)
      return res
        .status(400)
        .json({ status: "fail", message: error.details[0].message });

    try {
      const code  = await req.body.pin
      const verified = await Verification.find({userId: req.params.userId})
      if(!verified) return next(createError(400, "User Not Found"))
      
      if(verified[0].pin !== code) return next(createError(400, "Wrong Pin"))

      await Verification.findByIdAndDelete(verified[0]._id)
      await User.findByIdAndUpdate(req.params.userId, {verified: true})
      res.status(200).json({message: "User Verified"})

    } catch (err) {
      next(err);
    }
  },
};
