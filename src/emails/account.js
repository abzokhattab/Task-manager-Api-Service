const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to :email,
        from :'abzokhattab@gmail.com',
        subject:'Thanks for joining ',
        text :`WELCOME ,${name} TO OUR WORLD  .. This mail may be put in spam as my gmail accounisnt authenticated yet`
    })

}

const sendCancelationEmail =(email,name)=>{
    sgMail.send({
        to :name,
        from :'abzokhattab@gmail.com',
        subject:'Thanks for Leaving us  ',
        text :`Thanks ,${name} we are so happy without you  ... This mail may be put in spam as my gmail accounisnt authenticated yet`
    })

}

module.exports={
    sendWelcomeEmail,sendCancelationEmail
}
