//Defining the controllers which are the routes needed for the application 
var express = require("express");

var router = express.Router();

//importing the model to use the databse functions
var burger = require("../models/burger.js");

//creating routes here
router.get("/", function (req, res) {

    burger.all(function (data) {
        var hbsObject = {
            burger: data //burger is the object that is getting sent to the index file
        }
        console.log("the data sent is", hbsObject);
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function (req, res) {

    burger.create(["burger_name", "devoured"],
        [req.body.name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertID });
        });
});

router.put("api/burgers/:id", function (req, res) {
    var condition = "id= " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;