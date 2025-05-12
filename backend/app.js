const express = require('express');
const app = express();

const axios = require('axios');
const cors = require('cors');

const PORT = 3000;

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        const characters = response.data.results;
        res.json(characters)
    } catch(err){
        console.log(err)
    }
});
app.get('/characters/:name', async (req, res) => {
    const nameCharacter = req.params.name
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nameCharacter}`)
        const characters = response.data.results
        if (character) {
            const newDataCharacter = character.map(char => {
                const {name, status, species, gender, origin, image} = char;
                const charObject = {
                    name,
                    status, 
                    species, 
                    gender, 
                    origin: origin.name, 
                    image
                }
                return charObject
            })
            res.json(newDataCharacter)
        } else {
            console.log('char not found')
            res.status(404).json({mensaje:'user not found'})
        }

    } catch (err) {
        console.log(err)
        res.status(404).json({mensaje:'user not found'})
    }
});

app.listen(PORT, () => console.log(`Servidor en el puerto http://localhost:${PORT}`));