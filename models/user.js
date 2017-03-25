var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  fullname: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String},
  data: [{
    gender: {type: String, default: ''},
    age: {type: Number, default: ''},
    location: {type: String, default: ''},
    skills: {type: String, default: ''},
    vision: {type: String, default: ''},
    interest: {type: String, default: ''},
    image: {type: String, default: ''},
  }]
  passwordResetToken: {type: String, default: ''},
  passwordResetExpires: {type: Date, default: Date.now},
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
