const mongoose = require('mongoose');

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  console.log(
    `MongoDB connected: ${connection.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDb;
