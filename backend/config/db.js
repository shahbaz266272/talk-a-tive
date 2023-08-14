const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MONGODB connected", connection.connection.host);
  } catch (error) {
    console.log("MONGODB error", error.message);
    process.exit();
  }
};

module.exports = connectDB;
