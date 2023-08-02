// Podemos definir un arreglo de bytes de cierto tamanio
// En CONSOLA se muestran de forma hexadecimal
// Puede venir de varias cosas, de un arreglo o incluso un string
let buffer2 = Buffer.from([1, 2, 3]);
let buffer3 = Buffer.from("Hola");

// <Buffer 00 00 00>
console.log(buffer);

// -- Un ejemplo para crear un string que contenga el abecedario
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());