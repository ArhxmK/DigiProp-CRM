import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import logo from "../assets/images/logo.png";
import "./AdminLogin.css"; 
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin", "true"); // Store login status properly
      window.location.href = "/dashboard"; // Redirect to admin dashboard
    } else {
      setError("Invalid username or password!");
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" /> {/* Correct logo reference */}
        <Typography variant="h5" className="login-title">Admin Login</Typography>

        <form className="login-form" onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <Typography className="login-error">{error}</Typography>}

          <Button type="submit" variant="contained" className="login-button">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
