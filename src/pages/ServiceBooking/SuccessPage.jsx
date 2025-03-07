import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppAppBar from "../../components/home/AppAppBar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Success.css";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppAppBar />
      <Box className="success-container">
        <CheckCircleIcon className="success-icon" />
        <Typography variant="h4" className="success-title">
          Thank You!
        </Typography>
        <Typography variant="h6" className="success-subtitle">
          Your Request Has Been Submitted
        </Typography>
        <Typography className="success-message">
          Thank you for booking your service with **Digiprop**! We appreciate your choice and are
          excited to assist you. You will soon receive an email from **booking@digiprop.co.uk**
          detailing the price and confirming your order. If you have any questions in the meantime,
          feel free to reach out to us at **support@digiprop.co.uk**.
        </Typography>
         <br />
        <Button className="ok-button" style={{ backgroundColor: "black", color: "white" }} onClick={() => navigate("/servicebooking")}>OK</Button>
      </Box>
    </>
  );
};

export default SuccessPage;
