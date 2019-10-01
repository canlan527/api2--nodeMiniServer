let net = require('net');
let fs = require('fs');
let globalConf = require('./conf')


//开启服务器
let server = net.createServer();

server.listen(globalConf.port,'127.0.0.1');

server.on('listening',()=>{
    console.log('以开启服务');
});

server.on('connection',(socket)=>{
    socket.on('data',(data)=>{
        let url = data.toString().split('\r\n')[0].split(' ')[1];
        try{
            let dataFile = fs.readFileSync(globalConf['basePath'] + url);
            socket.write('HTTP/1.1 200OK\r\n\r\n');
            socket.write(dataFile);
        }catch (e) {
            console.log('找不到页面');
            socket.write('HTTP/1.1 404NotFound<html><body><h1>404 NotFound</h1></body></html>')
        }
        socket.end()
    })

})

