const mongoose = require("mongoose");
const passportLocal = require("passport-local-mongoose");
const sanitize = require('mongo-sanitize');

mongoose.connect("mongodb://localhost:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});// make connection to database or create it if it does not yet exist

// Schemas
const usersSchema = new mongoose.Schema({
    email: String,
    fname: String,
    lname: String,
    username: String,
    password: String,
});

const challengesSchema = new mongoose.Schema({
    categoryid: String,
    position: String,
    createdAt: String,
    modifiedAt: String,
    title: String,
    name: String,
    description: String,
    code: String,
    rating: Number,
});



// Configuring Schemas
usersSchema.plugin(passportLocal);

// Models
const User = mongoose.model("User", usersSchema);
const Challenges = mongoose.model("Challenges", challengesSchema);

module.exports.User = User;
module.exports.Challenges = Challenges;

module.exports.sanitize = sanitize; //sanitizes string

//mongoose query??
var uri = 'mongodb://localhost:27017/usersDB';
mongoose.createConnection(uri, { server: { poolSize: 100 } });

var query = (function (query, callback) {
    mongoose.connection(function (err, connection) {
        connection.query(query, function (err, document, fields) {
            if (err) {
                callback(null, err);
            }
            else {
                console.log("no error");
                callback(rows, null);
            }
        });
        connection.release();
    });
}); // database.query(query, callback(rows, error));
module.exports.query = query;