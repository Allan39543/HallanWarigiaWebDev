const AttendEvents = require('../models/users.attending.events.model')
const SaveEvents = require('../models/users.attending.save.model')

exports.attendEventCont = async (req, res) => {

  const userData = req.body;

  try {

    const attendEvent = new AttendEvents({

      email: userData.email,
      eventId: userData.eventId

    });


    await attendEvent.save();

    res.status(201).json({ message: 'Event saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving event' });
  }
};

exports.savedEventCont = async (req, res) => {

  const userData = req.body;

  try {

    const saveEvent = new SaveEvents({

      email: userData.email,
      eventId: userData.eventId

    });


    await saveEvent.save();

    res.status(201).json({ message: 'Event saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving event' });
  }
};

exports.getYourEvents = async (req, res) => {

  const email = req.query.userData;

  console.log(email)

  try {
    const YourEvents = await AttendEvents
      .find({ email: email })
      .populate('eventId');

    res.status(200).json(YourEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
};

exports.getSavedEvents = async (req, res) => {

  const email = req.query.userData;

  console.log(email)

  try {
    const YourEvents = await SaveEvents
      .find({ email: email })
      .populate('eventId');

    res.status(200).json(YourEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
};

