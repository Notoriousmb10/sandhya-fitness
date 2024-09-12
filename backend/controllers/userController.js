const asyncHandler = require("express-async-handler");
const { findOne, create, findById } = require("../models/usermodel");
const generateToken = require("../config/generatetoken");
const sendMail = require("../sendmail");
const Usermodel = require("../models/usermodel");

const OTP_EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes

// User Registration with Email Verification
// User Registration with Email Verification
const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, age, email } = req.body;

  if (!firstname || !email) {
    return res
      .status(400)
      .json({ message: "Please provide both firstname and email" });
  }

  const userExists = await Usermodel.findOne({ email });
  if (userExists) {
    return res
      .status(400)
      .json({ message: "User already exists with this email" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log("Generated OTP:", otp);
  const otpExpires = Date.now() + OTP_EXPIRATION_TIME;

  await sendMail(email, `Your OTP is ${otp}`);

  req.session.otp = otp;
  req.session.otpExpires = otpExpires;
  req.session.email = email;
  req.session.firstname = firstname;
  req.session.lastname = lastname;
  req.session.age = age;

  console.log("Stored OTP in session:", req.session.otp);

  res.status(200).json({ message: "OTP sent to your email for verification" });
});

// Verify OTP and Create User
const verifyUser = asyncHandler(async (req, res) => {
  const { otp } = req.body;

  console.log("Received OTP:", otp);
  console.log("Stored OTP in session:", req.session.otp);

  if (
    req.session.otp.toString() === otp.toString() &&
    Date.now() < req.session.otpExpires
  ) {
    const user = await create({
      firstname: req.session.firstname,
      lastname: req.session.lastname,
      age: req.session.age,
      email: req.session.email,
    });

    // Clear session data
    req.session.destroy();

    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      email: user.email,
      token: generateToken(user._id),
    });
  } else if (Date.now() >= req.session.otpExpires) {
    res.status(400).json({ message: "OTP has expired" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
});

// User Login
const authUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Please provide an email" });
  }

  const user = await Usermodel.findOne({ email });
  if (user) {
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);
    const otpExpires = Date.now() + OTP_EXPIRATION_TIME;

    await sendMail(email, `Your OTP is ${otp}`);

    req.session.otp = otp;
    req.session.otpExpires = otpExpires;
    req.session.userId = user._id;
    console.log(req.session.otp);

    res
      .status(200)
      .json({ message: "OTP sent to your email for verification" });
  } else {
    res.status(400).json({ message: "User not found" });
  }
});

// Verify OTP for Login
const verifyLogin = asyncHandler(async (req, res) => {
  const { otp } = req.body;

  if (
    parseInt(req.session.otp) === parseInt(otp) &&
    Date.now() < req.session.otpExpires
  ) {
    const user = await findById(req.session.userId);

    req.session.destroy();

    res.json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      age: user.age,
      token: generateToken(user._id),
    });
  } else if (Date.now() >= req.session.otpExpires) {
    res.status(400).json({ message: "OTP has expired" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
});

const handleGoogleLogin = asyncHandler(async (req, res) => {
  const { email, firstname, lastname } = req.body;
  try {
    let user = await Usermodel.findOne({ email });
    if (!user) {
      user = new Usermodel({ email, firstname, lastname });
      await user.save();
    }
    res.status(201).json({ message: "User Data Saved Successfully" });
  } catch {
    res.status(500).json({ message: "Error saving user data", error });
  }
});

module.exports = { registerUser, verifyUser, authUser, verifyLogin, handleGoogleLogin };
