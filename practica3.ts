// practica3.ts
// Funciones, funciones flecha, funciones anonimas y callbacks

function saludo(mensaje: string) {
  console.log("Saludos. Soy una funcion no typeada (como en JavaScript).");
  console.log(mensaje);
}

function saludoTS(mensaje: string) : void {
  console.log("Saludos. Soy una funcion typeada y retorno void.");
  console.log(mensaje);
}

const funcionFlecha = () : void => {
  console.log("Soy una funcion flecha");
};

function funcionConCallback(mensaje : string, callback : Function) : void {
  console.log(mensaje);
  callback();
}

/**
 * Retorna una funcion
 * @param {boolean} usarTypeada Define que funcion usar
 * @returns {Function} Funcion de retorno
 */
function getAFunction(usarTypeada : boolean = false) : Function {
  return usarTypeada ? saludoTS : saludo;
}

saludo("Mensaje extra");
saludoTS("Mensaje extra");

funcionFlecha();

funcionConCallback("Hola soy una funcion con callback. Llamare al callback.", function () : void {
  console.log("Soy la funcion callback y tambien soy una funcion anonima");
})

let x : boolean = true;
let otraFuncion = getAFunction(x);

if (x)
  otraFuncion('Soy la funcion "saludoTS" pero con otro nombre')
else
  otraFuncion('Soy la funcion "saludo" pero con otro nombre')