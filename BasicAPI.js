const http = require('http');
const data = require('./myData')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application\json'});
    //res.write(JSON.stringify({name: 'Ahmad', dep : 'IT'}));
    //res.write("Hello Server");
    res.write(JSON.stringify(data));
    res.end();
}). listen(1000)