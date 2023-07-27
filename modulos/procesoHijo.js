const { exec, spawn } = require("child_process");

// Podemos ejecutar cualquier comando de terminal mediante
// procesos hijo, si estos imprimen/regresan algo
// tambien lo podemos obtener
// Incluso podemos ejecutar scripts de otros lenguajes
exec("ls -al", (error, stdout, stderr) => {
  if (error) {
    console.error(error);
  }

  console.log(stdout);
});

/* Si se requiere ejecutar cosas mas complejas 
  podemos usar spawn(), lo que nos va a permitir
  acceder a ciertas propiedades del proceso, así como
  asignar callbacks para cuando ocurran ciertos eventos,
  recordemos que node esta orientado a eventos
*/

//  ----- Spawn devuelve un stream y exec devuelve un buffer -----
let proceso = spawn("ls", ["-la"]);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (data) => {
  console.log(proceso.killed);
  console.log(data.toString());
})

proceso.on("exit", () => {
  console.log("El proceso termino.");
});