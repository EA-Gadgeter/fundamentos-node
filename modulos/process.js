process.on("beforeExit", () => console.log("El proceso va a terminar"));

// Cuando se ejecuta el exit, ya no estamos conectados al event loop
process.on("exit", () => {
  console.log("Proceso terminado");
  // Ya no estamos conectados al event loop
  // por lo que funciones como setTimeout() que se ejecutan
  // en otro hilo de manera asincrona, no van a ocurrir
  setTimeout(() => {
    console.log("Esto nunca se va ver");
  }, 0);
});

// Manejar cualquier exepcion no manejada
// Podemos hacer aqui lo que queramos con el error
// incluso ejecutar cosas asincrona
// de igual manera los eventos "exit" y "beforeExit"
// se ejecutaran despues de esto
process.on("uncaughtException", (error, origen) => {
  console.error("Hubo un error no capturado");
  console.error(error);
  setTimeout(() => {
    console.log("Esto viene despues del error de manera asincrona");
  }, 2000);
});

noExiste();

console.log("Esto no va a aparecer por la expecion");