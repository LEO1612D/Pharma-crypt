const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
//Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userData = require("./routes/userData");

dotenv.config();

//connect to mongoDB

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//Middleware
app.use(express.json());

//Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/data", userData);

// Serve static assets if in production

if (process.env.NODE_ENV === "production") {
  //Set static folder

  app.use(express.static("virtualbill/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "virtualbill", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
