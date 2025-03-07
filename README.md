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

### **2. Database Setup
The **MySQL database file** has been attached in the project folder.  
1. Import the database into MySQL using a tool like phpMyAdmin or MySQL Workbench.  
2. Open `server.js` and **replace the MySQL password** with your own credentials before running the backend.

### **3. Install Dependencies
Run the following command in the **project root** folder:
```bash
npm install

### **4. Start the Application
### **Start the Backend Server**
```bash
cd backend
node server.js

### **Start the Frontend Server**
```bash




