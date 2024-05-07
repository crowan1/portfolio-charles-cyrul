const express = require ('express')
const router = express.Router()
const transporter = require('../nodemailerConfig')


router.post('/envoyer-email', async (req,res) => {
    const  {nom, prenom, email, sujet , message} = req.body

    const mailOptions =  {
        from : req.body.email.value,
        to: 'charles.cyrul@outlook.fr',
        subject: sujet,
        text: `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nMessage: ${message}`
    }

    try {
        await transporter.sendMail(mailOptions)
        console.log('E-mail envoyé avec succès')
        res.status(200)
    } catch (error) {
        console.log('Erreur')
        res.sendStatus(500)
    }
})

module.exports = router