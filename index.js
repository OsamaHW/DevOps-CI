const express = require("express");
const routes = require('./routes');
const app = express();
const port = 9192;
app.disable("etag");
routes(app);


const server = app.listen(port,()=> {
    console.log('listening on port'+ port);
});

module.exports = server;


