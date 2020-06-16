const mongoose = require("mongoose");
const passportLocal = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});// make connection to database or create it if it does not yet exist

const usersSchema = new mongoose.Schema({
    email: String,
    fname: String,
    lname: String,
    username: String,
    password: String,
});

usersSchema.plugin(passportLocal);

const User = mongoose.model("User", usersSchema);

module.exports.User = User;
