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

export default function ResponsiveModal({ Description, PlanName, color }) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = useState(1);
  const [calprice, setCalprice] = useState(500);
  const [lockRadio, setlockRadio] = useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState({
    name: PlanName,
    price: 0,
  });

  const handlePayment = async () => {
    if (calprice <= 0) {
      console.error("Invalid price provided");
      return;
    }

    try {
      // Make API call to create an order on the backend
      const orderResponse = await axios.post(
        "http://localhost:3001/pay/createOrder",
        {
          amount: calprice,
        }
      );

      const { orderId, key_id } = orderResponse.data;

      const options = {
        key: key_id, // Razorpay key_id from backend
        amount: calprice * 100, // Convert price to paise
        currency: "INR",
        name: month,
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
          name: "User  Name",
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
    setlockRadio(true);
    const value = parseInt(event.target.value, 10);
    setMonth(value);
    if (month === 1) {
      setCalprice(value * 500);
    } else {
      setCalprice(value * 450);
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{ border: "none", width: "100%", color: { color } }}
        color="neutral"
        onClick={() => setOpen(true)}
      >
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
                  min: 1,
                  max: 12,
                }}
              />
              <TextField
                id="filled-read-only-input"
                label={""}
                value={calprice}
                variant="filled"
                slotProps={{
                  input: {
                    inputLabel: {
                      shrink: true,
                    },
                  },
                }}
              />
            </BoxMui>
          </FormControl>

          <Typography textColor="text.tertiary" mt={2}>
            {`You are about to buy the ${month} Month for ₹${calprice}`}
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
