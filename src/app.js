require('dotenv').config();
const Express = require('express');
const http = require('http');
const logger = require('./lib/log').getLogger();


const app = Express();

const port = process.env.PORT || 8000;

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  logger.info(`server running on ${port}.`);
});
