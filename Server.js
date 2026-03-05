const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
const seatRoutes = require("./Routes/seatRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.use("/api", seatRoutes);

app.listen(3300, () => {
    console.log("Server is running on port 3300");
});
