const route = require("express").Router();
const RouteFile = require("./Blogfile");

// pagination limit

route.get("/", RouteFile.Pagination);

// filter by author
route.get("/author", RouteFile.FindeByAuthor);

// filter by id
route.get("/id", RouteFile.GetPostById);

// Curd Opration
route.get("/all", RouteFile.HomeBlog);
route.post("/addblog", RouteFile.AddBlog);
route.post("/update/:id", RouteFile.UpdateBlog);
route.delete("/delete/:id", RouteFile.DeleteBlog);

module.exports = route;
