const Event = require('../models/events.model'); 

exports.eventsCont = async (req, res) => {

    const eventData = req.body; 
  
    try {
      
      const event = new Event({

        title: eventData.title,
        displayName:eventData.displayName,
        date:eventData.date,
        time:eventData.time,
        type:eventData.type,
        venue:eventData.venue,
        organiser:eventData.organiser
        
      });
  
      
      await event.save();
  
      res.status(201).json({ message: 'Event saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving event' });
    }
  };


  exports.getAllEvents = async (req, res) => {
    try {
      const events = await Event.find(); 
  
      res.status(200).json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching events' });
    }
  };

  exports.getEventsByOrganiser = async (req, res) => {
    const organiserEmail = req.query.user; 
  
    try {
      const events = await Event.find({ organiser: organiserEmail });
  
      res.status(200).json(events);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching events by organiser' });
    }
  };

  exports.deleteEventById = async(req, res) => {
    const eventId = req.query.eventId;
  
    try {
      const deletedEvent = await Event.findByIdAndDelete(eventId);
  
      if (deletedEvent) {
        res.status(200).json({ message: 'deletedSuccessfully' });
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting event' });
    }
  }

  exports.getAbtEvent = async (req, res) => {

    try {
      
      const events = await Event.find()
        .sort({ eDate: -1 }) 
        .limit(5); 
  
      res.status(200).json(events);

      console.log('Success');

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error' })
    }

  }
  
  
  
  
  