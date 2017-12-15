var nodemailer=require('nodemailer');

function test1(){

}

function test2()
{
    const EmailService = require("./email_service")
    var emailService = new EmailService();
    emailService.init(__dirname + "/..");
    emailService.发送("huangyipeng@eichtech.top","aa","bb");
}
if (require.main === module) {
    test2();
}
