const { TimestreamInfluxDB } = require('aws-sdk');
const express = require('express');
const router = express.Router();

router.get('/get/data');

router.post('/add/data');
router.post('/modify/data');
router.post('/delete/data');
router.post('/send/password', controller.api.sendPw);

module.exports = router;

_selectUserData = async (e) => {
    const res = await axios('/send/pw', {
      method : 'POST',
      url : 'localhost:3000',
      data : {},
      headers: new Headers()
      })
    }
