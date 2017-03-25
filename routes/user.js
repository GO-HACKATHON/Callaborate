
module.exports = (app, passport) => {
  app.post('/register', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
  }));
}
