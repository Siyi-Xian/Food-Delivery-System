const express = require('express');
const router = express.Router();
const Pusher = require('pusher');



var pusher = new Pusher({
  appId: '907319',
  key: '49096276b737a48a5ba1',
  secret: '053b81abd1cd1b86ecfd',
  cluster: 'us2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});






router.post('/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
  });

  module.exports = router