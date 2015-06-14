/**
 * Created by quikr on 14/06/2015.
 */

var express = require('express');

var server = express();

server.use('/', express.static('dist'));
server.use('/images', express.static('app/images'));
server.use('/assets/img', express.static('app/assets/img'));

var port = 9001;

server.listen(port, function(){
  console.log("Server listening on port:" + port);
});

