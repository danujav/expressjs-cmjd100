const express = require('express');
const app = express();
const port = 3000;

//import routes
const customer = require('./routes/customer');

//middleware
app.use(express.json());
app.use('/customers', customer);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});