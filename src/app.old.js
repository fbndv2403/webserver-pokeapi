const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'application/json'})
    // res.setHeader('Content-Disposition': 'attachemnt; filename=lista.csv');
    // res.writeHead(200{'Content-Type': 'application/csv'})
    res.write("hola mundo");
    res.end();
  })

  .listen(8080);

console.log("escuchando en el puerto", 8080);
