const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const EmployeeRoute = require("./routes/employee");
const AuthRoute = require("./routes/auth");
const folderRoute = require("./routes/folder");
const fileRoute = require("./routes/file");

const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://joe:joe@cluster0.thblp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    const db = mongoose.connection;

    db.on("error", (err) => {
      console.log(err);
    });

    db.once("open", () => {
      console.log("Database connection");
    });

    const app = express();

    var corsOptions = {
      origin: "http://localhost:8081",
    };

    app.use(cors(corsOptions));

    app.use(morgan("dev"));
    app.use(express.urlencoded({ extend: true }));
    app.use(express.json());
    app.use("/uploads", express.static("uploads"));

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });

    app.use("/api/employee", EmployeeRoute);
    app.use("/api", AuthRoute);
    app.use("/api/folder", folderRoute);
    app.use("/api/file", fileRoute);


  });
