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

//creamso las tres variable las cuales vamos a utilizar en todo el codigo 
let inputNum1 = null;
let inputNum2 = null;//estas dos variables son en las que guardaremos el valor de los espacios escritos por el usuario 
let respuesta = document.getElementById('respuesta');//en esta variable estamos obteniendo en el lugar donde vamos a colocar la respuesta de la opercacion

function suma(){ //creamos una funcion de suma

    let suma = null; //creamos una variable en donde vamos a guardar el resultado de la operacion
    
    inputNum1 = document.getElementById('num1').value
    inputNum2 = document.getElementById('num2').value //en estas dos variable obtenemos el valor de los dos campos "input" que es donde el usuario coloco los numeros a operar
    n1 = parseInt(inputNum1,10)
    n2 = parseInt(inputNum2,10) //aqui parseamos los valores obtenidos para pasarlos a numeros en base 10
    suma=(n1+n2) //aqui hacemos la operacion correspondiente

    respuesta.innerText = suma;//finalemente escribimos el resultado de la opeacion en el div del cual tenemos la ubicacion por si id 
 
}

function resta(){

    let resta = null; //creamos una variable en donde vamos a guardar el resultado de la operacion
    
    inputNum1 = document.getElementById('num1').value
    inputNum2 = document.getElementById('num2').value
    n1 = parseInt(inputNum1,10)
    n2 = parseInt(inputNum2,10)
    resta=(n1-n2)

    respuesta.innerText = resta;

}
function multi(){

    let  multi= null; //creamos una variable en donde vamos a guardar el resultado de la operacion
    
    inputNum1 = document.getElementById('num1').value
    inputNum2 = document.getElementById('num2').value
    n1 = parseInt(inputNum1,10)
    n2 = parseInt(inputNum2,10)
    multi=(n1*n2)

    respuesta.innerText = multi;


}

function divi(){

    let divi = null; //creamos una variable en donde vamos a guardar el resultado de la operacion
    
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











