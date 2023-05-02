const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  }
},{
    timestamps:true,
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
