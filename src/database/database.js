const mongoose = require('mongoose');
require('dotenv').config();

const getURI = () => {
    let connectionURI;
    connectionURI = process.env.DB_DEV_URI;
    connectionURI = connectionURI.replace('<username>:<password>', `${process.env.DB_USER}:${process.env.DB_PASSWORD}`);
    return connectionURI;
}

const dbConnect = async () => {
    console.log('Connecting to Database...');
    const uri = getURI('Assignments');
    await mongoose.connect(uri, { dbName: process.env.DB_NAME });
    console.log("Connected to Database.");
}

module.exports = dbConnect;