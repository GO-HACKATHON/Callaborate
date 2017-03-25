var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  fullname: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String},
  gender: {type: String, default: ''},
  age: {type: Number, default: ''},
  location: {type: String, default: ''},
  skills: {type: String, default: ''},
  vision: {type: String, default: ''},
  interest: {type: String, default: ''},
  image: {type: String, default: ''},
  passwordResetToken: {type: String, default: ''},
  passwordResetExpires: {type: Date, default: Date.now},
});

UserSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

module.exports = mongoose.model('User', UserSchema);
