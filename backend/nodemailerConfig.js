const nodemailer = require ('nodemailer')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth :  {
        user : 'charles.cyrul@outlook.fr',
        pass : '04062811An'
    }
})

module.exports= transporter