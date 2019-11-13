const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const User = require('../models/User');
const geocoder = require('../utils/geocoder');
const path = require('path');

// @desc    Register user
// @route   GET /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;

    // Create user
    const user = await User.create({
        name,
        email,
        password,
        role
    });

    res.status(200).json({ success: true, })
});