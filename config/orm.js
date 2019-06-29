var connection = require("./connection.js");

//methods to retrieve and store the data in the database
var ormObject = {

    //selectAll()
    all: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },
    //insertOne()
    create: function (vals, cb) {
        var queryString = ("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)");
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    //updateOne()
    update: function (condition, cb) {
        var queryString = ("UPDATE burgers SET devoured = true  WHERE id= ?");
        connection.query(queryString, condition, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }

};

module.exports = ormObject;
