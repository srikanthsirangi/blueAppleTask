const express = require("express");
const { getAllSeats, createSeats, bookSeat } = require("../Controllers/seatController");

const router = express.Router();

router.get("/seats", getAllSeats);
router.post("/seats", createSeats);
router.post("/book", bookSeat);

module.exports = router;
