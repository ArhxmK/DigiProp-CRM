# DigiProp CRM - Service Booking System

DigiProp CRM is a web-based application that allows users to register, book services, and make payments, while administrators can manage users, view orders, and oversee system activities.

## Features

### **User Side**
- User **registration & login**.
- Book a **service** with property details.
- Provide **contact & additional details**.
- **Make payments** after booking.
- View **confirmation and success pages**.

### **Admin Side**
- **Admin login** (Credentials: `admin / admin123`).
- **Dashboard overview** for managing users and orders.
- **View, delete, and export user & order data**.
- **Order management** to track bookings and payments.

## Requirements
- Node.js (>= 14)
- MySQL Database
- Git (for version control)
- A web server (e.g., Apache, Nginx, or local development using Vite)

## Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/ArhxmK/DigiProp-CRM.git
cd DigiProp-CRM
```

### **2. Database Setup**
The MySQL database file has been attached in the project folder.

- Import the database into MySQL using a tool like phpMyAdmin or MySQL Workbench.
- Open `server.js` and replace the MySQL password with your own credentials before running the backend.

### **3. Install Dependencies**
Run the following command in the project root folder:
```bash
npm install
```
Navigate to the backend folder and install backend dependencies:
```bash
cd backend
npm install
```

### **4. Start the Application**
#### **Start the Backend Server**
```bash
cd backend
node server.js
```
#### **Start the Frontend Server**
```bash
npm run dev
```
Once both the frontend and backend are running, you can access the application through the following routes.

### **5. Accessing the Application**
#### **User Login/Register:**
```
http://localhost:5173/login
```
#### **Admin Dashboard Login Route:**
```
http://localhost:5173/adminlogin
```
#### **Admin Credentials:**
```
Username: admin
Password: admin123
```

### **6. Project Structure**
```
DigiProp-CRM/
│── backend/                  # Express.js Backend
│   ├── server.js             # Main server file
│   ├── database/             # Database files (attached)
│   ├── routes/               # API Routes
│   ├── .env                  # Environment variables
│── frontend/                 # React Frontend
│   ├── src/                  # Source code
│   ├── components/           # Reusable UI Components
│   ├── pages/                # Application Pages
│── README.md                 # Documentation
│── package.json              # Node.js Dependencies
│── vite.config.js            # Vite Configuration
```

### **7. Example Workflow**
1. User signs up and logs in.
2. Books a service by providing property details.
3. Proceeds to checkout and makes a payment.
4. Admin logs in at `/adminlogin` to manage users and orders.
5. Admin can delete or export data for records.

### **8. Author**
- **Mohamed Arham**




