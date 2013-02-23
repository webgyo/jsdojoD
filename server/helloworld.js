var SimpleStore = require('./SimpleStore');
var simpleStore = new SimpleStore();

process.on('uncaughtException', function(err){
  console.log('somthing wrong happend');
  console.log(require('util').inspect(err));

  if(err.code && err.code === 'EADDRINUSE'){
    console.log('specified address is in use, please check other process that runs on this address & port');
  }
  throw err;
});

var http = require('http');
http.createServer(function (req, res) {

  var url  = req.url;
  var path = url.split('?')[0];
  var qs = url.split('?')[1];

  console.log('path:' + path);
  console.log('qs:' + qs);

  if (path.indexOf('result') > -1) {

    // parse path and querystring
    var querystring = require('querystring');
    var pqs = querystring.parse(qs);
    var date = pqs.date;

    // create result
    var result = {};
    result.complete = pqs.complete;
    result.cancel = pqs.cancel;

    // set result
    simpleStore.set(date, result);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('ok');

  } else {

    // return pomodolo list
    var result = simpleStore.getAll();
    res.writeHead(200, {'Content-Type': 'text/plain','Access-Control-Allow-Origin': '*'});
    res.end(JSON.stringify(result));
  }

}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');

