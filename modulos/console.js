// console.log por defecto
console.log("Imprimir algo");

// Regresa esto como si fuera un error
console.error("Algo fallo");
// Como un warning
console.warn("Puede fallar algo");

// Datos en forma de tablas
const tabla = [
  {
    a: 1,
    b: "z" 
  },
  {
    a: 2,
    b: "y"
  }
];
console.table(tabla);
/* 
┌─────────┬───┬─────┐
│ (index) │ a │  b  │
├─────────┼───┼─────┤
│    0    │ 1 │ 'z' │
│    1    │ 2 │ 'y' │
└─────────┴───┴─────┘
*/

// Agrupar varios console.log mediante identacion
console.group("Conversacion");
console.log("Hola");
console.log("Blablablabla");
console.log("Adios");
console.groupEnd("Conversacion");
/*
Conversacion
  Hola
  Blablablabla
  Adios 
*/
