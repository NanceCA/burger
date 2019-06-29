var ormObject = require("../config/orm.js");

var burger = {
    all: function (cb) {
        ormObject.all(function (res) {
            cb(res)//call back function that is used on response
        })
    },
    create: function (cols, vals, cb) {
        ormObject.create(cols, vals, function (res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        ormObject.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }

    //end of object
}

module.exports = burger;