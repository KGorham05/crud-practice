const db = require("../models")

module.exports = function (app) {

    // GET route for getting all the posts
    app.get("/api/posts", (req, res) => {
        db.Post.findAll({})
            .then(dbPost => {
                console.log(dbPost);
                res.json(dbPost);
            })
            .catch(err => {
                console.log(err)
            });
    });

    // GET route for getting a single post
    app.get("/api/posts/:id", (req, res) => {
        db.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(dbPost => {
                console.log(dbPost);
                res.json(dbPost);
            })
            .catch(err => {
                console.log(err)
            });
    });

    // POST route for creating a new post
    app.post("/api/posts", (req, res) => {
        db.Post.create({
            title: req.body.title,
            body: req.body.body
        })
            .then(dbPost => {
                res.json(dbPost)
            });
    });

    // PUT route for updating a post
    app.put("/api/posts", (req, res) => {
        db.Post.update(req.body, {
            where: {
                id: req.body.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });

    // DELETE route for deleting a post
    app.delete("/api/posts/:id", (req, res) => {
        db.Post.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(dbPost => {
                res.json(dbPost);
            });
    });
};