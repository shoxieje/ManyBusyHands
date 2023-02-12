
const express = require('express');

const router = express.Router();

const award = require('../services/award');

router.get('/', async function(req, res, next) {

    try {

        res.json(await award.retrieveAwards())

    } catch (err) {

        console.error("Error retrieving awards");
        next(err);

    }


})

router.get('/searchByName/:name', async function(req, res, next) {

    try {

        res.json(await award.retrieveAwardsByName(req.params.name))

    } catch (err) {

        console.error("Error retrieving award by name");
        next(err);

    }


})

module.exports = router;

