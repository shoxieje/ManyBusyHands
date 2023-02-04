const express = require('express');

const router = express.Router();

const postcode = require('../services/postcode')

router.get('/', async function(req, res, next) {

    try {

        res.json(await postcode.retrievePostcode())

    } catch (err) {

        console.error("Error retrieving postcode");
        next(err);

    }
})

module.exports = router;
