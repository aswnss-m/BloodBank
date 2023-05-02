const router = require('express').Router();
let User = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');

router.route('/').post((req, res) => {
    const id = uuidv4(); // Generate a unique ID using uuidv4()
  const name = req.body.name;
  const age = Number(req.body.age);
  const bloodGroup = req.body.bloodGroup;
  const location = req.body.location;
  const contactNumber = req.body.contactNumber;

  const newUser = new User({
    id,
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
