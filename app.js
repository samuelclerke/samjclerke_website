var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var session = require('express-session');

var databasePool = mysql.createPool({
  host: 'localhost',
  database: 'samjclerke_website'
});

var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');

var app = express();

// Middleware
app.use(function(req, res, next) {
  req.pool = databasePool;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
