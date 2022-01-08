require 'sinatra'
configure { set :server, :puma }

get '/' do
  '<!DOCTYPE html>
  <html>
    <head>
      <title>Ruby Unicorn Buildpacks</title>
    </head>
    <body>
      <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://media0.giphy.com/media/26BGIqWh2R1fi6JDa/200.gif"></img>
    </body>
  </html>'
end
