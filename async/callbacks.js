function hola(nombre, miCallback) {
  console.log("Hola soy una funcion asincrona");
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback();
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000)
}

// Ejecutar una funcion como callback nos permite asegurarnos
// de que su ejecucion va a ocurrir cuando nosotros necesitamos
// generalmente despues...
console.log("Iniciando proceso");
hola("Chino", function () {
  adios("Chino2", function() {
    console.log("Terminando proceso");
  })
});