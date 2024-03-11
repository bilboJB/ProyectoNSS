const { Router } = require('express');
const pool = require('../db');
const router = Router();

router.get('/', async(req,res) => {
    const result = await pool.query('SELECT NOW()');
    console.log(result);
    res.json(result.rows[0].now);
})

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