const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'wes', age: 100 };
  //res.send('Hey! It works!');
  //res.json(wes);
  res.render('hello', { name: req.query.dog, breed: 'cavapoo' });
});

router.get('/reverse/:name', (req, res) => {
  const name = req.params.name;
  res.send(
    name
      .split('')
      .reverse()
      .join('')
  );
});

module.exports = router;
