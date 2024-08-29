///////////////////////////////////  Ejercicio 1
console.log("---Ejercicio 1: Mayor para votar");
/* 
let userEdad = prompt("¿Cuál es tu edad?")

function getUserEdad(n){
    return n
}
    if (userEdad >= 18) {
    console.log(`Felicidades, con ${userEdad} años ya puedes votar`);
} else{
    console.log(`Lo lamento, con ${userEdad} años, aún no puedes votar`);
}    
 */
/////////////////////////////// Ejercicio 2
console.log("---Ejercicio 2: Promedio calificaciones");
/* 
function statusEstudiante(){
    let input = prompt("Escribe tus calificaciones separadas por una coma, y sin espacios. Por ejemplo: 10,7,8,9")
    let [calif1, calif2, calif3, calif4] = input.split(",")

    calif1=parseInt(calif1);
    calif2 =parseInt(calif2);
    calif3 =parseInt(calif3);
    calif4 =parseInt(calif4);

    let promedio = (calif1+calif2+calif3+calif4)/4
    if (promedio>=7){
        console.log(`Felicidades, tu calificación es ${promedio}, estás aprobada/o`);        
    }
    else{
        console.log(`Tu calificación es ${promedio}, estás reprobado/a`);
    }
}
statusEstudiante()
 */
//////////////////////////////////// Ejercicio 4

console.log("---Ejercicio 4: Divisible 7 y 8");
/* 
function ejer4(numEje4){
    if (numEje4%7===0 && numEje4%8===0){
        console.log(`Número ${numEje4} --> Verdadero`);        
    }
    else{
        console.log(`Número ${numEje4} --> Falso`);        
    }
}
ejer4(56);
ejer4(7);
ejer4(8);
ejer4(0);
ejer4(224);
ejer4(73);
 */
///////////////////////////////////// Ejercicio 5
console.log("---Ejercicio 5: Divisible entre 4 o 9");
/* 
function ejer5(numEje5){
    if (numEje5%4===0 || numEje5%9===0){
        console.log(`Número ${numEje5} --> Verdadero`);        
    }
    else{
        console.log(`Número ${numEje5} --> Falso`);        
    }
}
ejer5(12)
ejer5(18)
ejer5(5)
ejer5(36)
ejer5(7)
ejer5(16)
 */
////////////////////////// Ejercicio 6
console.log("---Ejercicio 6: Calculadora");
/* 
function calculadora(){
    let input = prompt("Ingresa la operación que quieres realizar y dos números, separado todo por una coma. Por ejemplo: suma,3,5")
    let [operacion, num1, num2] = input.split(",");
    
    let resultado;
    operacion = operacion.toLowerCase();
    switch (operacion) {
        case "suma":
            resultado = num1 + num2
            console.log(`La suma de ${num1} más ${num2} es ${resultado}`);        
            break;
        case "resta":
            resultado = num1 - num2
            console.log(`La resta de ${num1} menos ${num2} es ${resultado}`);
            break;
        case "multiplicacion":
            resultado = num1*num2
            console.log(`El resultado de la multiplicación de ${num1} por ${num2} es ${resultado}`);
            break;
        case "division":
            resultado = num1/num2;
            console.log(`La división del ${num1} entre ${num2} es ${resultado}`);
            break;
        default:
            console.log("No disponible");
            break;
    }
}
calculadora()
 */

////////////////////////// Ejercicio 7
console.log("---Ejercicio 7: Películas");
/* 
function recomendacion(){
    let input = prompt ("Elige una de las siguientes categorías, y te daré una recomendación: Accion, Drama, Comedia, Romance, Suspenso o Terror")
    let categoria = input;

    categoria = categoria.toLowerCase();
    switch (categoria) {
        case "accion":
            console.log("Te recomiendo la película de acción de 'Tren Bala'");
            break;
        case "drama":
            console.log("Te recomiendo la película dramática 'Fathers & Daughters' ");
            break;
        case "comedia":
            console.log("Te recomiendo la película de comedia 'Deadpool 3'");
            break;
        case "romance":
            console.log("Te recomiendo la película romática 'Cartas a Julieta'");
            break;
        case "suspenso":
            console.log("Te recomiendo la película de suspenso de 'Un lugar en silencio', con mi novio John Krasinski");
            break;
        case "terror":
            console.log("Te recomiendo la peli de terror de 'Hereditary'");
            break;
        default:
            console.log(`La categoría "${categoria}" no es válida. Elige entre acción, drama, comedia, romance, suspenso, o terror.`);
            break;
    }
}
recomendacion()
 */

/////////////// Ejercicio 8
console.log("---Ejercicio 8: Cajero");
/* 
function cajeroATM(){

    let input = prompt ("Elige una acción a realizar: 1. Retirar dinero 2: Transferencia 3: Depósito 4. Pago de servicios"
    )
    let opciones = input
    if (opciones==="1"){
        console.log("Usted eligió retirar dinero");
    }
    else if (opciones==="2"){
        console.log("Usted eligió transferencia");
    }
    else if (opciones==="3"){
        console.log("Usted eligió depósito");    
    }
    else if (opciones==="4"){
        console.log("Usted eligió pago de servicios");
    }
    else {
        console.log(`Lo lamento, "${opciones}" no es una opción válida, intente de nuevo`);
    }
}
cajeroATM()
 */