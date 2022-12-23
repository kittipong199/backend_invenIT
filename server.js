const express  = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const routeUrl = require('./controllers/item');
const routerPCUrl = require('./controllers/pc')
const postUrl = require('./controllers/item/post');
const postPCUrl = require('./controllers/pc/post');
app.use('/get', routeUrl);

app.use('/item', postUrl);

app.use('/get/pc', routerPCUrl);

app.use('/pc', postPCUrl);

app.use(express.json());
const { json } = require('sequelize');
app.use(express.urlencoded({ extended:false }))

app.listen(3000, () => console.log('Server is running on port 3000'));