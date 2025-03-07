import React, { useState } from "react";
import { TextField, Button, Typography, Box, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Signup.css";
import AppAppBar from "../../components/home/AppAppBar";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  };

  const validateName = (name) => {
    return /^[A-Za-z ]+$/.test(name);
  };

  const handleRegister = async () => {
    if (!fullName || !email || !password || !confirmPassword || !role) {
      setError("All fields are required");
      return;
    }
    if (!validateName(fullName)) {
      setError("Full name must only contain letters");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email must be a valid Gmail address");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://localhost:5001/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password, role }),
      });

      if (response.ok) {
        navigate("/login"); // Redirect to login page after successful registration
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <>
    <AppAppBar /> 
    <Box className="signup-container">
      <Box className="signup-left">
        <img src={logo} alt="DigiProp Logo" className="signup-logo" />
        <Box className="role-selection">
          <Button
            variant={role === "client" ? "contained" : "outlined"}
            onClick={() => setRole("client")}
          >
            Register as Client
          </Button>
          <Button
            variant={role === "partner" ? "contained" : "outlined"}
            onClick={() => setRole("partner")}
          >
            Register as Partner
          </Button>
        </Box>
        <Typography variant="h4" className="signup-title">Create your account</Typography>
        <TextField label="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} fullWidth margin="normal" />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" />
        <TextField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} fullWidth margin="normal" />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" className="signup-button" onClick={handleRegister}>Register</Button>
        <Typography className="signup-footer">Already have an account? <a href="/login">Login</a></Typography>
      </Box>
      <Box className="signup-right"></Box>
    </Box>
    </>
  );
};

export default SignUp;