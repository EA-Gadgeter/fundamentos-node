// Ejemplos de modulos globales que podemos usar sin importar

// Podemos ver el objeto global de node
// En el navegador es "window"
// console.log(global);

let i = 0;
let intervalo = setInterval(() => {
  console.log("Hola");
  if (i === 2) clearInterval(intervalo);
  i++;
}, 1000)

// Process, del donde accedemos a las variables de entorno
// console.log(process);

// Variable magica que nos devuelve la ruta absoluta de donde
// se ejecuta el archivo
console.log(__dirname);
// Ruta que incluye el archivo
console.log(__filename);