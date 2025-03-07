// import React, { useState } from "react";
// import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, Typography } from "@mui/material";
// import Calendar from "react-calendar"; // Importing the calendar component
// import "react-calendar/dist/Calendar.css"; // Calendar styles
// import "./ServiceBooking.css";
// import AppAppBar from "../../components/home/AppAppBar";
// import { useNavigate } from "react-router-dom";

// const serviceDescriptions = {
//   "Media Pack": "Experience your property like never before with our 360 Interactive Virtual Tour service, expertly captured by the Taurgo team and delivered within 24 hours from capture!",
//   "360 Inventory": "Unlock the full potential of your inventory management with our 360 Inventory Service, where the Digiprop team goes on-site to capture stunning imagery and create an interactive 360 virtual inventory.",
//   "360 Mid-Term Inspection": "Ensure your property is in top condition with our 360 Mid-Term Inspection service, where the Digiprop team captures comprehensive imagery to create an interactive 360 virtual inspection experience.",
//   "Level 1 RICS Condition Report Service": "Gain peace of mind with our Level 1 RICS Condition Report Service, expertly captured by the Digiprop team. This essential service combines a thorough condition assessment with an interactive 360 virtual view.",
//   "Level 2 RICS HomeBuyer Service": "Ensure informed property decisions with our Level 2 RICS HomeBuyer Service. Get an in-depth assessment of your property's condition and potential concerns before making a purchase.",
//   "Level 2 RICS Survey and Valuation": "Valuation service adhering to RICS guidelines. This service is ideal for those requiring a detailed inspection, capturing essential data regarding property condition and value."
// };

// const ServiceBooking = () => {
//   const navigate = useNavigate();
//   const [service, setService] = useState("");
//   const [property, setProperty] = useState("");
//   const [postcode, setPostcode] = useState("");
//   const [propertyValue, setPropertyValue] = useState("");
//   const [bedrooms, setBedrooms] = useState("");
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [description, setDescription] = useState("");
//   const [errors, setErrors] = useState({});

//   const services = Object.keys(serviceDescriptions);

//   const propertyValues = [
//     "Up to £125k",
//     "£126k - £200k",
//     "£201k - £250k",
//     "£251k - £300k",
//     "£301k - £400k",
//     "£401k - £500k",
//     "£501k - £600k",
//     "£601k - £750k",
//     "£750k - £1m",
//     "£1m+",
//   ];

//   const timeslots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

//   // Validation function
//   const validateForm = () => {
//     let newErrors = {};
//     if (!service) newErrors.service = "Please select a service";
//     if (!property.trim()) newErrors.property = "Property Type is required";
//     if (!postcode.trim()) newErrors.postcode = "Postcode is required";
//     if (!propertyValue) newErrors.propertyValue = "Property Value is required";
//     if (!bedrooms) newErrors.bedrooms = "Number of Bedrooms is required";
//     if (!selectedTime) newErrors.selectedTime = "Please select a time slot";
//     return newErrors;
//   };

//   const handleSubmit = () => {
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length === 0) {
//       navigate("/contactdetails");
//     } else {
//       setErrors(formErrors);
//     }
//   };

//   return (
//     <>
//       <AppAppBar />
//       <Box className="service-booking-container">
//         {/* Left Side - Calendar & Service Selection */}
//         <Box className="service-booking-left">
//           <Typography variant="h6" style={{ color: "black", fontWeight: "bold" }}>
//             Select Your Service <span style={{ color: "red" }}>*</span>
//           </Typography>
//           <FormControl fullWidth className="service-selection" error={!!errors.service}>
//             <InputLabel>Select Your Service *</InputLabel>
//             <Select value={service} onChange={(e) => setService(e.target.value)}>
//               {services.map((s, index) => (
//                 <MenuItem key={index} value={s}>
//                   {s}
//                 </MenuItem>
//               ))}
//             </Select>
//             <Typography variant="caption" color="error">{errors.service}</Typography>
//           </FormControl>

//           <Typography variant="h6" style={{ color: "black", fontWeight: "bold" }}>
//             Select a Date <span style={{ color: "red" }}>*</span>
//           </Typography>
//           <Box className="service-booking-calendar">
//             <Calendar onChange={setSelectedDate} value={selectedDate} />
//           </Box>
//         </Box>

//         {/* Right Side - Booking Form */}
//         <Box className="service-booking-form">
//           {service && (
//             <Box className="service-description" style={{ marginBottom: "20px", padding: "10px", background: "#fff", borderRadius: "8px" }}>
//               <Typography variant="h5" style={{ fontWeight: "bold", color: "black" }}>{service}</Typography>
//               <Typography variant="body1" style={{ color: "black" }}>{serviceDescriptions[service]}</Typography>
//             </Box>
//           )}

//           <TextField
//             label="Property Type *"
//             fullWidth
//             margin="normal"
//             value={property}
//             onChange={(e) => setProperty(e.target.value)}
//             error={!!errors.property}
//             helperText={errors.property}
//           />

//           <TextField
//             label="Enter Postcode *"
//             fullWidth
//             margin="normal"
//             value={postcode}
//             onChange={(e) => setPostcode(e.target.value)}
//             error={!!errors.postcode}
//             helperText={errors.postcode}
//           />

//           <FormControl fullWidth error={!!errors.propertyValue}>
//             <InputLabel>Property Value *</InputLabel>
//             <Select value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)}>
//               {propertyValues.map((p, index) => (
//                 <MenuItem key={index} value={p}>
//                   {p}
//                 </MenuItem>
//               ))}
//             </Select>
//             <Typography variant="caption" color="error">{errors.propertyValue}</Typography>
//           </FormControl>

//           <TextField
//             label="Number of Bedrooms *"
//             type="number"
//             fullWidth
//             margin="normal"
//             value={bedrooms}
//             onChange={(e) => setBedrooms(e.target.value)}
//             error={!!errors.bedrooms}
//             helperText={errors.bedrooms}
//           />

//           <Typography variant="h6" style={{ color: "black", fontWeight: "bold" }}>
//             Select Time <span style={{ color: "red" }}>*</span>
//           </Typography>
//           <Box className="time-selection">
//             {timeslots.map((time) => (
//               <Button
//                 key={time}
//                 className={`time-button ${selectedTime === time ? "selected" : ""}`}
//                 onClick={() => setSelectedTime(time)}
//                 style={{ border: errors.selectedTime ? "2px solid red" : "none" }}
//               >
//                 {time}
//               </Button>
//             ))}
//           </Box>
//           {errors.selectedTime && <Typography variant="caption" color="error">{errors.selectedTime}</Typography>}

//           <Box className="button-group">
//             <Button className="cancel-button" style={{ backgroundColor: "black", color: "white" }}>
//               Cancel
//             </Button>
//             <Button className="book-button" style={{ backgroundColor: "white", color: "black" }} onClick={handleSubmit}>
//               Book
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default ServiceBooking;


import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box, Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ServiceBooking.css";
import AppAppBar from "../../components/home/AppAppBar";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios

const serviceDescriptions = {
  "Media Pack": "Experience your property like never before with our 360 Interactive Virtual Tour service, expertly captured by the Taurgo team and delivered within 24 hours from capture!",
  "360 Inventory": "Unlock the full potential of your inventory management with our 360 Inventory Service, where the Digiprop team goes on-site to capture stunning imagery and create an interactive 360 virtual inventory.",
  "360 Mid-Term Inspection": "Ensure your property is in top condition with our 360 Mid-Term Inspection service, where the Digiprop team captures comprehensive imagery to create an interactive 360 virtual inspection experience.",
  "Level 1 RICS Condition Report Service": "Gain peace of mind with our Level 1 RICS Condition Report Service, expertly captured by the Digiprop team. This essential service combines a thorough condition assessment with an interactive 360 virtual view.",
  "Level 2 RICS HomeBuyer Service": "Ensure informed property decisions with our Level 2 RICS HomeBuyer Service. Get an in-depth assessment of your property's condition and potential concerns before making a purchase.",
  "Level 2 RICS Survey and Valuation": "Valuation service adhering to RICS guidelines. This service is ideal for those requiring a detailed inspection, capturing essential data regarding property condition and value."
};

const ServiceBooking = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [property, setProperty] = useState("");
  const [postcode, setPostcode] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const services = Object.keys(serviceDescriptions);
  const propertyValues = [
    "Up to £125k", "£126k - £200k", "£201k - £250k",
    "£251k - £300k", "£301k - £400k", "£401k - £500k",
    "£501k - £600k", "£601k - £750k", "£750k - £1m", "£1m+"
  ];
  const timeslots = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  // ✅ Validation function
  const validateForm = () => {
    let newErrors = {};
    if (!service) newErrors.service = "Please select a service";
    if (!property.trim()) newErrors.property = "Property Type is required";
    if (!postcode.trim()) newErrors.postcode = "Postcode is required";
    if (!propertyValue) newErrors.propertyValue = "Property Value is required";
    if (!bedrooms) newErrors.bedrooms = "Number of Bedrooms is required";
    if (!selectedTime) newErrors.selectedTime = "Please select a time slot";
    return newErrors;
  };

  // ✅ Handle form submission & send data to backend
  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/servicebooking", {
        service,
        property,
        postcode,
        propertyValue,
        bedrooms,
        selectedDate,
        selectedTime
      });

      console.log("Booking Created:", response.data);
      
      // ✅ Navigate to Contact Details page with bookingId
      navigate(`/contactdetails?bookingId=${response.data.bookingId}`);
      
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <>
      <AppAppBar />
      <Box className="service-booking-container">
        {/* Left Side - Calendar & Service Selection */}
        <Box className="service-booking-left">
          <Typography variant="h6" style={{ color: "black", fontWeight: "bold" }}>
            Select Your Service <span style={{ color: "red" }}>*</span>
          </Typography>
          <FormControl fullWidth className="service-selection" error={!!errors.service}>
            <InputLabel>Select Your Service *</InputLabel>
            <Select value={service} onChange={(e) => setService(e.target.value)}>
              {services.map((s, index) => (
                <MenuItem key={index} value={s}>{s}</MenuItem>
              ))}
            </Select>
            {errors.service && <Typography variant="caption" color="error">{errors.service}</Typography>}
          </FormControl>

          <Typography variant="h6" style={{ color: "black", fontWeight: "bold" }}>
            Select a Date <span style={{ color: "red" }}>*</span>
          </Typography>
          <Box className="service-booking-calendar">
            <Calendar onChange={setSelectedDate} value={selectedDate} />
          </Box>
        </Box>

        {/* Right Side - Booking Form */}
        <Box className="service-booking-form">
          {service && (
            <Box className="service-description" style={{ marginBottom: "20px", padding: "10px", background: "#fff", borderRadius: "8px" }}>
              <Typography variant="h5" style={{ fontWeight: "bold", color: "black" }}>{service}</Typography>
              <Typography variant="body1" style={{ color: "black" }}>{serviceDescriptions[service]}</Typography>
            </Box>
          )}

          <TextField label="Property Type *" fullWidth margin="normal" value={property} onChange={(e) => setProperty(e.target.value)} error={!!errors.property} helperText={errors.property} />
          <TextField label="Enter Postcode *" fullWidth margin="normal" value={postcode} onChange={(e) => setPostcode(e.target.value)} error={!!errors.postcode} helperText={errors.postcode} />
          
          <FormControl fullWidth error={!!errors.propertyValue}>
            <InputLabel>Property Value *</InputLabel>
            <Select value={propertyValue} onChange={(e) => setPropertyValue(e.target.value)}>
              {propertyValues.map((p, index) => (
                <MenuItem key={index} value={p}>{p}</MenuItem>
              ))}
            </Select>
            {errors.propertyValue && <Typography variant="caption" color="error">{errors.propertyValue}</Typography>}
          </FormControl>

          <TextField label="Number of Bedrooms *" type="number" fullWidth margin="normal" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} error={!!errors.bedrooms} helperText={errors.bedrooms} />
          
          <Typography variant="h6" style={{ color: "black", fontWeight: "bold" }}>Select Time <span style={{ color: "red" }}>*</span></Typography>
          <Box className="time-selection">
            {timeslots.map((time) => (
              <Button key={time} className={`time-button ${selectedTime === time ? "selected" : ""}`} onClick={() => setSelectedTime(time)}>{time}</Button>
            ))}
          </Box>

          <Box className="button-group">
            <Button className="cancel-button" style={{ backgroundColor: "black", color: "white" }}>Cancel</Button>
            <Button className="book-button" style={{ backgroundColor: "white", color: "black" }} onClick={handleSubmit}>Book</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServiceBooking;
