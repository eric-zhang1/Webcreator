var http = require('http');
var dt = require('./dateTimeMod'); //including our own modules
var fs = require('fs'); // for file servers

http.createServer(function (req, res) {
  fs.readFile('ex1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("The date and time are currently: " + dt.myDateTime() + "\n\n"); //Using modules
    //res.write(req.url); //using the url object from req
    res.write(data);
    res.end();
  });
}).listen(8080);