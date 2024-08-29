/////////// Ejercicio 1
console.log("---Ejercicio 1: números del 1 al 100");

function numDivisible(){
for(let i=0; i<=100; i++){
    if (i%4===0 && i%9===0){
        console.log(i + " Divisible entre 4 y 9");
    }
    else if (i%4===0) {
        console.log(i + " Divisible entre 4");
    }
    else if (i%9===0) {
        console.log(i + " Divisible entre 9");
    } 
    else {
        console.log(i);
    }
}}

numDivisible()

////////// Ejercicio 2
console.log("---Ejercicio 2: Iteración");

let addArr =[];
for (let i = 1; i <=10; i++) {
    addArr.push(i);
}
console.log(addArr.reverse())

/////// Ejercicio 3
console.log("---Ejercicio 3: Bucle sumar 1 al 100");

let suma = 0;

for (let i=0; i<=100; i++){
    suma += i;
}
console.log(suma);


