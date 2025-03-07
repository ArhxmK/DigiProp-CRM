// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, Radio, RadioGroup, FormControlLabel } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import AppAppBar from "../../components/home/AppAppBar";
// import "./Payments.css";

// const PaymentPage = () => {
//   const navigate = useNavigate();
//   const [paymentMethod, setPaymentMethod] = useState("credit-card");
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [paypalEmail, setPaypalEmail] = useState("");
//   const [error, setError] = useState("");

//   const handlePayment = () => {
//     let newError = "";
//     if (paymentMethod === "credit-card") {
//       if (!cardNumber || !cardName || !expiryDate || !cvv) {
//         newError = "All fields are required for credit card payment.";
//       }
//     } else if (paymentMethod === "paypal") {
//       if (!paypalEmail) {
//         newError = "PayPal email is required.";
//       } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(paypalEmail)) {
//         newError = "Enter a valid PayPal email.";
//       }
//     }

//     if (newError) {
//       setError(newError);
//     } else {
//       navigate("/success");
//     }
//   };

//   return (
//     <>
//       <AppAppBar />
//       <Box className="payment-container">
//         <Typography variant="h5" className="payment-title">
//           Select Payment Method
//         </Typography>
//          <br />
//         <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="payment-options">
//           <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
//           <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
//         </RadioGroup>

//         {paymentMethod === "credit-card" && (
//           <Box className="card-details">
//             <TextField label="Card Number" fullWidth margin="normal" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
//             <TextField label="Name on Card" fullWidth margin="normal" value={cardName} onChange={(e) => setCardName(e.target.value)} />
//             <Box className="card-flex">
//               <TextField label="Expiration Date (MM/YY)" fullWidth margin="normal" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
//               <TextField label="Security Code (CVV)" fullWidth margin="normal" value={cvv} onChange={(e) => setCvv(e.target.value)} />
//             </Box>
//           </Box>
//         )}

//         {paymentMethod === "paypal" && (
//           <Box className="paypal-details">
//             <TextField label="PayPal Email" fullWidth margin="normal" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} />
//           </Box>
//         )}

//         <Box className="order-summary">
//           <Typography variant="h6">Order Summary</Typography>
//           <Typography>Address: 123/Kandy Sri Lanka</Typography>
//           <Typography>Bed Rooms: 10</Typography>
//           <Typography>Time: 9:30 AM - 10:30 AM</Typography>
//           <Typography className="order-total">Total: £300</Typography>
//         </Box>

//         {error && <Typography className="error-message">{error}</Typography>}

//         <Box className="button-group">
//           <Button className="back-button" style={{ backgroundColor: "black", color: "white" }} onClick={() => navigate("/additionaldetails")}>Go Back</Button>
//           <Button className="book-button" style={{ backgroundColor: "white", color: "black" }} onClick={handlePayment}>Book Now</Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default PaymentPage;

import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Radio, RadioGroup, FormControlLabel, InputAdornment } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AppAppBar from "../../components/home/AppAppBar";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import LockIcon from "@mui/icons-material/Lock";
import "./Payments.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get("bookingId");

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [orderSummary, setOrderSummary] = useState(null);
  const [error, setError] = useState("");

  // **Fetch Order Summary from Backend**
  useEffect(() => {
    const fetchOrderSummary = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/order-summary?bookingId=${bookingId}`);
        const data = await response.json();

        if (response.ok) {
          setOrderSummary(data);
        } else {
          console.error("Error fetching order summary:", data.error);
        }
      } catch (error) {
        console.error("Network Error:", error);
      }
    };

    if (bookingId) {
      fetchOrderSummary();
    }
  }, [bookingId]);

  // **Format Card Number (Auto-space every 4 digits)**
  const formatCardNumber = (value) => {
    const numbersOnly = value.replace(/\D/g, "").slice(0, 16);
    return numbersOnly.replace(/(\d{4})/g, "$1 ").trim();
  };

  // **Format Expiry Date (Auto-add `/` after MM)**
  const formatExpiryDate = (value) => {
    const numbersOnly = value.replace(/\D/g, "").slice(0, 4);
    if (numbersOnly.length <= 2) return numbersOnly;
    return `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2)}`;
  };

  // **Handle Payment**
  const handlePayment = async () => {
    let newError = "";
    if (paymentMethod === "credit-card") {
      const cleanCardNumber = cardNumber.replace(/\s/g, "");
      if (!cleanCardNumber || !cardName || !expiryDate || !cvv) {
        newError = "All fields are required for credit card payment.";
      } else if (cleanCardNumber.length !== 16) {
        newError = "Card number must be 16 digits.";
      } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        newError = "Expiration date must be MM/YY format.";
      } else if (cvv.length !== 3) {
        newError = "CVV must be 3 digits.";
      }
    } else if (paymentMethod === "paypal") {
      if (!paypalEmail) {
        newError = "PayPal email is required.";
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(paypalEmail)) {
        newError = "Enter a valid PayPal email.";
      }
    }

    if (newError) {
      setError(newError);
      return;
    }

    // Send Payment Data to Backend
    try {
      const response = await fetch("http://localhost:5001/api/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingId, paymentMethod, cardNumber, cardName, expiryDate, cvv, paypalEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate(`/success?bookingId=${bookingId}`);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("Network Error: Unable to process payment.");
    }
  };

  return (
    <>
      <AppAppBar />
      <Box className="payment-container">
        <Typography variant="h5" className="payment-title">
          Select Payment Method
        </Typography>
        <br />
        <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="payment-options">
          <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
          <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        </RadioGroup>

        {paymentMethod === "credit-card" && (
          <Box className="card-details">
            <TextField
              label="Card Number"
              fullWidth
              margin="normal"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="1234 5678 9012 3456"
              inputProps={{ maxLength: 19 }} // Includes spaces
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CreditCardIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Name on Card"
              fullWidth
              margin="normal"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
            <Box className="card-flex">
              <TextField
                label="Expiration Date (MM/YY)"
                fullWidth
                margin="normal"
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                placeholder="MM/YY"
                inputProps={{ maxLength: 5 }} // Includes slash
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EventIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="CVV"
                fullWidth
                margin="normal"
                value={cvv}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 3);
                  setCvv(value);
                }}
                placeholder="123"
                inputProps={{ maxLength: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        )}

        {paymentMethod === "paypal" && (
          <Box className="paypal-details">
            <TextField label="PayPal Email" fullWidth margin="normal" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} />
          </Box>
        )}

        {orderSummary && (
          <Box className="order-summary">
            <Typography variant="h6"><b>Order Summary</b></Typography>
            <Typography><b>Address:</b> {orderSummary.address1}, {orderSummary.city}, {orderSummary.country}</Typography>
            <Typography><b>Bedrooms:</b> {orderSummary.bedrooms}</Typography>
            <Typography><b>Time:</b> {orderSummary.selected_time}</Typography>
            <Typography className="order-total"><b>Total:</b> £{orderSummary.total_price}</Typography>
          </Box>
        )}

        {error && <Typography className="error-message">{error}</Typography>}

        <Box className="button-group">
          <Button className="back-button" style={{ backgroundColor: "black", color: "white" }} onClick={() => navigate(`/additionaldetails?bookingId=${bookingId}`)}>
            Go Back
          </Button>
          <Button className="book-button" style={{ backgroundColor: "white", color: "black" }} onClick={handlePayment}>
            Book Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PaymentPage;

