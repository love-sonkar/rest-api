const BlogModel = require("./connection");

// using async await

// filter by author

exports.FindeByAuthor = async (req, res) => {
  const { author } = req.query;
  const QueryObj = {};
  if (author) {
    QueryObj.author = author;
  }
  let data = await BlogModel.find(QueryObj).catch((e) => {
    res.status(401).json({
      status: "error",
      massage: "not found",
    });
  });
  res.status(200).json({ data });
};

// get post by id

exports.GetPostById = async (req, res) => {
  const { _id } = req.query;
  const Object = {};
  if (_id) {
    Object._id = _id;
  }

  let data = await BlogModel.find(Object);
  res.status(200).json({ data });
};

// get blog api
exports.HomeBlog = async (req, res) => {
  let Result = await BlogModel.find().catch((e) => {
    res.status(401).json({
      status: "Error",
      message: "not found",
    });
  });
  res.status(200).json({ Result });
};

// blog creation
// normal promise handle
// addblog api
exports.AddBlog = (req, res) => {
  if (!req.body) {
    res.status(401).send({ massage: "this cannot be empty" });
  }

  let create = new BlogModel({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  create
    .save(create)
    .then(() => {
      res.status(201).send(create);
    })
    .catch((e) => {
      res.send(e);
    });
};

// edit blog api

exports.UpdateBlog = async (req, res) => {
  let data = await BlogModel.findByIdAndUpdate(req.params.id, req.body).catch(
    (e) => {
      res.status(401).json({
        status: "error",
        massage: "cannot found id",
      });
    }
  );
  res.status(200).send(data);
};

// Delete blog api

exports.DeleteBlog = async (req, res) => {
  let data = await BlogModel.findByIdAndDelete(req.params.id).catch((e) => {
    res.status(401).json({
      status: "Error",
      message: "error.message",
    });
  });
  res.status(200).send(data);
};
