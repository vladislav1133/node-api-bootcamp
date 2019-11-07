const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Name can not be more than 500 characters']
    },
    website: {
        match: [
            /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
            'Please use a valid URL with http(s)'
        ]
    },
    phone: {
        type: String,
        maxlength: [20, 'Please number can be max 20 chars']
    },
    email: {
        type: String,
        match: [
            /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
            'Please add a valid email'
        ]
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
        // GeoJSON
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    careers: {
        // Array of string
        type: [String],
        required: true,
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must can not be more than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    housing: {
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);