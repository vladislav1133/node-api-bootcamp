const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middlewares/logger');
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamp');

// Load env vars
dotenv.config({ path: './config/config.env'});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);

app.listen(PORT, console.log("---", `Server run in ${process.env.NODE_ENV} mode on port ${PORT}`));