const express = require('express'),
		path = require('path'),
		bodyParser = require('body-parser'),
		session = require('express-session');

let app = express(),
	 port = 8080;

if(process.env.NODE_ENV !== 'production') {
	let chokidar = require('chokidar'),
		watcher = chokidar.watch('./dist');

	// Instead of using nodemon to watch for changes
	// we simply delete the require cache
	watcher.on('ready', () => {
		watcher.on('all', () => {
			console.log("Clearing /dist/ module cache from server");
			Object.keys(require.cache).forEach((id) => {
				if (/[\/\\]dist[\/\\]/.test(id)) delete require.cache[id]
			})
		})
	})
}

const passport = require('passport'),
		Strategy = require('passport-local').Strategy,
		users = require('./db/users');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
  function(username, password, cb) {
    users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "dogsaregood" }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
	require('../dist/server_routes.js').default(req, res, next);	
});


app.use(
	express.static(path.resolve(__dirname, '../dist/'))
);

console.log("Starting server on port " + port);

app.listen(port);
