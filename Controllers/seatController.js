const Seat = require("../Models/Seat");

module.exports.getAllSeats = async (req, res) => {
    try {
        const seats = await Seat.find();
        res.status(200).json(seats);
    } catch (error) {
        res.status(500).json({ message: "Error fetching seats" });
    }
};

module.exports.createSeats = async (req, res) => {
    try {
        const seats = req.body;
        await Seat.insertMany(seats);
        res.status(201).json({ message: "Seats created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating seats" });
    }
};

module.exports.bookSeat = async (req, res) => {
    try {
        const { seatNumber } = req.body;
        const seat = await Seat.findOne({ seatNumber });
        
        if (!seat) {
            return res.status(404).json({ message: "Seat not found" });
        }
        
        if (seat.isBooked) {
            return res.status(400).json({ message: "Seat already booked" });
        }
        
        seat.isBooked = true;
        await seat.save();
        res.status(200).json({ message: "Seat booked successfully", seat });
    } catch (error) {
        res.status(500).json({ message: "Error booking seat" });
    }
};
