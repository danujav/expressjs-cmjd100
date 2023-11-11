const Customer = require('../model/customerModel');

module.exports = {
    getAll: async(req, res) => {
        try {
            const customers = await Customer.find({})
            res.status(200).json({
                success: true,
                data: customers
            })
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    },

    getById: async(req, res) => {
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
    },

    update: async(req, res) => {
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
    },

    create: async (req, res) => {
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
    },

    delete:  async (req, res) => {
        try {
            const {id} = req.params;

            const customer = await Customer.findByIdAndDelete(id);
            if(!customer) {
                return res.status(404).json({
                    success: false,
                    message: `Customer with id ${id} not found`
                });
            }
            return res.status(200).json(customer);
        } catch(error) {
            res.status(500).json({message: error.message});
        }
    }
}
