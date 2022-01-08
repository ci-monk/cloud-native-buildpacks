package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

const INDEX = `<!DOCTYPE html>
<html>
  <head>
    <title>Golang Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://media0.giphy.com/media/26BGIqWh2R1fi6JDa/200.gif"></img>
  </body>
</html>`

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		fmt.Fprint(w, INDEX)
		log.Printf("Hi!!")
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Handling HTTP requests on %s.", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
