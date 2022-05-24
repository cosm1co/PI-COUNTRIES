const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.post('/', (req, res) =>{
    res.send('get activities')
})


module.exports = router;