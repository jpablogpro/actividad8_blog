const router = require('express').Router();

const { getAllAuthors } = require('../../controllers/authors.controller');

router.get('/', getAllAuthors)

module.exports = router;