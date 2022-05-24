const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllCountries = require('./getAllCountries.js');
const getCountryQuery = require('./getCountryQuery')
const getCountryId = require('./getCountryId')
const postActivity = require('./postActivity');



const router = Router();

router.get('/', (req, res) =>{
    res.send('HOME')
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/countries', getAllCountries)
 router.use('/countries', getCountryId)
 router.use('/countries', getCountryQuery)
 router.use('/activities', postActivity)

module.exports = router;
