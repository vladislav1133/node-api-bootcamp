const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const errorHandler = require('./middlewares/error');
const connectDB = require('./config/db');
const colors = require('colors');

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamp');

const app = express();

// Body parser
app.use(express.json());

// Middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

console.log("---", 'hi');
// Mount routes
app.use('/api/v1/bootcamps', bootcamps);

// Bottom middleware
app.use(errorHandler);

const server = app.listen(PORT, console.log(`Server run in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
   console.log(`Error ${err.message}`.red);
    // Close server & exit process
   server.close(() => process.exit(1 ))
});