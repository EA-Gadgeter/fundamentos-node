function hola(nombre, miCallback) {
  console.log("Hola soy una funcion asincrona");
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000)
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla bla");
    callbackHablar();
  }, 1000)
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios", nombre);
    otroCallback();
  }, 1000)
}

// Para evitar el callback, puede usarse recursion en su lugar
// o estructuras de control
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
  
}

console.log("Iniciando proceso");
hola("Chino", function(nombre) {
  conversacion(nombre, 3, function() {
    console.log("Terminamos");
  });
});

// ***** HELL *****
/* hola("Chino", function () {
  hablar(function () {
    hablar(function() {
      hablar(function () {
        adios("Chino2", function() {
          console.log("Terminando proceso");
        });
      });
    });
  });
}); */