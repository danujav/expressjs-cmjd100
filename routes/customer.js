const express = require('express');
const router = express.Router();
const Customer = require('../model/customerModel');

// app.use(express.json());

router.get('/', (req, res) => {
    res.send('Customers API just called!');
});

router.get('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} just called!`);
});

router.post('/', async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json({
            success: true,
            data: customer
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
});

router.put('/', (req, res) => {
    res.send(req.body);
});

router.delete('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} just deleted!`);
});

module.exports = router;