var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  skills:
  contact: {type: String},
  vision: {type: String},
  location: {type: String},
  interest: {type: String},
  image: {type: String, default: ''},
  passwordResetToken: {type: String, required: true},
  passwordResetExpires: {type: Date, required: Date.now},
});

module.exports = mongoose.model("User", UserSchema);
