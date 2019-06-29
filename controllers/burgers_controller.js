//Defining the controllers which are the routes needed for the application 
var express = require("express");

var router = express.Router();

//importing the model to use the database functions
var burger = require("../models/burger.js");

//creating routes here
router.get("/", function (req, res) {

    burger.all(function (data) {
        var hbsObject = {
            burger: data //burger is the object that is getting sent to the index file
        }
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("we got here")
    burger.create([req.body.name, false], function (result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id)
    console.log("we've made it to the controller")

    burger.update(req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;