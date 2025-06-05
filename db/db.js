const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait for connection to database...");

  mongoose
    .connect(
      "mongodb+srv://rafaeladurandcontato:root@cluster0.xeuoym1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;

connectDatabase();