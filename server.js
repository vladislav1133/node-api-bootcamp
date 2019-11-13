const express = require('express');
const dotenv = require('dotenv').config();
const morgan = require('morgan');
const errorHandler = require('./middlewares/error');
const connectDB = require('./config/db');
const colors = require('colors');
const fileupload = require('express-fileupload');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

const app = express();

// Set static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body parser
app.use(express.json());

// Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// File upload
app.use(fileupload());

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

// Bottom middleware
app.use(errorHandler);

const server = app.listen(PORT, console.log(`Server run in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
   console.log(`Error ${err.message}`.red);
    // Close server & exit process
   server.close(() => process.exit(1 ))
});