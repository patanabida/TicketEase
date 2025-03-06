const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  dateOfTravel: { type: Date, required: true },
  numberOfPassengers: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const TicketModel = mongoose.model("ticket", TicketSchema);

module.exports = TicketModel;
