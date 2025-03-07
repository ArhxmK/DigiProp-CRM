import React, { useEffect, useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import DashboardLayout from "./Layout";
import UserTableData from "./UserTableData";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]); // Store users
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch Users from Backend
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
        const response = await axios.get("http://localhost:5001/api/users");

        console.log("✅ Users from API:", response.data); // Debugging Log
        console.log("🚀 First User:", response.data[0]); // Log the first user (if exists)

        setUsers(response.data); // Set the fetched users
    } catch (error) {
        console.error("❌ Error fetching users:", error);
    }
    setLoading(false);
};


  // Delete User Function
  const handleDelete = async (userId) => {
    setLoading(true);
    try {
        await axios.delete(`http://localhost:5001/api/users/${userId}`);
        
        console.log(`✅ Deleted user with ID: ${userId}`); // Debugging log

        // Update state: Remove the deleted user from the UI
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

    } catch (error) {
        console.error("❌ Error deleting user:", error);
    }
    setLoading(false);
};


  const headerLabels = [
    "User ID",
    "Username",
    "Email",
    "Role",
  ];

  return (
    <DashboardLayout>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { md: 3 }
      }}>
        <Typography
          sx={{
            marginBottom: "18px",
            fontFamily: "InterMedium",
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "0em",
            color: "#286167",
            textAlign: "left",
            margin: 0
          }}
        >
          User Management
        </Typography>
      </Box>

      {/* Loading State */}
      {loading ? (
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "80px",
        }}>
          <CircularProgress />
        </Box>
      ) : users.length > 0 ? (
        <Box sx={{ color: "black" }}>
          <UserTableData
            tableHead={headerLabels}
            tableRows={users} // Pass fetched users
            Data_Grid="Data-Grid-Table"
            header="User Table"
            handleDelete={handleDelete} // Pass delete function
          />
        </Box>
      ) : (
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: "80px",
        }}>
          <div style={{ color: "gray", fontSize: "20px" }}>
            No record found.
          </div>
        </Box>
      )}
    </DashboardLayout>
  );
};

export default UsersTable;
