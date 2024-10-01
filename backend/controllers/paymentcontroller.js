const { createRazorpayInstance } = require("../config/razorpay.config");
const crypto = require('crypto');
const dotenv = require('dotenv');
dotenv.config();
const razorpayInstance = createRazorpayInstance();
// Create order function
exports.createOrder = async (req, res) => {
    const { amount } = req.body; // Get amount from frontend
    const options = {
        amount: amount * 100, // Convert to smallest unit (paise for INR)
        currency: 'INR',
        receipt: 'receipt_order_1',
    };

    try {
        razorpayInstance.orders.create(options, (err, order) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Something went wrong',
                });
            }
            return res.status(200).json({
                success: true,
                orderId: order.id,
                key_id: process.env.RAZORPAY_KEY_ID, // Send key_id to frontend
            });
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};



// Verify payment function
exports.verifyPayment = async (req, res) => {
    const { order_id, payment_id, signature } = req.body;
    const secret = process.env.RAZORPAY_KEY_SECRET;

    // Validate if all necessary data is received
    if (!order_id || !payment_id || !signature) {
        return res.status(400).json({
            success: false,
            message: "Invalid payment verification data",
        });
    }

    // Create Hmac object for signature verification
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(order_id + "|" + payment_id);
    const generatedSignature = hmac.digest("hex");

    // Compare signatures
    if (generatedSignature === signature) {
        return res.status(200).json({
            success: true,
            message: "Payment verified",
        });
    } else {
        return res.status(400).json({
            success: false,
            message: "Payment verification failed",
        });
    }
};
