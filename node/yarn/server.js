const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Node Yarn Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://media0.giphy.com/media/26BGIqWh2R1fi6JDa/200.gif"></img>
  </body>
</html>`);
});

app.listen(port);
