const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const bloodGroup = req.body.bloodGroup;
  const location = req.body.location;
  const contactNumber = req.body.contactNumber;

  const newUser = new User({
    name,
    age,
    bloodGroup,
    location,
    contactNumber
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
