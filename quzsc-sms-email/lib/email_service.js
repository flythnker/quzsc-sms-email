
var nodemailer=require('nodemailer');

/**
 * @class
 * @constructor
 */
var EmailService = function(){

}
/**
 * 读取配置文件 初始化 EmailService
 * @param configDir
 */
EmailService.prototype.init = function (configDir){
    //var AppConfig =
    const WebBase  = require("quzsc-web-base")
    const AppConfig = WebBase.AppConfig;
    var appConfig = new AppConfig("email_config","email_config_sample");
    appConfig.init(configDir)
    this.config = appConfig.getConfig();
    if(!this.config){
        throw Error("EmailService 没有读取到配置文件");
    }
}

EmailService.prototype.createEmailTransporter = function () {
    let transporter = nodemailer.createTransport({
        host:this.config.email.host,
        port:this.config.email.port,
        secure: this.config.email.secure,
        auth: {
            user: this.config.email.auth.user,
            pass: this.config.email.auth.pass
        }
    });
    return transporter;
}

/**
 *
 * @param email
 * @param 标题
 * @param 内容
 * @param 回调
 */
EmailService.prototype.发送 = function(email,标题,内容,回调){
    if(!this.config){
        throw Error("EmailService 没有读取到配置文件");
    }
    var transporter = this.createEmailTransporter();

    let mailOptions = {
        from: this.config.email.from,// sender address
        to: email, // list of receivers
        subject: 标题, // Subject line
        //text: 'Hello world?', // plain text body
        html: 内容 // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(回调){
            回调(error,info)
            return;
        }
        if (error) {
            return console.log(error);
        }else{
            //return console.log(info);
        }
    });
}

module.exports = EmailService;