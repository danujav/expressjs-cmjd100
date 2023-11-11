const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all items');
});

router.get('/:id', (req, res) => {
    res.send(`Get item with id ${req.params.id}`);
});

router.post('/', (req, res) => {
    res.send(req.body);
});

router.put('/', (req, res) => {
    res.send(`Update item with id ${req.params.id}`);
});

router.delete('/', (req, res) => {
    res.send(`Delete item with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete item with id ${req.params.id}`);
});

module.exports = router;