const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const seatRoutes = require("./Routes/seatRoutes");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api", seatRoutes);

app.listen(3300, () => {
    console.log("Server is running on port 3300");
});
