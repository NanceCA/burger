var ormObject = require("../config/orm.js");

var burger = {
    all: function (cb) {
        ormObject.all(function (res) {
            cb(res)//call back function that is used on response
        })
    },
    create: function (vals, cb) {
        ormObject.create(vals, function (res) {
            cb(res);
        })
    },
    update: function (condition, cb) {
        ormObject.update(condition, function (res) {
            cb(res);
        });
    }

    //end of object
}

module.exports = burger;