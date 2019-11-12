const fs = require('fs');
const Bootcamp = require('./models/Bootcamp');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => {
        if(process.argv[2] === '-i') {
            importData();
        } else if(process.argv[2] === '-d') {
            deleteData();
        }
    })
    .catch(() => {
    process.exit();
    console.log('no connect..');
});

// Read JSON files
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));

// Import into DB
const importData = async () => {
    try {
        await Bootcamp.create(bootcamps);
        console.log('Data imported in to DB...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

// Delete data
const deleteData = async () => {
    try {
        await Bootcamp.deleteMany();
        console.log('Data Destroyed in to DB...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit();
    }
};

