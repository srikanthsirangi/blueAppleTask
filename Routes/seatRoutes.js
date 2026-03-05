const express = require("express");
const seatController = require("../Controllers/seatController");

const router = express.Router();

router.get("/seats", seatController.getAllSeats);
router.post("/seats", seatController.createSeats);
router.post("/book", seatController.bookSeat);

module.exports = router;
