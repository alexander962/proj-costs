const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8000;

const apiRoutes = require('./backend/modules/routes/routes');

app.use(cors());

app.use(parser.json());

const uri = 'mongodb+srv://alexander:1488sasha@cluster0.yhbzy.mongodb.net/cost?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const db = mongoose.connection;
db.on('error', () => {
  console.error.bind(console, 'connection error:')
});
db.once('open', () => {
  console.log('connected');
});

app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}...`)
});