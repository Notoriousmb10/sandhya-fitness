const express = require("express");
const sessionMiddleware = require("./config/session-express");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoute");
const app = express();
const PORT = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const { createOrder } = require("./controllers/paymentcontroller");
const { verifyPayment } = require("./controllers/paymentcontroller");

app.use(
  cors({
    origin: "http://localhost:5173", // Allow only requests from this origin
    methods: ["GET", "POST"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

// Connect to MongoDB
connectDB();

mongoose.set("strictQuery", true);

// Middleware to parse JSON
app.use(express.json());

// Apply session middleware
app.use(sessionMiddleware);

// Basic route
app.post("/pay/createOrder", createOrder);
app.post("/pay/verifyPayment", verifyPayment);

app.use("/api/user/", userRouter);
// User routes
app.use("/user", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
