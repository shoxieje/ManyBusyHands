
const express = require('express');

const router = express.Router();

const candidate = require("../services/candidate");


router.get('/:id', async function(req, res, next) {

    try {

        res.json(await candidate.retrieveJobByID(req.params.id))

    } catch(err) {

        console.error("Error retrieving candidates")
        next(err)

    }

})

router.post('/create', async function(req, res, next) {

    try {

        res.json(await candidate.createCandidate(req.body))

    } catch(err) {

        console.error("Error creating candidate")
        next(err)

    }

})


router.put('/:email/setFavorite/:x', async function(req, res, next) {

    try {

        res.json(await candidate.makeFavorite(req.params.email, req.params.x))

    } catch(err) {

        console.error("Error making favorite candidate")
        next(err)

    }
})

module.exports = router