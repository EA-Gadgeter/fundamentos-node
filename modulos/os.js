const os = require("os");

// Arquitectura del CPU
console.log(os.arch());

// Sistema Operativo del CPU
console.log(os.platform());

// Información del procesador
console.log(os.cpus());

// Constantes del Sistema
console.log(os.constants);

// Nos dice en bytes la memoria disponsible
console.log(os.freemem());
// Memoria total
console.log(os.totalmem());

// Directorio raiz del usuario
console.log(os.homedir());
// Directorio temporal
console.log(os.tmpdir());

// Nombre del PC, util para microservicios
console.log(os.hostname());
// Interfaces de red activas en la máquina
console.log(os.networkInterfaces());