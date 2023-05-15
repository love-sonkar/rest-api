const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogpost")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => console.log(e));

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const BlogModel = new mongoose.model("blogs", BlogSchema);

module.exports = BlogModel;
