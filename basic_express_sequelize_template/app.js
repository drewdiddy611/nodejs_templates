const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const morgan = require('morgan');
app.use(morgan('tiny'));
app.use((req, res, next) => {
	['query', 'params', 'body'].forEach(key => {
		if (req[key]) {
			var capKey = key[0].toUpperCase() + key.substr(1);
			var value = JSON.stringify(req[key], null, 2);
			console.log(`${capKey}: ${value}`);
		}
	});
	next();
});

const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({
	partialsDir: 'views/',
	defaultLayout: 'application'
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var usersRoutes = require('./routes/users');
app.use('/', usersRoutes);

app.listen(3000, () => {
	console.log('Listening...');
});
