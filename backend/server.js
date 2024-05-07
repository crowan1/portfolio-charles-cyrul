const express = require ('express')
const bodyParser = require ('body-parser')
const nodemailer = require ('./nodemailerConfig')
const emailRoutes = require('/routes/emailRoutes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/api', emailRoutes)

const PORT = process.env.PORT || 3000

app.listen (PORT, () => {
    console.log('Serveur démarré sur le port ${PORT}')
})