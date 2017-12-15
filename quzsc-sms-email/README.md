
## 短信电子邮件发送 ---- 我们做开箱即用的软件（组件）

#### 安装

    npm install quzsc-sms-email -g

#### 升级

    npm update quzsc-sms-email -g
        
## 使用
#### 发送个邮件

    在当前目录下创建 email_config.js    
    var config = {
        email:{
            host: 'smtp.mxhichina.com',
            port: 465,
            secure: true,
            auth: {
                user: "xxx@xxx", // generated ethereal user
                pass: "xxx"  // generated ethereal password
            },
            from: '"xxx"<xxx@xxx>'
        }
    };      
    module.exports = config;

#### 发送邮件命令

    quzsc_sms_email aaa@bbb.com 标题 内容
    

    
    

        