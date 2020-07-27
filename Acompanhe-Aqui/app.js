require('dotenv').config();
const express = require('express');
// const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const flash = require("connect-flash");
const Users = require('./models/Users');
const app = express();

mongoose
  .connect(process.env.MONGODBATLAS_URI, { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'our-passport-local-strategy-app',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 60 * 1, // 3 min
  }),
}));

passport.serializeUser((user, cb) => {
  console.log('(app.js) User +' + user);
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  console.log('(app.js) Id +' + id);
  Users.findById(id, (err, user) => {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(flash());
passport.use(new LocalStrategy({
  passReqToCallback: true
}, (req, username, password, next) => {
  Users.findOne({ username }, (err, user) => {
    // if (user.userCanceled === true) {
    //   return next(null, false, { message: 'Account canceled' });
    // }
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(null, false, { message: 'Incorrect username' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return next(null, false, { message: 'Incorrect password' });
    }
    return next(null, user);
  });
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'hbs');
app.set('views', `${__dirname}'/views'`);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

const publicRoutes = require('./routes/public/public-routes');
const authRoutes = require('./routes/public/auth-routes');
const privateRoutes = require('./routes/private/private-routes');

app.use('/', publicRoutes);
app.use('/', authRoutes);
app.use('/', privateRoutes);

// hbs.registerPartials(`${__dirname}/views/partials`);

module.exports = app;
