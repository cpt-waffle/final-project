const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catsRouter  = require('./routes/cats');


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cats', catsRouter);

app.get('/dogs', (req,res) => {
  res.send('ok');
})

app.get('/test', (req,res) => {
  res.send('ok');
})


 module.exports = app;
