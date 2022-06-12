const app = require('./app');
const config = require('./utils/config')
const http = require('http');
const logger = require('./utils/logger');

const server = http.createServer(app);

server.listen(config.DEFAULT_PORT, () => {
    logger.info(`The server is running at http://localhost:${config.DEFAULT_PORT}`)
});