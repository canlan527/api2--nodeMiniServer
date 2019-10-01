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
//判断绝对or相对路径
if(globalConf['path_method'] == 'relative'){
    globalConf.basePath = __dirname + globalConf.path;
}else {
    globalConf.basePath = globalConf.path
}


// console.log(globalConf)
module.exports = globalConf