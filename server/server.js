require('dotenv').config({ path: '.env' });
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const User = require('./user');

const DBUSER = process.env.DBUSER;
const DBPWD = process.env.DBPWD;
const SERVER_PORT = process.env.SERVER_PORT;
const APP_PORT = process.env.APP_PORT;


mongoose.connect(`mongodb+srv://${DBUSER}:${DBPWD}@freeculster.myyjxjl.mongodb.net/?retryWrites=true&w=majority`,
{
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
() => {
	console.log('Connected to database.');
});

// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors({
	origin: APP_PORT, // location of react app
	credentials: true
}))

app.use(session({
	secret: 'secretcode',
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24,
	}
}))

app.use(cookieParser('secretcode'));

// Routes
app.post('/login', (req,res) => {
	console.log(req.body);
})

app.post('/register', (req,res) => {
	console.log(req.body);
})

app.post('/user', (req,res) => {})

// Start Server
app.listen(SERVER_PORT, () => {
	console.log(`ADAcomp server has started.\nRunning on port ${SERVER_PORT}.`);
})