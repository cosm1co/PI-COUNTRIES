const router = require('express').Router();

const { getCountries } = require('../Controllers/getCountries')

// const router = Router();

router.get('/', getCountries)

module.exports = router;