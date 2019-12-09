const express = require('express');

var router = express.Router()

// require('dotenv').config({ path: 'variables.env' });

const bodyParser = require('body-parser');
const cors = require('cors');
const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:dcb29a79-09aa-41bb-a0ec-fdb33220fb0a",
    key: "1044354c-ac41-43ac-91be-0dec874fcc59:Ci6deJy3NC+aEBZ/bVlN+boK0uOF8UbA2uWSIUiwyd8=",
});

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/users', (req, res) => {
    const { userId } = req.body;

    chatkit
    .createUser({
        id: userId,
        name: userId,
    })
    .then(() => {
        res.sendStatus(201);
    })
    .catch(err => {
        if (err.error === 'services/chatkit/user_already_exists') {
        console.log(`User already exists: ${userId}`);
        res.sendStatus(200);
        } else {
        res.status(err.status).json(err);
        }
    });
});

router.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({
        userId: req.query.user_id,
    });
    res.status(authData.status).send(authData.body);
});





module.exports = router