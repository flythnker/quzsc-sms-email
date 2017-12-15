#!/usr/bin/env node

// var program = require('commander');
// program
//     .version('0.1.0')
//     .command('ssend [email] [标题] [html内容]', '简单邮件发送')
//     .parse(process.argv);

function help()
{
    console.info("欢迎使用 quzsc-sms-email");
    console.info("使用提示:");
    console.info("发送邮件");
    console.info("    quzsc_sms_email aaa@dd.com email 标题 html内容");
}

function main(){
    var argArr = process.argv.slice(2);
    if(argArr.length == 0){
        help()
    }else if(argArr.length == 4){
        const EmailService = require("./lib/email_service");
        var emailService = new EmailService();
        emailService.init(__dirname);
        emailService.发送(argArr[0],argArr[1],argArr[2],argArr[3]);
    }else{
        console.info("参数错误");
        console.info(JSON.stringify(argArr));
        help()
    }
}

main();

