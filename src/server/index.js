const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()
const dotenv = require('dotenv').config()
if (dotenv.error) {
    throw dotenv.error
}
const apiKey = process.env.API_KEY
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('dist'))

const port = 8080
const listening = () => {
    console.log(`Server running on localhost: ${port}`)
}
app.listen(port, listening())

app.get('/', function (req, res) {
    res.sendFile('/dist/index.html', )
})

app.post('/evaluate', function (req, res) {
    const evaluateURL = req.body.evaluateURL
    console.log(`/evaluate | ${evaluateURL}`)
    const reqURL = baseURL + '?key=' + apiKey + '&lang=en&url=' + evaluateURL
    fetch(reqURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(json => res.send(json))
    .catch((err) => {
        console.error(err)
        return res.status(500).send(err)
    })
})

module.exports = app
