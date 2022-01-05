const URL = require('url');

const { getInfo } = require('../controllers/info.controller');

const router = async ({ req, res, body }) => {
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);
  switch (true) {
      case method === 'GET' && pathname === '/':
          {
            let params = url.replace(pathname, '').replace('?', '');
            await getInfo(params, res);
          }
      
      break;

    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }
};

module.exports = { router };
