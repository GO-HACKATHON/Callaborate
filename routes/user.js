var User = require('../models/user');

module.exports = (app, passport, mongoose) => {
  app.post('/register', passport.authenticate('local.signup', {
    successRedirect: '/firstlogin',
    failureRedirect: '/',
    failureFlash: true
  }));

  app.post('/login', passport.authenticate('local.login', {
    successRedirect: '/home',
    failureRedirect: '/asd',
    failureFlash: true
  }));

  app.post('/inputData', (req, res, user) => {
    User.findById(req.params.id, (err, user) => {
      if(err){
          console.log(err)
      }
      var userFullname = req.User.fullname;
      var userEmail = req.User.email;
      var newUserData = new User();
      newUserData.fullname = userFullname;
      newUserData.email = userEmail;
      newUserData.password = newUserData.encryptPassword(user.password);
      newUserData.gender = req.body.gender;
      newUserData.age = req.body.age;
      newUserData.location = req.body.location;
      newUserData.skills = req.body.skills;
      newUserData.vision = req.body.vision;
      newUserData.interest = req.body.interest;

      newUserData.save((err) => {
          if(err){
            console.log(err);
            return;
          }
          return(null, newUserData);
      });
    })
  });

  app.get('/home', (req, res) => {
    res.render('./user/edit');
  })

  app.get('/home2', (req, res) => {
    res.render('home');
  })

  app.get('/firstlogin', (req, res) =>{
    res.render('./user/firstlogin');
  });

  /* app.post('/firstlogindone', (req, res, id) => {
    User.findById(id, function(err){
      if(err){
        console.log(err);
      }

      var updatedUser = new User();

      updatedUser.gender = req.body.gender;
      updatedUser.age = req.body.gender;
      updatedUser.location = req.body.gender;
      updatedUser.skills = req.body.gender;
      updatedUser.vision = req.body.gender;
      updatedUser.interest = req.body.gender;

      updatedUser.save(function(err){
        if(err){
          console.log(err);
        }
      res.render('index');
      });
    });
  }); */
}
