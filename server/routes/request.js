const router = require('express').Router();
let RequestBlood = require('../models/request.model');

router.route('/').post((req,res)=>{
    const patientName = req.body.patientName;
    const patientAge = Number(req.body.patientAge);
    const patientBloodGroup = req.body.patientBloodGroup;
    const patientBloodUnits = Number(req.body.patientBloodUnits);
    const patientLocation = req.body.patientLocation;
    const standeeName = req.body.standeeName;
    const standeeNumber = req.body.standeeNumber;

    const newRequest = new RequestBlood({
        patientName,
        patientAge,
        patientBloodGroup,
        patientBloodUnits,
        patientLocation,
        standeeName,
        standeeNumber
    });

    newRequest.save()
        .then(() => res.json('Request added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;