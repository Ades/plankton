const express = require(`express`)
const app = express()
const path = require(`path`)
const fs = require(`fs`)

app.use("/plankton", express.static(path.join(__dirname, `public`)))

app.get(`/`, (req, res) => {
    res.writeHead(302, {
        'Location': '/plankton'
    })
    res.end()
})

const getPort = args => {
    let customPortCommand = args.find(arg => arg.startsWith(`--port=`))
    return customPortCommand && parseInt(customPortCommand.substr(`--port=`.length), 10)
}

const port = process.env.PORT || getPort(process.argv) || 3000

app.listen(port, function () {
    console.log(`Plankton running on port ${port}!`)
})
