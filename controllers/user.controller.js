const User = require('../models/user.model');

exports.index = (req, res) => {
  res.render('index')
}
exports.login = (req, res) => {
  res.render('users/login')
}
exports.signup = (req, res) => {
  res.render('users/signup')
}

exports.createUser = (req, res) => {
  User.create(req.body)
    .then(user => {
      res.render('users/profile', {user})
    })
    .catch((errors) => {
      res.render('users/signup', {errors, user: req.body})
    }) 
}