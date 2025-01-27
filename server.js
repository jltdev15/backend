// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');
const morgan = require("morgan");
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/api/questions', questionRoutes);
app.use('/api/results', resultRoutes);

// Database Connection
mongoose
  //   .connect(process.env.MONGO_DB_ONLINE, {})
  .connect(process.env.MONGO_DB_LOCAL, {})
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("Error connecting to Database", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));