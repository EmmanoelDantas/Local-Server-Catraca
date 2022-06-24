const express = require('express');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const moment = require('moment');

const monitor = require('./services/monitor')
const event = require('./services/event');

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.all('/**', (request, response) =>{
    console.log('\n--- NEW REQUEST @ ' + moment().format('DD/MM/YYYY kk:mm:ss') + ' ---');
    console.log('Path -> ' + request.path);
    console.log('Query params -> ' + JSON.stringify(request.query));
    console.log('Content type -> ' + request.get('content-type'));
    console.log('Body length -> ' + request.get('content-length'));

    monitor(request, response);
})

app.use(router);

module.exports = app;

