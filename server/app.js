const users = require("./routes/users");
const auth = require("./routes/auth");
const cards = require("./routes/cards");
const express = require("express");
const app = express();
const http = require("http").Server(app);
require("dotenv").config();
const mongoose = require("mongoose");
const { User } = require("./models/user");
const cors = require("cors");

let isConnected = false; // track the connection

const connect = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(
      "mongodb+srv://DoovDevan:DoovDevan@cluster0.m4yfxvd.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "business_cards",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    isConnected = true;
    console.log("Connected to MongoDB...");
  } catch (ex) {
    console.log("Could not connect to MongoDB..." + ex);
  }
};

connect();
app.use(
  cors({
    origin: ["https://project-business-cards-1vti.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
    exposedHeaders: [
      "X-CSRF-Token",
      "X-Requested-With",
      "Accept",
      "Accept-Version",
      "Content-Length",
      "Content-MD5",
      "Content-Type",
      "X-Api-Version",
    ], // Only specify required headers
  })
);

app.use(express.json());

app.use("/api/users", users);

app.use("/api/auth", auth);

app.use("/api/cards", cards);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.get("/allusers", (req, res) => {
  const users = User.find({});
  console.log(users.length);
  res.send(users[0]);
});

const port = process.env.PORT;
http.listen(port, () => console.log(`Listening on port ${port}...`));
