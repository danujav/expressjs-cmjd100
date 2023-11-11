const express = require('express');
const app = express();
const port = 3000;

//import routes
const customer = require('./routes/customer');
const item = require('./routes/item');

//middleware
app.use(express.json());
app.use('/api/customers', customer);
app.use('/api/items', item)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});