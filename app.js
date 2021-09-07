const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const passport = require('passport')
const flash = require('connect-flash')
const session = require('express-session')
const bodyParser = require('body-parser')

let indexRouter = require('./routes/index')

const { handleError } = require('./middlewares/validations/error-handler.middleware')
const { appendCategories } = require('./middlewares/appendCategories.middlware')

require('./config/passport')(passport)

const db = require('./models/index')

db.sequelizeMain.authenticate()
  .then(() => console.log('connected'))
  .catch((err) => console.log(err))

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use(session({
  secret: 'root',
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 90000
  }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(appendCategories)

app.use(flash())

app.use('/', indexRouter)

app.use(handleError())
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
