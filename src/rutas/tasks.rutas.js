const { Router } = require('express');
const { darHora } = require('../controllers/tasks.controller')
const pool = require('../db');
const router = Router();

router.get('/', darHora);

router.post('/', (req,res) => {
    res.send('Hello world');
})

router.delete('/', (req,res) => {
    res.send('Hello world');
})

router.put('/', (req,res) => {
    res.send('Hello world');
})

module.exports = router;