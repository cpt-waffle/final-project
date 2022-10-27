const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const cats = ['Garfield', 'Hello Kitty', 'Felix', 'Fritz', 'Tintin', 'Rebel', 'Salem', 'Mr Meows'];
  // ^ this would be our database call....
  res.json(cats);
});

module.exports = router;
