const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

router.route('/').get((req, res) => {
  res.render('login');
});

router.route('/').post(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json('Invalid email or password');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json('Invalid email or password');
  }

  // Save user information in session object
  req.session.user = user;

  res.redirect('/dashboard');
});

module.exports = router;
