const app = require('./app');
const config = require('./utils/config')
const http = require('http');
const logger = require('./utils/logger');

const server = http.createServer(app);

server.listen(config.DEFAULT_PORT, () => {
    logger.info("Server running on port " + DEFAULT_PORT)
});