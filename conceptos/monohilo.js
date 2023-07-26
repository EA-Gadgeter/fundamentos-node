console.log("Hola mundo");

let i = 0;

setInterval(() => {
  console.log(i);
  i++;

  /*
    Recordemos que node es monohilo
    eso quiere decir, que si en cualquier lugar
    tenemos un error, TODO el programa, o de manera más
    técnica, todos los otros procesos que esten haciendo algo,
    van a explotar y se van a quedar a medias
  */
  if (i === 10 ) {
    var a = 3 + z;
  }
}, 1000);

/*
  En otro lenguaje, esperariamos que el "setInterval" evite
  que se ejecute el siguiente consolo.log(), pero debido al
  event loop de node, va a mandar a otro hilo el intervalo
  y va a seguir ejecuando el resto el programa
*/ 
console.log("Segunda instruccion");