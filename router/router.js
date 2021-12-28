const URL = require('url');
const customDbError = require('../customDbError');

const { CREATE_USER, FACTORIAL } = require('../constants/routes');
const { createUser, getFactorial } = require('../controllers/user.controller');

const router = async ({ req, res, body }) => {
  try {
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);

    switch (true) {
      case method === 'POST' && pathname === CREATE_USER:
        ({ result, error } = await createUser(body));
        break;

      case method === 'GET' && pathname === FACTORIAL:
        ({ result, error } = await getFactorial(query));
        break;

      default:
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }

    if (error) {
      res.statusCode = error.status;
      return res.end(JSON.stringify({ error }));
    }
    res.statusCode = result.status;
    res.end(JSON.stringify(result.data));
  } catch (err) {
    if (err instanceof customDbError) {
      res.statusCode = 501;
      res.end(JSON.stringify({ error: err.message }));
    } else {
      res.statusCode = 500;
      res.end(JSON.stringify(err));
    }
  }
};

module.exports = { router };
