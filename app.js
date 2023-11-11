const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//import routes
const customer = require('./routes/customer');
const item = require('./routes/item');

//middleware
app.use(express.json());
app.use('/api/customers', customer);
app.use('/api/items', item)

mongoose.connect('mongodb+srv://danu:1234@cluster0.5z3xetx.mongodb.net/kade?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to MongoDB...');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(err => console.error(err.message));