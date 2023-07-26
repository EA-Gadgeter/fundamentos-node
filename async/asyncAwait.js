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

async function main() {
  const nombre = await hola("Chino");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
}

/*
  El log de terminamos no espera a main(),
  ya que main() es asincrona
*/
console.log("Empezamos el proceso");
main();
console.log("Proceso terminado");
