const { Router } = require('express');
const axios = require('axios');
const Country = require('../models/Country');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    try {        
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        const apiInfo = await apiUrl.data.map(country => {
            return {
                id: country.cca3,
                name: country.name.official,
                image: country.flag[0],
                continent: country.region,
                capital: country.capital ? country.capital[0] : 'no capital loaded',
                subregion: country.subregion ? country.subregion : 'no subregion loaded',
                population: country.population
            };
        });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getApiInfo
};

