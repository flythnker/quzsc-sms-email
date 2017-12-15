
var WebBase = require("quzsc-web-base");

var Init = {};

Init.appConfig = new WebBase.AppConfig();
Init.appConfig.init(__dirname);

//var config = Init.appConfig.getConfig();
//console.info(JSON.stringify(config));

module.exports=Init;