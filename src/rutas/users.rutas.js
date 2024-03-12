const { Router } = require('express');
const { darHora, insertarUsuario } = require('../controllers/users.controller')
const pool = require('../db');
const router = Router();

router.get('/', darHora);

router.post('/usuario', insertarUsuario);

router.delete('/', (req,res) => {
    res.send('Hello world');
})

router.put('/', (req,res) => {
    res.send('Hello world');
})

module.exports = router;