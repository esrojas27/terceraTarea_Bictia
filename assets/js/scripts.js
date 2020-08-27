/* Datos primitivos

//Numbre
var edad = 2831354

//string
var nombre = "Pepito"

//Bolean
var hombre = true
var mujer = false

//null
//undefined

/*Tipos de datos complejos
//son datos que son considerado objeto y reciben metodos

var arraycitoDeFruta = ['Papaya', 'Manzana', 'Limon']
var arraycitoDeMuchasCosas = ['Papaya', 2, true, ["hola", "mundo"]]
var persona = {
    nombre: "Pepito",
    edad: 20,
    hombre: true,
    mujer: false,
    hobbies:['Correr', 'Leer', 'VideoJuego', 'Comer'],
    padre:{
        nombre:'Pepito Sr.',
        edad:45,
    }
}

//Funciones

//funciones convencionales

/* 
 function suma(num1,num2){
     return num1+num2
 }
 function resta(num1,num2){
    return num1-num2
}
function multi(num1,num2){
    return num1*num2
}
function divi(num1,num2){
    return num1/num2
}


 console.log(suma(5,4))
 console.log(resta(5,4))
 console.log(multi(5,4))
 console.log(divi(5,4)) 

 //Funciones anonimas o tipo flecha
 const myFunction = (num1,num2) => num1 + num2
 
 console.log(myFunction(2,4))
 

 const hora = 2

 if(hora>=9){
     console.log('La tienda esta abierta')

 }else if(hora>=8){
     console.log('Estamos abriendo, ingresa a las 9')
 }else{
     console.log('Estamos cerrados')
 }
 

//AND y OR

const genero ="mujer"
const edad = 18

if (genero=="mujer" && edad>18{
    console.log
}


const nombre = prompt('Dinos tu nombre').toLocaleLowerCase()
console.log(nombre)

if(nombre !== "pepito"){
    console.log('Bienvenido a nuestro bar')
}else{
    console.log('Lo sentimos Pepito, no puedes ingresar')
}


const user = false

if(!user){
    alert('El usuario no esta registrado')
}else{
    console.log('El usuario si existe')
}


if(name == '' &&  correo == '' && edad == ''){
    alert('Porfavor llene todos losdatos requeridos')
}

function diaSemana(dia){

    switch(dia){
        case "lunes":
            console.log('Es lunes, dia de trabajo')
            break;
        case "martes":
            console.log('Es martes, dia de trabajo')
            break;
        case "miercoles":
            console.log('Es miercoles, dia de trabajo')
            break;
        case "jueves":
            console.log('Es jueves, dia de trabajo')
            break;
        case "viernes":
            console.log('Es viernes, dia de trabajo')
            break;
        case "sabado":
            console.log('Es sabado, dia de trabajo')
            break;
        default:
            console.log('Es dia de descanso')
            break;
    } 
}
*/

let inputNum1 = null;
let inputNum2 = null;
let respuesta = document.getElementById('respuesta');

function suma(){

    let suma = null;
    
    inputNum1 = document.getElementById('num1').value
    inputNum2 = document.getElementById('num2').value
    n1 = parseInt(inputNum1,10)
    n2 = parseInt(inputNum2,10)
    suma=(n1+n2)

    respuesta.innerText = suma;

}

function resta(){

    let resta = null;
    
    inputNum1 = document.getElementById('num1').value
    inputNum2 = document.getElementById('num2').value
    n1 = parseInt(inputNum1,10)
    n2 = parseInt(inputNum2,10)
    resta=(n1-n2)

    respuesta.innerText = resta;

}
function multi(){

    let  multi= null;
    
    inputNum1 = document.getElementById('num1').value
    inputNum2 = document.getElementById('num2').value
    n1 = parseInt(inputNum1,10)
    n2 = parseInt(inputNum2,10)
    multi=(n1*n2)

    respuesta.innerText = multi;
    console.log(multi)
    alert(multi)

}

function divi(){

    let divi = null;
    
    inputNum1 = document.getElementById('num1').value
    inputNum2 = document.getElementById('num2').value
    n1 = parseInt(inputNum1,10)
    n2 = parseInt(inputNum2,10)
    divi=(n1/n2)

    respuesta.innerText = divi;

}







/* const num1 = parseInt(prompt('escribe el primer numero'))
const num2 = parseInt(prompt('escribe el segundo numero'))

alert(num1*num2) */











