
const express = require('express');

const router = express.Router();

const userSession = require('../services/user_session')


router.get('/getToken/:id', async function(req, res, next) {

    try {
        
        res.json(await userSession.retrieveSessionToken(req.params.id))

    } catch(err) {

        console.log("Error retrieving token");
        next(err)

    }


});

router.post('/createToken', async function(req, res, next) {

    try {

        res.json(await userSession.createSessionToken(req.body));
    

    } catch(err) {

        console.log("Error creating token");
        next(err)

    }
})

router.delete('/deleteToken', async function(req, res, next) {

    try {

        res.json(await userSession.createSessionToken(req.body));


    } catch(err) {

        console.log("Error deleting token");
        next(err)

    }
})


module.exports = router;