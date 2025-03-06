const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const AuthRouter = require("./routes/authRoutes");
const TicketRouter = require("./routes/ticketRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5500" }));

app.use("/auth", AuthRouter);
app.use("/tickets", TicketRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    connectDB();
    console.log(`Server running on port ${PORT}`)
} );
