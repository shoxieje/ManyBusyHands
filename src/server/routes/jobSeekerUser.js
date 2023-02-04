
const express = require('express');

const router = express.Router();

const jobSeekerUser = require('../services/jobSeekerUser')

router.get('/searchByEmail/:email', async function(req, res, next) {

    try {

        res.json(await jobSeekerUser.retrieveCandidateDetail(req.params.email))

    } catch (err) {

        console.error("Error searching job seeker user by email");
        next(err);

    }

})

module.exports = router;