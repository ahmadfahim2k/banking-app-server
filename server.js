const express = require('express');
const dbConn = require('./config');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
const customerRoutes = require('./customerRoutes');

dbConn();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use(customerRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))