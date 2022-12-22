const express = require('express');

const router = express.Router();

const businessUser = require('../services/businessUser');

router.get('/', async function (req, res, next) {

    try {

        res.json(await businessUser.retrieveBusinessUser());

    } catch (err) {

        console.error("Error searching business users");
        next(err);

    }

})


router.get('/searchByEmail/:email', async function(req, res, next) {

    try {

        res.json(await businessUser.retrieveBusinessUserByEmail(req.params.email));

    } catch (err) {

        console.error("Error searching business user by email");
        next(err);

    }

})

router.post('/', async function(req, res, next) {

    try{

        res.json(await businessUser.addBusinessUser(req.body));
        
    } catch (err) {

        console.error("Error while adding new business user");
        next(err);

    }

})

router.delete('/removeUser/:email', async function(req, res, next) {

    try{

        res.json(await businessUser.remove(req.params.email));

    } catch (err) {

        console.error("Error removing business user");
        next(err);

    }

})

router.put('/updateUserDetail/:email', async function(req, res, next) {

    try{

        res.json(await businessUser.updateBusinessUserDetails(req.params.email, req.body));


    } catch (err) {

        console.error("Error updating business user");
        next(err);

    }
})

module.exports = router;
