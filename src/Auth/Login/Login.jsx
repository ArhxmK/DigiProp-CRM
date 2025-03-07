
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.css";
import AppAppBar from "../../components/home/AppAppBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email must be a valid Gmail address");
      return;
    }
    try {
      const response = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        navigate("/servicebooking"); // Redirect to dashboard
      } else {
        setError("Invalid credentials");
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
        <Typography variant="h4" className="signup-title">Login</Typography>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
        <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth margin="normal" />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" className="signup-button" onClick={handleLogin}>Login</Button>
        <Typography className="signup-footer">Don't have an account? <a href="/signup">Register</a></Typography>
      </Box>
      <Box className="signup-right"></Box>
    </Box>
    </>
  );
};

export default Login;
