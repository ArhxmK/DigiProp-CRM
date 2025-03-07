import React, { useEffect, useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import DashboardLayout from "./Layout";
import OrdersTableData from "./OrderTableData";
import axios from "axios";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]); // Store orders
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch Orders from Backend
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5001/api/orders");

      console.log("✅ Orders from API:", response.data); // Debugging Log
      console.log("🚀 First Order:", response.data[0]); // Log the first order (if exists)

      setOrders(response.data); // Set the fetched orders
    } catch (error) {
      console.error("❌ Error fetching orders:", error);
    }
    setLoading(false);
  };

  // Delete Order Function
  const handleDelete = async (orderId) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5001/api/orders/${orderId}`);
      
      console.log(`✅ Deleted order with ID: ${orderId}`); // Debugging log

      // Update state: Remove the deleted order from the UI
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));

    } catch (error) {
      console.error("❌ Error deleting order:", error);
    }
    setLoading(false);
  };

  const headerLabels = [
    "Order ID",
    "Service",
    "Property",
    "Postcode",
    "Property Value",
    "Bedrooms",
    "Date",
    "Time",
    "Action"
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
          Order Management
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
      ) : orders.length > 0 ? (
        <Box sx={{ color: "black" }}>
          <OrdersTableData
            tableHead={headerLabels}
            tableRows={orders} // Pass fetched orders
            Data_Grid="Data-Grid-Table"
            header="Orders Table"
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
            No orders found.
          </div>
        </Box>
      )}
    </DashboardLayout>
  );
};

export default OrdersTable;
