const dotenv = require('dotenv');
dotenv.config();

const Razorpay = require('razorpay'); // Use a capital 'R' for consistency with constructor

exports.createRazorpayInstance = () => {
  return new Razorpay({
    key_id: process.env.VITE_RAZORPAY_KEY_ID,
  key_secret: process.env.VITE_RAZORPAY_KEY_SECRET,
  });
};


