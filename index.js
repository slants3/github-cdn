const { Router } = require('express');
const serveLanding = require('./api/serve-landing');
const getRatelimit = require('./api/get-ratelimit');
const getRepo = require('./api/get-repo');
const getPath = require('./api/get-path');

function githubCdnRouter() {
	const router = Router();

	router.get('/', serveLanding);

	router.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		next();
	});

	router.get('/ratelimit', getRatelimit);
	router.get('/:owner/:repo?', getRepo);
	router.get('/:owner/:repo/:ref?:path(/*)?', getPath);

	return router;
}

module.exports = githubCdnRouter;