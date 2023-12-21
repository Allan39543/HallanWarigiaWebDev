const mongoose = require('mongoose');

const attendSaveSchema = new mongoose.Schema({

  email:String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', 
  }

  
});

const UserSaveEvents= mongoose.model('UserSaveEvents', attendSaveSchema);

module.exports = UserSaveEvents;
