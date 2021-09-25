const http = require('http');
const port = 3000;
const fs = require('fs')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('error')
        }
        else { res.write(data) }
        res.end()
    })
})
server.listen(port, (error) => {
    if (error) { console.log(error); }
    else console.log('server started at port' + port)
})