const express = require('express');

const router = express.Router();

const activity = require('../services/activity');

router.get('/', async function (req, res, next) {

    try {

        res.json(await activity.retrieveActivity());

    } catch (err) {

        console.error("Error retrieving activity");
        next(err);

    }

})

router.post('/', async function(req, res, next) {

    try{

        res.json(await activity.addActivity(req.body));
        
    } catch (err) {

        console.error("Error while adding new activity");
        next(err);

    }
})

router.delete('/removeActivity/:id', async function(req, res, next) {

    try{

        res.json(await activity.remove(req.params.id));

    } catch (err) {

        console.error("Error removing activity");
        next(err);

    }

})



module.exports = router;

