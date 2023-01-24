// let estudiante = "Nicolás Martinez";
// console.log (estudiante);
// //**Funciones
// let pesos = 0; 
// function validacion () {
//     if (isNaN(pesos) != false) {
//         alert("Solo se puede ingresar números");                

//     }
//     else {
//         console.log("Los datos ingresados son números");

//     }
// }

// function cambiodolar () {
//     pesos = parseInt(prompt('Ingrese la cantidad de pesos argentinos que quire cambiar a dolares'));
//     validacion();
//     let dolar = 180;
//     let resultadodolar = pesos / dolar;
//     alert (pesos +' pesos argentinos equivale a '+resultadodolar.toFixed(2) +' dolares')
// }
// function cambioeuro () {
//     pesos = parseInt(prompt('Ingrese la cantidad de pesos argentinos que quire cambiar por euros'));
//     validacion();
//     let euro = 190.84;
//     let resultadoeuro = pesos / euro;
//     alert (pesos +' pesos argentinos equivale a '+resultadoeuro.toFixed(2) +' euros');
// }
// function cambiouru () {
//     pesos = parseInt(prompt('Ingrese la cantidad de pesos argentinos que quire cambiar por euros'));
//     validacion();
//     let pesosuru = 0.22;
//     let resultadouru = pesos / pesosuru;
//     alert ('Sus '+pesos +' pesos argentinos equivalen a '+ resultadouru.toFixed(2)+ ' pesos uruguayos');
// }


// //!Conversion
// let opciones = prompt ('¿Por cual moneda quieres cambiar tus pesos?\n1-Dolares\n2-Euros\n3-Peso Uruguayo\nPresiona X para salir');
// while (opciones != 'X' && opciones != 'x') {
//     switch (opciones) {
//         case '1':
//             cambiodolar();
//             break;
//         case '2':
//             cambioeuro()
//             break;
//         case '3':
//             cambiouru();
//             break;
//         default:
//             alert('Ninguna opción es correcta');
//             break
//     }
//     opciones = prompt ('¿Por cual moneda quieres cambiar tus pesos?\n1-Dolares\n2-Euros\n3-Peso Uruguayo\nPresiona X para salir' );
// }
    

// alert('Adios :)');
