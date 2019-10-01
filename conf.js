let fs = require('fs');
//加载配置文件
let globalConf = {};
let conf = fs.readFileSync('server.conf');
let confs = conf.toString().split('\r\n');
for(let i = 0; i < confs.length; i ++){
    let tempConf =  confs[i].split('=')
    if(tempConf < 2){
        continue;
    }else{
        globalConf[tempConf[0]] = tempConf[1]
    }
}
// console.log(globalConf)
module.exports = globalConf