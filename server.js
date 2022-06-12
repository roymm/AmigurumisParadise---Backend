const app = require('./app');
const http = require('http');

const DEFAULT_PORT = process.env.PORT || 8500;

const server = http.createServer(app);

server.listen(DEFAULT_PORT, () => {
    console.log("Server running on port " + DEFAULT_PORT)
});