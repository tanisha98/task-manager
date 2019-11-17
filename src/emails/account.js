

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID)
const sendWelcomeEmail = (email,name)=>{
sgMail.send({
    to:email,
    from:'sightanisha21@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}.`
})
}
const sendDeleteEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'sightanisha21@gmail.com',
        subject: 'Goodbye!',
        text: `Goodbye, ${name}.I hope to see you back sometime soon.`
    })
    }

module.exports= {
    sendWelcomeEmail,
    sendDeleteEmail
}