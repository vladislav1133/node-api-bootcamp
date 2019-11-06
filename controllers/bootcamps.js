// @desc    Get all bootcmaps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'show all bootcamps'});
};

// @desc    Get single bootcmap
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show bootcamp #${req.params.id}`});
};

// @desc    Create new bootcmap
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `create a bootcamp`});
};

// @desc    Update bootcmap
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update bootcamp #${req.params.id}`});
};

// @desc    Delete bootcmap
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete bootcamp #${req.params.id}`});
};