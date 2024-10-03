import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Typography from "@mui/joy/Typography";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import axios from "axios";
import { useState } from "react";
import BoxMui from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ResponsiveModal({Description, PlanName, color}) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = useState(4);
  const [calprice, setCalprice] = useState(1800);
  const [lockRadio, setlockRadio] = useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState({
    name: PlanName,
    price: 0,
  });

  const plans = [
    { name: "1Month", price: 500 },
    { name: "2Month", price: 1000 },
    { name: "3Month", price: 1500 },
  ];

  const handlePlanSelect = (event) => {
    if(setlockRadio === true){
      console.log("Please select the months first");
    }else{
    const selectedPlan = plans.find((plan) => plan.name === event.target.value);
    setSelectedPlan(selectedPlan);
  };
}

  // Razorpay payment integration
  const handlePayment = async () => {
    if (!selectedPlan.price || selectedPlan.price <= 0) {
      console.error("Invalid price provided");
      return;
    }

    try {
      // Make API call to create an order on the backend
      const orderResponse = await axios.post(
        "http://localhost:3001/pay/createOrder",
        {
          amount: selectedPlan.price,
        }
      );

      const { orderId, key_id } = orderResponse.data;

      const options = {
        key: process.env.VITE_RAZORPAY_KEY_ID, // Razorpay key_id from backend
        amount: selectedPlan.price * 100, // Convert price to paise
        currency: "INR",
        name: selectedPlan.name,
        description: Description || "Purchase Description",
        order_id: orderId, // Use the order ID from the backend
        handler: async function (response) {
          // Handle payment success
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          // Verify payment on backend
          const verificationResponse = await axios.post(
            "http://localhost:3001/pay/verifyPayment",
            {
              order_id: razorpay_order_id,
              payment_id: razorpay_payment_id,
              signature: razorpay_signature,
            }
          );

          if (verificationResponse.data.success) {
            console.log("Payment verified successfully");
          } else {
            console.error("Payment verification failed");
          }
        },
        prefill: {
          name: "User Name",
          email: "user@example.com",
        },
        theme: {
          color: color || "#000",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error creating Razorpay order", error);
    }
  };
  
  const handleMonthChange = (event) => {
    setlockRadio(true)
    const value = parseInt(event.target.value, 10);
    setMonth(value);
    setCalprice(value * 450);
    console.log(month, calprice); // Add this line to check the values

  }

  return (
    <React.Fragment>
      <Button variant="outlined" sx={{border:'none' ,width:'100%', color:{color}}} color="neutral" onClick={() => setOpen(true)}>
        See Plans
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <Typography
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            {PlanName}
          </Typography>

          <FormControl>
            <FormLabel>Select a Plan</FormLabel>
            <RadioGroup name="plans" onChange={handlePlanSelect}>
              {plans.map((plan) => (
                <Radio
                  key={plan.name}
                  value={plan.name}
                  label={`${plan.name} - ₹${plan.price}`}
                />
              ))}
              <BoxMui
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "15ch" },
                  paddingTop: 2,
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-number"
                  label="Months"
                  type="number"
                  value={month}
                  onInput={handleMonthChange}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  inputProps={{
                    min: 4,
                    max: 12,
                  }}
                />
                <TextField
                  id="filled-read-only-input"
                  label={''}
                  value={calprice}
                  variant="filled"
                  slotProps={{
                    input: {
                      inputLabel: {
                        shrink: true,
                    },
                  }
                  }}
                />
              </BoxMui>
            </RadioGroup>
          </FormControl>
          

          <Typography textColor="text.tertiary" mt={2}>
            You are about to buy the {selectedPlan.name} for ₹
            {selectedPlan.price}.
          </Typography>

          <Box
            mt={2}
            sx={{ display: "flex", gap: 1, flexDirection: "row-reverse" }}
          >
            <Button onClick={handlePayment}>Buy Now</Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
