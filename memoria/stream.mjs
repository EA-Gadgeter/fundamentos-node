import fs from "fs";
import stream from "stream";

// Un stream es un flujo constante de datos
// Hay datos que ya tenemos, que se esta pasando, y que falta por pasar
let data = "";
const readableStream = fs.createReadStream("./input.txt");

readableStream.setEncoding("utf-8");
// Evento que nos permite esuchar cuando el stream mande datos
readableStream.on("data", (chunk) => {
  // En este caso, el archivo te texto contiene muy pocos datos
  // por lo que es muy probable que toda nos venga en un CHUNK
  console.log(chunk.toString());
  
  // Si el archivo es muy grande tendremos que ir almacenando la info en una variable
  data += chunk
});

// Evento para cuando el stream termino el flujo de datos
readableStream.on("end", () => {
  // Imprimimos la data completa
  console.log(data);
});

// Creando un stream de escritura, similar a lo que usa C++ con "std::cout"
process.stdout.write("Hola");

// Se pueden crear buffers de transformacion creando una instancia de una clase
const upperCaseTransform = new stream.Transform({
  // "Sobrecargamos" la funcion trasnform
  transform(chunk, encoding, callback) {
    // Que vamos a hacer con el chunk
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Al stream que generamos del archivo podemos irlo pasando por ciertos procesos
// en esto caso pasandolo por el buffer de transformacion e imprimirlo en consola
// mediante "process.stdout"
readableStream
  .pipe(upperCaseTransform)
  .pipe(process.stdout);