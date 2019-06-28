var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Query = require('./database').Connect();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

Query.query(`create table if not exists IlostMySelft.documentslost (id int NOT NULL AUTO_INCREMENT, n_doc INTEGER(20) ,doc_type VARCHAR(40), blood_type VARCHAR(10), expe_place VARCHAR(50), name_p VARCHAR(50), cellphone INTEGER(20), location VARCHAR(50), PRIMARY KEY (id));`, function(error, result){
  if (error){
    console.log(error);
  }
  console.log(result);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
