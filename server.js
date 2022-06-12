const app = require('./app');
const config = require('./utils/config')
const http = require('http');

const DEFAULT_PORT = config.DEFAULT_PORT;

const server = http.createServer(app);

server.listen(DEFAULT_PORT, () => {
    console.log("Server running on port " + DEFAULT_PORT)
});