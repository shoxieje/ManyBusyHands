
const express = require('express');

const router = express.Router();

const jobAd = require('../services/jobAd');

router.post('/createJobAd', async function (req, res, next) {

    try {

        res.json(await jobAd.createJobAd(req.body))

    } catch (err) {

        console.error("Error while creating new job ad");
        next(err);

    }


})


router.put('/inactivateJobAd', async function (req, res, next) {

    try {

        res.json(await jobAd.inActivateJobAd(req.body))

    } catch (err) {

        console.error("Error while inactivating job ad");
        next(err);

    }


})

router.put('/editJobAd', async function (req, res, next) {

    try {

        res.json(await jobAd.ediJobAd(req.body))

    } catch (err) {

        console.error("Error while editing job ad");
        next(err);

    }


})

router.get('/getJobAdByType/:type/:user', async function (req, res, next) {

    try {

        res.json(await jobAd.retrieveAdByType(req.params.type, req.params.user));

    } catch (err) {

        console.error("Error searching ad by type");
        next(err);

    }

})

router.get('/getJobAdByUUID/:id', async function (req, res, next) {

    try {

        res.json(await jobAd.retrieveAdByUUID(req.params.id));

    } catch (err) {

        console.error("Error searching ad by id");
        next(err);

    }

})


router.delete('/deleteJobAd/:id', async function(req, res, next) {

    try{

        res.json(await jobAd.remove(req.params.id));

    } catch (err) {

        console.error("Error removing job ad");
        next(err);

    }

})

module.exports = router;