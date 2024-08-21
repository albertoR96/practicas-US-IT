// practica2.ts
// funciones y variables default

/**
 * Imprime un mensaje destinado a alguien.
 * @param contacto Destinatario. Nombre del contacto a quien le quieres dar un mensaje.
 * @param mensaje Mensaje
 */
function llamar(contacto : string, mensaje : string = "este es un mensaje default") : void {
  console.log(`Hola ${contacto}, ${mensaje}`);
}

llamar("Luis", "soy Alberto. Vamos a un hackathon :D");

/**
 * Muestra un mensaje de encendido del auto
 * @param modo Modo de encendido del auto
 */
function onCar(modo? : string) : void {
  if (modo == "Nitro") {
    console.log("******** AUTO ENCENDIDO ********");
    console.log("■■■■■■■■ NITRO ACTIVADO ■■■■■■■■");
    console.log("»»»»»»»» FIUUUUUUUUUUMM »»»»»»»»");
  } else if (modo) {
    console.log(`Se encendio el auto en modo ${modo}`);
  } else {
    console.log("Se encendio el auto");
  }
}

onCar(); // encendido normal
onCar("Nitro"); // encendido Nitro. Es decir rápido.