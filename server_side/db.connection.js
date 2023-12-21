const mongoose = require('mongoose');

const connectDatabase = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(
      'mongodb+srv://hwarigia:EP7JI3VrIE0g0PG1@cluster0.h156wx4.mongodb.net/?retryWrites=true&w=majority',
      connectionParams
    );

    console.log('Database connected successfully');
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  connectDatabase,
  mongoose,
};
