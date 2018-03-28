const express = require('express')
const path = require('path')
const http = require('http')

const port = process.env.PORT || 3000

const app = express()
app.use(express.static(path.resolve(__dirname, '..', 'dist')))
app.use('/fonts', express.static(path.join(__dirname, 'fonts')))
app.use('/assets', express.static(path.resolve(__dirname, '..', 'node_modules', 'Aframe-Material', 'assets')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

const webServer = http.createServer(app)

webServer.listen(port, () => console.log('Listening on port ' + port))
