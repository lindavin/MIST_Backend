const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('challenge-gallery', {

    });//renders the gallery of challenges
});

router.get('/create', (req, res) => {
    res.render('create-challenge', {
        user: req,
        userData: req.user
      }); //renders the form to create a challenge
});
module.exports = router;

