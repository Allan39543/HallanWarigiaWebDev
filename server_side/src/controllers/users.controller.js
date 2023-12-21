const User = require('../models/users.model'); 

exports.userCont = async (req, res) => {

    const userData = req.body; 
  
    try {
      // Create a new Event instance with the data from the API
      const user = new User({

        email:userData.email,
        names:userData.names,
        course:userData.course,
        gradyr:userData.gradyr,
        type:userData.type
        
      });
  
      // Save the event to the "events" collection
      await user.save();
  
      res.status(201).json({ message: 'Event saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error saving event' });
    }
  };


  exports.userVerifyCont = async (req, res) => {
    const userEmail = req.query.user;
  
    try {
      const user = await User.findOne({ email: userEmail });
  
      if (user) {
        
        const userType = user.type; 
  
        res.status(200).json({ message: 'UserExists', type: userType });
        console.log("User Exists",userType);
      } else {
        
        res.status(404).json({ message: 'UserNotFound' });
        console.log("User Not Found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error checking user existence' });
    }
  };


  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find(); 
  
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  };

  exports.deleteUserById = async(req, res) => {
    const userId = req.query.userId;
  
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (deletedUser) {
        res.status(200).json({ message: 'deletedSuccessfully' });
      } else {
        res.status(404).json({ message: 'Event not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting event' });
    }
  };
  
  
  