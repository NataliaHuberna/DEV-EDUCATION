const https = require('https');

const getInfo = async (params, globalRes) => {
  const options = {
    host: 'api.adzuna.com',
    port: 443,
    path:
      '/v1/api/jobs/gb/search/1?app_id=0462621c&app_key=7662c13823fb4074965303ded67c235f&results_per_page=50&' +
      params,
    method: 'GET',
  };
  https
    .request(options, function (res) {
      res.setEncoding('utf8');
      let responseBody = '';
      res.on('data', function (chunk) {
        responseBody += chunk;
      });
      res.on('end', function () {
        globalRes.statusCode = res.statusCode;
        globalRes.end(responseBody);
      });
    })
    .end()
    .on('error', function (e) {
      console.error(e);
    });
};

module.exports = { getInfo };


