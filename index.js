require("./serverfile/connection");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

// import routes

const BlogRoute = require("./serverfile/route");

// route middleware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/", BlogRoute);

app.listen(PORT, () => console.log(`connection in ${PORT}`));
