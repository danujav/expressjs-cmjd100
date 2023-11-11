const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        address: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        tel: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 15
        },
    },
    {
        timestamps: true
    }
)

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;