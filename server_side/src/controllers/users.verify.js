

exports.userVerifyCont = async (req, res) => {
  const userEmail = req.query.user;

  try {
    const user = await User.findOne({ email: userEmail });

    if (user) {
      
      res.status(200).json({ message: 'User exists' });
    } else {
      
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error checking user existence' });
  }
};
