const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    // Esto normalmente regresa un "buffer"
    // console.log(data);

    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      return console.error("No he podido escribirlo.", error);
    } else {
      cb();
    }
  });
}

function borrar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// leer(`${__dirname}/archivo.txt`, console.log);
// escribir(`${__dirname}/archivo2.txt`, "Soy un archivo nuevo.", console.log)
borrar(`${__dirname}/archivo2.txt`, console.log);

// EJEMPLO CON ASYNC/AWAIT
const fs = require("fs").promises;

async function leer(ruta) {
  const file = await fs.readFile(ruta, { encoding: "UTF-8" });
  console.log(file);
}

leer(`${__dirname}/archivo.txt`);
