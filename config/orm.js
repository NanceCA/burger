var connection = require("./connection.js");

//methods to retrieve and store the data in the database

//how do I module.export the object in the same line as the definiton?
var ormObject = {

    //selectAll()
    all: function (cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result)
            console.log(result);
        })
    },
    //insertOne()
    create: function (table, cols, vals, cb) {
        var table = "burgers";
        var queryString = ("INSERT INTO", table, "(?) values = ??");

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(results);
        });
    },
    //updateOne()
    update: function (table, objColVals, condition, cb) {
        var queryString = ("UPDATE burgers SET ? = ?? WHERE ???");
        connection.query(queryString, [input1], function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    }

};

module.exports = ormObject;
