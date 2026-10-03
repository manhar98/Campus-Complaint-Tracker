const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const complaintRoutes = require("./routes/complaintRoutes");


dotenv.config();


connectDB();

const app = express();


app.use(express.json());

// Routes
app.use('/api/complaints', complaintRoutes);

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API Endpoint Not Found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});