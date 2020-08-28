const mensajeNombre = document.getElementById('mensajeAlertNombre')
const mensajeLast = document.getElementById('mensajeAlertLast')
const mensajeEmail = document.getElementById('mensajeAlertEmail')
const mensajePassw = document.getElementById('mensajeAlertPassw')
const mensajeAge = document.getElementById('mensajeAlertAge')
const mensajeTyC = document.getElementById('mensajeAlertTyC')

const inputTyC = document.getElementById('inputTyC')
console.log(inputTyC)



function validarFormulario(e){
    e.preventDefault() // metodo que no deja que se ejecute lo que se va a ejecutar por dejecto
    let inputName = document.getElementById('name')
    let inputLast = document.getElementById('lastName')
    let inputEmail = document.getElementById('email')
    let inputPassw = document.getElementById('passw')
    let inputAge = document.getElementById('age')

    if(inputName.value == ''){
        mensajeNombre.innerText = "Por favor llena el Nombre"
       inputName.classList.add('bgcAlert')     //al input agreguele una clase

    }if(inputEmail.value  == ''){
        mensajeEmail.innerText = "Por favor llena el Email"
        inputEmail.classList.add('bgcAlert')
    }
    if(inputPassw.value  == ''){
        mensajePassw.innerText = "Por favor llena la Contraseña"
        inputPassw.classList.add('bgcAlert')
    }
    if(inputLast.value  == ''){
        mensajeLast.innerText = "Por favor llena el Apellido"
        inputLast.classList.add('bgcAlert')
    }
    if(inputAge.value  == ''){
        mensajeAge.innerText = "Por favor llena la Edad"
        inputAge.classList.add('bgcAlert')
    }
    if(inputTyC.checked == false){
        mensajeTyC.innerText = "Por favor acepta los Terminos y condiciones"
    }
    if(inputName.value != '' && inputTyC.checked && inputLast.value != '' && inputPassw.value != '' && inputEmail.value != '' && inputAge.value != ''){
        
        //en este parte se esta haciendo la verificacion de todos los inputs los cuales deben estar completos
        swal("Muy Bien!", "Registro Exitoso", "success")
       setTimeout( function(){
        window.location = './index.html'
       } , 2000)    // recibe una funcion de call back anonima y le dice cuanto tiempo se demora
       
    }
  
}


