const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
  res.send("GET User");
});

router.post('/user', (req, res) => {
  res.send("POST User");
});

module.exports = router;