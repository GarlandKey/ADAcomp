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
const SALT_ROUNDS = process.env.SALT_ROUNDS;


mongoose.connect(`mongodb+srv://${DBUSER}:${DBPWD}@freeculster.myyjxjl.mongodb.net/?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('Connected to database.');
	}
);

// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin: APP_PORT, // location of react app
		credentials: true,
	})
);

app.use(
	session({
		secret: 'secretcode',
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60 * 24,
		},
	})
);

app.use(cookieParser('secretcode'));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);


// Routes
app.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) throw err;
		if (!user) {
			res.send('No user exists');
		} else {
			req.logIn(user, err => {
				if (err) throw err;
				res.send('Successfully authenticated');
				console.log(req.user);
			});
		}
	})(req, res, next);
});

app.post('/register', (req, res) => {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err;
		if (doc) res.send('User already exits!');
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 12);

			const newUser = new User ({
				username: req.body.username,
				password: hashedPassword,
			});
			await newUser.save();
			res.send('User created');
		}
	});
});

app.get('/user', (req, res) => {
	res.send(req.user);
});

// Start Server
app.listen(SERVER_PORT, () => {
	console.log(`ADAcomp server has started.\nRunning on port ${SERVER_PORT}.`);
});