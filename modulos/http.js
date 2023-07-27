const http = require("http");

// Función que va recibir http.createServer()
// Recibe el request y la response
function router (req, res) {
  console.log("Nueva peticion");
  console.log(req.url);

  // Elaboramos un router muy primitivo obteniendo la URL de la peticion
  switch(req.url) {
    case "/hola":
      res.write("Hola, ya se usar http de nodeJS");
      // Terminamos la ejecución de la solicitud
      res.end();
      break;
    default:
      // Podemos especificar unas cosas en los headers
      // Como el status de la request y el tipo de contenido
      res.writeHead(404, {
        "Content-Type": "text/plain"
      });
      res.write("Error 404: no se lo que quieres");
      res.end();
  }
}

// Pasamos la funcion del router, y el port donde estara escuchando el servidor
http.createServer(router).listen(3000);

console.log("Esuchando en el puerto 3000");