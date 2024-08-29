//// Ejercicios
console.log("Ejercicios")
// * calcular el perimetro de un circulo P=2*pi*
const circlePerimeter = radioCirculo => {
    const pi = 3.1416
    return (`El perímetro del círculo con radio ${radioCirculo} es ${Math.round(2*radioCirculo*pi)} metros`)
}
console.log(circlePerimeter(3))

// * calcular el area de un rectangulo
const rectangleArea = (l, w) => {
    let area = l*w
    return (`El área del rectángulo es de ${area} metros cuadrados`)
}
console.log(rectangleArea(5,3))

// * calcular el cuadrado de un numero
const numeroCuadrado = n =>{
    let cuadrado = n*n
    return (`El cuadrado de ${n} es ${cuadrado}`)
}
console.log(numeroCuadrado(4))

// * calcular la conversion de grados celsius a fahrenheit
const convGradosFC = gradosC =>{
    let gradosF = (9/5)*gradosC + 32
    return (`${gradosC} grados Celsius, equivalen a ${gradosF} grados Fahrenheit`)
}
console.log(convGradosFC(4))

// * calcular el volumen de una esfera v=4/3 pi*rcubo
const esferaVolumen = radioEsfera =>{
    let volumenEsfera = Math.round((4/3)*Math.PI*(radioEsfera**3))
    return (`Con un radio de ${radioEsfera}, el volumen de la esfera es de ${volumenEsfera} metros cúbicos`)
}
console.log(esferaVolumen(3))
