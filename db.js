const mongoose = require("mongoose");
const {TaskModel} = require("./models/Item");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("---ADD LINK TO DATABASE---");
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
