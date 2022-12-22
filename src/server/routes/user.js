
const express = require('express');

const router = express.Router();

const user = require('../services/user');


router.get('/', async function (req, res, next) {

    try {

        res.json(await user.retrieveUser());

    } catch (err) {

        console.error("Error searching users");
        next(err);

    }

})

router.get('/searchByEmail/:email', async function(req, res, next) {

    try {

        res.json(await user.retrieveUserByEmail(req.params.email));

    } catch (err) {

        console.error("Error searching user by email");
        next(err);

    }


})


router.get('/searchByType/:type', async function(req, res, next) {

    try {

        res.json(await user.retrieveUserByType(req.params.type));

    } catch (err) {

        console.error("Error searching user by type");
        next(err);

    }


})


router.post('/', async function(req, res, next) {

    try{

        res.json(await user.addUser(req.body));
        
    } catch (err) {

        console.error("Error while adding new user");
        next(err);

    }

})


router.delete('/removeUser/:email', async function(req, res, next) {

    try{

        res.json(await user.remove(req.params.email));

    } catch (err) {

        console.error("Error removing user");
        next(err);

    }

})

router.put('/updateUserDetail/:email', async function(req, res, next) {

    try{

        res.json(await user.updateUserInfo(req.params.email, req.body));


    } catch (err) {

        console.error("Error updating user");
        next(err);

    }
})

router.put('/updateUserPassword', async function(req, res, next) {

    try{

        res.json(await user.update(req.body));


    } catch (err) {

        console.error("Error updating user");
        next(err);

    }
})


module.exports = router;