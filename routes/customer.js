const express = require('express');
const router = express.Router();
const Customer = require('../model/customerModel');

// app.use(express.json());

router.get('/', async(req, res) => {
    try {
        const customers = await Customer.find({})
        res.status(200).json({
            success: true,
            data: customers
        })
    } catch (error) {
        res.status(500).send({message: error.message});
    }
    const customers = Customer.find({});

});

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findById(id);

        res.status(200).json({
            success: true,
            data: customer
        });
    } catch(e) {
        res.status(500).jso({message: e.message});
    }
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

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const customer = await Customer.findByIdAndUpdate(id, req.body);

        if(!customer) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }
        return res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});

router.delete('/:id', (req, res) => {
    res.send(`Customer with id ${req.params.id} just deleted!`);
});

module.exports = router;