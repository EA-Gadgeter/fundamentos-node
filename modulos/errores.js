// Funcion que llama una funcion que causa un error
function otraFuncion() {
  seRompe();
}

// Causa un error
function seRompe() {
  return 3 + z;
}

// Funcion asincrona que causa un error
function seRompeAsincrona() {
  // Como es asincrona, se ejecuta en otro hilo
  // por lo que el try catch del hilo principal no captura el error
  // por eso necesita su propio try/catch
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error("Error en la funcion asincrona");
      console.error(error);
    }
  }, 1000);
}

try {
  // Aunque el error ocurra en una función más interna, se sigue capturando
  // otraFuncion();

  // Tiene dentro su propio try/catch para evitar los errores
  seRompeAsincrona();
} catch(error) {
  console.error(error);
}

console.log("Eso de aqui da error");