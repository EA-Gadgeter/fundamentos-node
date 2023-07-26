function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla bla");
      resolve(nombre);
    }, 1000);
  })
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios", nombre);
      resolve();
    }, 1000);
  });
}

console.log("Iniciando proceso...");
hola("Chino")
  // EL nombre que devuelve hola se pasa automaticamente a "hablar"
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(__ => {
    console.log("Terminando el proceso")
  })