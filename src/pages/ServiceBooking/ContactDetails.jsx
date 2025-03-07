// import React, { useState } from "react";
// import { TextField, Button, Box, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import AppAppBar from "../../components/home/AppAppBar";
// import "./Details.css";

// const ContactDetails = () => {
//   const navigate = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [referrerCode, setReferrerCode] = useState("");
//   const [errors, setErrors] = useState({});

//   // Validation function
//   const validateForm = () => {
//     let newErrors = {};
//     if (!fullName.trim()) newErrors.fullName = "Full Name is required";
//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
//       newErrors.email = "Enter a valid email address";
//     }
//     if (!phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\d{10}$/.test(phone)) {
//       newErrors.phone = "Enter a valid 10-digit phone number";
//     }
//     return newErrors;
//   };

//   // Handle form submission
//   const handleNext = () => {
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       navigate("/additionaldetails"); // Navigate if no errors
//     } else {
//       setErrors(formErrors); // Set errors
//     }
//   };

//   return (
//     <>
//       <AppAppBar />
//       <Box className="details-container">
//         <Typography variant="h4" className="details-title" style={{ fontWeight: "bold" }}>
//           Please Complete Your Contact Details
//         </Typography>

//         {/* Full Name Field */}
//         <TextField
//           label="Full Name *"
//           fullWidth
//           margin="normal"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           error={!!errors.fullName}
//           helperText={errors.fullName}
//         />

//         {/* Email Field */}
//         <TextField
//           label="Email *"
//           type="email"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           error={!!errors.email}
//           helperText={errors.email}
//         />

//         {/* Phone Field */}
//         <TextField
//           label="Phone *"
//           type="tel"
//           fullWidth
//           margin="normal"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           error={!!errors.phone}
//           helperText={errors.phone}
//         />

//         {/* Referrer Code Field (Optional) */}
//         <TextField
//           label="Referrer Code"
//           fullWidth
//           margin="normal"
//           value={referrerCode}
//           onChange={(e) => setReferrerCode(e.target.value)}
//         />

//         <Box className="button-group">
//         <Button className="back-button"  style={{ backgroundColor: "black", color: "white" }}  onClick={() => navigate("/servicebooking")}>Back</Button>
//           <Button className="next-button" style={{ backgroundColor: "white", color: "black" }} onClick={handleNext}>Next</Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ContactDetails;

import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Import useLocation
import AppAppBar from "../../components/home/AppAppBar";
import "./Details.css";

const ContactDetails = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get URL parameters

  // **Extract bookingId from the URL**
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get("bookingId"); // ✅ Now we have the ID

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referrerCode, setReferrerCode] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("Booking ID from URL:", bookingId); // ✅ Check if ID is correctly retrieved
  }, [bookingId]);

  // **Validation Function**
  const validateForm = () => {
    let newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    return newErrors;
  };

  // **Handle Form Submission**
  const handleNext = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:5001/api/contactdetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, phone, referrerCode, bookingId }), // ✅ Include bookingId
        });

        const data = await response.json();
        console.log("API Response:", data); // ✅ Debugging

        if (response.ok) {
          navigate(`/additionaldetails?bookingId=${bookingId}`); // ✅ Pass bookingId to the next page
        } else {
          console.error("Error:", data.error);
          alert(`Error: ${data.error}`); // Show error to user
        }
      } catch (error) {
        console.error("Network Error:", error);
        alert("Network Error: Unable to reach the server.");
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <AppAppBar />
      <Box className="details-container">
        <Typography variant="h4" className="details-title" style={{ fontWeight: "bold" }}>
          Please Complete Your Contact Details
        </Typography>

        {/* Full Name Field */}
        <TextField
          label="Full Name *"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={!!errors.fullName}
          helperText={errors.fullName}
        />

        {/* Email Field */}
        <TextField
          label="Email *"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />

        {/* Phone Field */}
        <TextField
          label="Phone *"
          type="tel"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone}
        />

        {/* Referrer Code Field (Optional) */}
        <TextField
          label="Referrer Code"
          fullWidth
          margin="normal"
          value={referrerCode}
          onChange={(e) => setReferrerCode(e.target.value)}
        />

        {/* Buttons */}
        <Box className="button-group">
          <Button className="back-button" style={{ backgroundColor: "black", color: "white" }} onClick={() => navigate("/servicebooking")}>
            Back
          </Button>
          <Button className="next-button" style={{ backgroundColor: "white", color: "black" }} onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactDetails;


