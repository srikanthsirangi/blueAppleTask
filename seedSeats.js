const mongoose = require("mongoose");
const Seat = require("./Models/Seat");

mongoose.connect("mongodb+srv://srikanthsirangi7_db_user:ViWOWWnrxA5EgtR5@cluster0.mcvgvel.mongodb.net/SeatBooking?appName=Cluster0")
    .then(() => console.log("Connected to database"))
    .catch(() => console.log("Error connecting to database"));

const seedSeats = async () => {
    try {
        await Seat.deleteMany({});
        
        const seats = [];
        const rows = ["A", "B", "C", "D", "E"];
        
        for (let row of rows) {
            for (let i = 1; i <= 10; i++) {
                seats.push({
                    seatNumber: `${row}${i}`,
                    row: row,
                    isBooked: false
                });
            }
        }
        
        await Seat.insertMany(seats);
        console.log("Seats created successfully");
        process.exit();
    } catch (error) {
        console.log("Error creating seats:", error);
        process.exit(1);
    }
};

seedSeats();
