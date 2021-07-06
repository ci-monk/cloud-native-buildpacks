const http = require('http')
const port = process.env.PORT || 8080

const requestHandler = (request, response) => {
    response.end(`<!DOCTYPE html>
<html>
  <head>
    <title>Node Without Package Manager Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://media0.giphy.com/media/26BGIqWh2R1fi6JDa/200.gif"></img>
  </body>
</html>`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err)
    }

    console.log(`Server is listening on ${port}`)
})
