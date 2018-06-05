const express = require('express'),
		path = require('path'),
		bodyParser = require('body-parser'),
		session = require('express-session'),
		passport = require('passport');

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
