const express  = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const routeUrl = require('./controllers/item');
<<<<<<< HEAD
const routeCUrl = require('./controllers/item/c3item');
const getpcUrl = require('./controllers/pc/pc_index.js')
const postUrl = require('./controllers/item/post');
const postPCUrl = require('./controllers/pc/pc_post');

const postUser = require('./controllers/user/login.js');

app.use('/get', routeUrl);
app.use('/get/C3', routeCUrl);

app.use('/item', postUrl);

app.use('/getpc/pc', getpcUrl);

app.use('/pc', postPCUrl);

app.use('/user', postUser);

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

app.listen(5000, () => console.log('Server is running on port 5000'));



