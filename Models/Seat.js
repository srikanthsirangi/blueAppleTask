const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
    seatNumber: {
        type: String,
        required: true,
        unique: true
    },
    isBooked: {
        type: Boolean,
        default: false
    },
    row: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Seat", seatSchema);
