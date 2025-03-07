import express from "express";
import mysql from "mysql2/promise"; 
import bcrypt from "bcryptjs";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "digiprop_db",
});

console.log("Connected to MySQL");

// Register Route
app.post("/api/register", async (req, res) => {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const [existingUser] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

        if (existingUser.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        await db.execute(
            "INSERT INTO users (full_name, email, password, role) VALUES (?, ?, ?, ?)",
            [fullName, email, hashedPassword, role]
        );

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Login Route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and Password are required" });
    }

    try {
        const [userResult] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);

        if (userResult.length === 0) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const user = userResult[0];

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user.id, role: user.role }, "secretkey", { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


// Route 1: Service Booking Step
app.post("/api/servicebooking", async (req, res) => {
    let { service, property, postcode, propertyValue, bedrooms, selectedDate, selectedTime } = req.body;

    // **Convert selectedDate to YYYY-MM-DD format**
    selectedDate = new Date(selectedDate).toISOString().split("T")[0]; 

    // **Validation**
    if (!service || !property || !postcode || !propertyValue || !bedrooms || !selectedDate || !selectedTime) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Insert into the database
        const [result] = await db.execute(
            `INSERT INTO bookings (service, property, postcode, property_value, bedrooms, selected_date, selected_time)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [service, property, postcode, propertyValue, bedrooms, selectedDate, selectedTime]
        );

        const bookingId = result.insertId;
        res.status(201).json({ message: "Booking saved successfully", bookingId });
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Route 2: Contact Details Step
app.post("/api/contactdetails", async (req, res) => {
    const { bookingId, fullName, email, phone, referrerCode } = req.body;

    if (!bookingId || !fullName || !email || !phone) {
        return res.status(400).json({ error: "All required fields must be filled" });
    }

    try {
        await db.execute(
            "UPDATE bookings SET full_name = ?, email = ?, phone = ?, referrer_code = ? WHERE id = ?",
            [fullName, email, phone, referrerCode || null, bookingId]
        );

        res.json({ message: "Contact details updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Route 3: Additional Details Step
app.post("/api/additionaldetails", async (req, res) => {
    const { bookingId, postcode, address1, address2, city, county, country } = req.body;

    if (!bookingId || !postcode || !address1 || !city || !country) {
        return res.status(400).json({ error: "All required fields must be filled" });
    }

    try {
        await db.execute(
            "UPDATE bookings SET postcode_address = ?, address1 = ?, address2 = ?, city = ?, county = ?, country = ? WHERE id = ?",
            [postcode, address1, address2 || null, city, county || null, country, bookingId]
        );

        res.json({ message: "Additional details updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

// Route 4: Payment Step
// Route: Fetch Order Summary for Payment Page
app.get("/api/order-summary", async (req, res) => {
    const { bookingId } = req.query;

    if (!bookingId) {
        return res.status(400).json({ error: "Booking ID is required" });
    }

    try {
        // Fetching booking details
        const [rows] = await db.execute(
            `SELECT service, property, postcode, property_value, bedrooms, selected_time, 
            address1, city, country, total_price 
            FROM bookings WHERE id = ?`,
            [bookingId]
        );

        // If no booking found
        if (rows.length === 0) {
            return res.status(404).json({ error: "No booking found with this ID" });
        }

        res.json(rows[0]); // Send booking details
    } catch (err) {
        console.error("Order Summary Error:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Route 5: Process Payment
app.post("/api/process-payment", async (req, res) => {
    const { bookingId, paymentMethod } = req.body;

    if (!bookingId || !paymentMethod) {
        return res.status(400).json({ error: "Missing payment details" });
    }

    try {
        await db.execute(
            "UPDATE bookings SET payment_status = ?, payment_method = ? WHERE id = ?",
            ["Paid", paymentMethod, bookingId]
        );

        res.json({ message: "Payment successful" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


// Route 5: Get Booking Summary (Optional)
app.get("/api/booking/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.execute("SELECT * FROM bookings WHERE id = ?", [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: "Booking not found" });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/api/dashboard-stats", async (req, res) => {
    try {
        // Fetch total number of users (clients)
        const [[totalUsers]] = await db.execute("SELECT COUNT(*) AS count FROM users");

        // Fetch total number of bookings
        const [[totalBookings]] = await db.execute("SELECT COUNT(*) AS count FROM bookings");

        // Fetch latest 5 bookings for the dashboard table
        const [latestBookings] = await db.execute(
            "SELECT id, service, property, postcode, selected_date, selected_time FROM bookings ORDER BY selected_date DESC LIMIT 5"
        );

        // Fetch the number of bookings per service type
        const [bookingsByService] = await db.execute(
            "SELECT service, COUNT(*) AS count FROM bookings GROUP BY service"
        );

        // Format data for Pie Chart
        const servicesData = [["Service", "Bookings"]];
        bookingsByService.forEach(row => {
            servicesData.push([row.service, row.count]);
        });

        res.json({
            totalUsers: totalUsers.count || 0,
            totalBookings: totalBookings.count || 0,
            latestBookings,
            servicesData
        });

    } catch (error) {
        console.error("Dashboard Stats API Error:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

// Get All Users
app.get("/api/users", async (req, res) => {
    try {
        const [users] = await db.execute("SELECT id, full_name AS username, email, role FROM users");

        console.log("✅ Users from Database:", users); // Debugging log

        if (users.length === 0) {
            return res.status(200).json([]); // No users found
        }

        res.json(users);
    } catch (err) {
        console.error("❌ Error fetching users:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


// Delete User
app.delete("/api/users/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute("DELETE FROM users WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Get All Orders
app.get("/api/orders", async (req, res) => {
    try {
        const [orders] = await db.execute(
            "SELECT id, service, property, postcode, property_value, bedrooms, selected_date, selected_time FROM bookings"
        );

        console.log("✅ Orders from Database:", orders); // Debugging Log

        if (orders.length === 0) {
            console.warn("⚠️ No orders found.");
            return res.status(200).json([]); // Send empty array
        }

        res.json(orders);
    } catch (err) {
        console.error("❌ Error fetching orders:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Delete Order
app.delete("/api/orders/:id", async (req, res) => {
    const { id } = req.params;

    try {
        console.log(`🛑 Attempting to delete order with ID: ${id}`); // Debugging Log

        const [result] = await db.execute("DELETE FROM bookings WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            console.warn("⚠️ Order not found.");
            return res.status(404).json({ error: "Order not found" });
        }

        console.log(`✅ Order with ID ${id} deleted successfully.`);
        res.json({ message: "Order deleted successfully" });

    } catch (err) {
        console.error("❌ Error deleting order:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(5001, () => console.log("Server running on port 5001"));
