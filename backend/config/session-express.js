// session-express.js
const session = require('express-session');
const MongoStore = require('connect-mongo'); // For storing sessions in MongoDB

// Session middleware configuration
const sessionMiddleware = session({
  secret: 'sandya-fitness', // Replace with a strong secret
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/sandya-fitness' }), // Replace with your MongoDB URI
  cookie: { secure: false }, // Set secure: true in production with HTTPS
});

module.exports = sessionMiddleware;
