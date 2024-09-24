/* 
En la terminal:
  - Crear la carpeta donde estará el proyecto e ir a esa carpeta.
  - npm init.
  - npm i --save express.
  - En la carpeta fuente donde está el proyecto: express --view=pug tablas-RESTful.
  - Volver a la carpeta del proyecto: npm install.
  - Crear la carpeta controllers y agregar un archivo js, en este caso users.js, aquí se le dará
    formato de lo que se quiere mandar a imprimir en el postman.
  - En el package.json, en los scripts, agregar: "dev": "supervisor ./bin/www" para que al hacer
    cambios en el servidor no se tenga que tirar y volver a levantar el servidor.
  - Correr el servidor con npm run dev.
  - Agregar el archivo .gitignore escribiendo dentro de él: node_modules y package-lock.json para
    que cuando alguien externo lo jale del repositorio no existan fallas.
*/

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
