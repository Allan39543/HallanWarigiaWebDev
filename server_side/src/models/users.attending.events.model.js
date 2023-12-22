const mongoose = require('mongoose');

const userAttendSchema = new mongoose.Schema({

  email: String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }

});


const UserAttend = mongoose.model('UserAttendingEvents', userAttendSchema);

module.exports = UserAttend;


