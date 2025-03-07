import React, { useEffect, useState } from "react";
import { Box, Grid, Card, Typography, CircularProgress, Divider, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import DashboardLayout from "./Layout";
import axios from "axios";
import Chart from "react-google-charts"; // For Pie Charts

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5001/api/dashboard-stats");
      setStats(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setError("Failed to load dashboard data");
      setLoading(false);
    }
  };

  if (loading) {
    return <Box sx={{ textAlign: "center", padding: 5 }}><CircularProgress /></Box>;
  }

  if (error) {
    return <Box sx={{ textAlign: "center", padding: 5, color: "red" }}>⚠️ {error}</Box>;
  }

  return (
    <DashboardLayout>
      <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
        Property Performance Summary
      </Typography>

      {/* Stats Overview Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: "20px", textAlign: "center", backgroundColor: "#f8f9fa" }}>
            <Typography variant="h6">Total Users (Clients)</Typography>
            <Typography variant="h4">👥 {stats.totalUsers}</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: "20px", textAlign: "center", backgroundColor: "#f8f9fa" }}>
            <Typography variant="h6">Total Bookings</Typography>
            <Typography variant="h4">📑 {stats.totalBookings}</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Booking Breakdown Chart */}
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">Bookings by Service Type</Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Chart
              chartType="PieChart"
              data={stats.servicesData}
              options={{ pieHole: 0.4 }}
              width="100%"
              height="200px"
            />
          </Card>
        </Grid>
      </Grid>

      {/* Latest Bookings Table */}
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12}>
          <Card sx={{ padding: "20px" }}>
            <Typography variant="h6">Latest Bookings</Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>ID</strong></TableCell>
                  <TableCell><strong>Service</strong></TableCell>
                  <TableCell><strong>Property</strong></TableCell>
                  <TableCell><strong>Postcode</strong></TableCell>
                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Time</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stats.latestBookings.map((booking, index) => (
                  <TableRow key={index}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.service}</TableCell>
                    <TableCell>{booking.property}</TableCell>
                    <TableCell>{booking.postcode}</TableCell>
                    <TableCell>{booking.selected_date}</TableCell>
                    <TableCell>{booking.selected_time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;

