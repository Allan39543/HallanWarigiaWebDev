const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  displayName: String,
  date: Date,
  time: String,
  type: String,
  venue: String,
  organiser: String
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
