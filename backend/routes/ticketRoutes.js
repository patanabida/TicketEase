const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const bookTicket = require("../controllers/ticketController");

const TicketRouter = express.Router();

TicketRouter.post("/book", authMiddleware, bookTicket);

module.exports = TicketRouter;
