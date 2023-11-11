const express = require('express');
const router = express.Router();

const cusController = require('../controller/customerController');
const Customer = require("../model/customerModel");

router.get("/", cusController.getAll);

router.get('/:id', cusController.getById);

router.post('/', cusController.create);

router.put('/:id', cusController.update);

router.delete('/:id', cusController.delete);

module.exports = router;