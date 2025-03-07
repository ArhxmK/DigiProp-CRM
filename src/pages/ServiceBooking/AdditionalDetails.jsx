// import React, { useState } from "react";
// import { TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import AppAppBar from "../../components/home/AppAppBar";
// import "./Details.css";

// const AdditionalDetails = () => {
//   const navigate = useNavigate();
//   const [postcode, setPostcode] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [city, setCity] = useState("");
//   const [county, setCounty] = useState("");
//   const [country, setCountry] = useState("");
//   const [errors, setErrors] = useState({});

//   // **Validation Function**
//   const validateForm = () => {
//     let newErrors = {};
//     if (!postcode.trim()) {
//       newErrors.postcode = "Postcode is required";
//     } else if (!/^[a-zA-Z0-9\s]{3,10}$/.test(postcode)) {
//       newErrors.postcode = "Enter a valid postcode";
//     }

//     if (!address1.trim()) newErrors.address1 = "Address Line 1 is required";
//     if (!city.trim()) newErrors.city = "City is required";
//     if (!country) newErrors.country = "Country selection is required";

//     return newErrors;
//   };

//   // **Handle Next Button Click**
//   const handleNext = () => {
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       navigate("/final-summary"); // Navigate to next step if no errors
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   return (
//     <>
//       <AppAppBar />
//       <Box className="details-container">
//         <Typography variant="h4" className="details-title" style={{ fontWeight: "bold" }}>
//           Additional Details
//         </Typography>

//         {/* Postcode Field */}
//         <TextField
//           label="Search Postcode *"
//           fullWidth
//           margin="normal"
//           value={postcode}
//           onChange={(e) => setPostcode(e.target.value)}
//           error={!!errors.postcode}
//           helperText={errors.postcode}
//         />

//         {/* Address Fields */}
//         <TextField
//           label="Address Line 1 *"
//           fullWidth
//           margin="normal"
//           value={address1}
//           onChange={(e) => setAddress1(e.target.value)}
//           error={!!errors.address1}
//           helperText={errors.address1}
//         />
//         <TextField
//           label="Address Line 2"
//           fullWidth
//           margin="normal"
//           value={address2}
//           onChange={(e) => setAddress2(e.target.value)}
//         />

//         {/* City & County */}
//         <TextField
//           label="Town/City *"
//           fullWidth
//           margin="normal"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           error={!!errors.city}
//           helperText={errors.city}
//         />
//         <TextField
//           label="County"
//           fullWidth
//           margin="normal"
//           value={county}
//           onChange={(e) => setCounty(e.target.value)}
//         />

//         {/* Country Dropdown */}
//         <FormControl fullWidth error={!!errors.country} margin="normal">
//           <InputLabel>Country *</InputLabel>
//           <Select value={country} onChange={(e) => setCountry(e.target.value)}>
//             <MenuItem value="United Kingdom">United Kingdom</MenuItem>
//             <MenuItem value="United States">United States</MenuItem>
//             <MenuItem value="Canada">Canada</MenuItem>
//             <MenuItem value="Australia">Australia</MenuItem>
//           </Select>
//         </FormControl>
//         {errors.country && <Typography color="error">{errors.country}</Typography>}

//         {/* Buttons */}
//         <Box className="button-group">
//           <Button className="back-button"  style={{ backgroundColor: "black", color: "white" }}  onClick={() => navigate("/contactdetails")}>Go Back</Button>
//           <Button className="next-button"  style={{ backgroundColor: "white", color: "black" }} onClick={handleNext}>Next</Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default AdditionalDetails;

import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AppAppBar from "../../components/home/AppAppBar";
import "./Details.css";

const AdditionalDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // **Extract bookingId from the URL**
  const queryParams = new URLSearchParams(location.search);
  const bookingId = queryParams.get("bookingId");

  const [postcode, setPostcode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("Booking ID from URL:", bookingId); // ✅ Debugging
  }, [bookingId]);

  // **Validation Function**
  const validateForm = () => {
    let newErrors = {};
    if (!postcode.trim()) {
      newErrors.postcode = "Postcode is required";
    } else if (!/^[a-zA-Z0-9\s]{3,10}$/.test(postcode)) {
      newErrors.postcode = "Enter a valid postcode";
    }

    if (!address1.trim()) newErrors.address1 = "Address Line 1 is required";
    if (!city.trim()) newErrors.city = "City is required";
    if (!country) newErrors.country = "Country selection is required";

    return newErrors;
  };

  // **Handle Next Button Click**
  const handleNext = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:5001/api/additionaldetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingId, // ✅ Send bookingId
            postcode,
            address1,
            address2,
            city,
            county,
            country,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          navigate(`/payments?bookingId=${bookingId}`); // ✅ Pass bookingId to payment page
        } else {
          console.error("Error:", data.error);
          alert(`Error: ${data.error}`);
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
          Additional Details
        </Typography>

        {/* Postcode Field */}
        <TextField
          label="Search Postcode *"
          fullWidth
          margin="normal"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          error={!!errors.postcode}
          helperText={errors.postcode}
        />

        {/* Address Fields */}
        <TextField
          label="Address Line 1 *"
          fullWidth
          margin="normal"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          error={!!errors.address1}
          helperText={errors.address1}
        />
        <TextField
          label="Address Line 2"
          fullWidth
          margin="normal"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />

        {/* City & County */}
        <TextField
          label="Town/City *"
          fullWidth
          margin="normal"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={!!errors.city}
          helperText={errors.city}
        />
        <TextField
          label="County"
          fullWidth
          margin="normal"
          value={county}
          onChange={(e) => setCounty(e.target.value)}
        />

        {/* Country Dropdown */}
        <FormControl fullWidth error={!!errors.country} margin="normal">
          <InputLabel>Country *</InputLabel>
          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
            <MenuItem value="United States">United States</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
          </Select>
        </FormControl>
        {errors.country && <Typography color="error">{errors.country}</Typography>}

        {/* Buttons */}
        <Box className="button-group">
          <Button className="back-button" style={{ backgroundColor: "black", color: "white" }} onClick={() => navigate(`/contactdetails?bookingId=${bookingId}`)}>
            Go Back
          </Button>
          <Button className="next-button" style={{ backgroundColor: "white", color: "black" }} onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AdditionalDetails;
