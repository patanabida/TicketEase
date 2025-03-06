const TicketModel = require("../models/ticket");
const sendEmail = require("../utils/emailService");

const bookTicket = async (req, res) => {
  try {
    const { from, to, dateOfTravel, numberOfPassengers } = req.body;
    const totalPrice = numberOfPassengers * 100; // Example price calculation
    const ticket = new TicketModel({
      userId: req.user.userId,
      from,
      to,
      dateOfTravel,
      numberOfPassengers,
      totalPrice,
    });
    await ticket.save();
    res.status(201).json({ message: "Ticket booked successfully!" });
    sendEmail();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = bookTicket;
