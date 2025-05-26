//validar nombre, debe contener solo letras y no ser vacio
let personas = []
let eNombre = document.getElementById('nombre')
let eEdad = document.getElementById('edad')
let vNombre = eNombre.value
let vEdad = eEdad.value
let errorNombre = document.getElementById('errorNombre')
let errorEdad = document.getElementById('errorEdad')

function validarFormulario() {  
    let eNombre = document.getElementById('nombre')
    let eEdad = document.getElementById('edad')
    let vNombre = eNombre.value
    let vEdad = eEdad.value
    let errorNombre = document.getElementById('errorNombre')
    let errorEdad = document.getElementById('errorEdad')
    let fNombre = validarNombre(vNombre, errorNombre)
    let fEdad = validarEdad(vEdad,errorEdad)
    if (fNombre && fEdad) {
        let persona = {
            nombre: vNombre,
            edad: vEdad
        }
        personas.push(persona)
        console.log(personas)
        eNombre.value = ''
        eEdad.value = ''
        cargarDatos()
        
    }

}

console.log(persona)
mostrarDatos()

function validarNombre(value,error) {   
    if (value === '') {
        error.innerHTML = "Por favor ingresar un nombre valido"
        return false
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        error.innerHTML = "El nombre solo debe contener letras"
        return false
    } else {
        error.innerHTML = ""
        return true
    }
    
}


function actualizarMiFormulario() { 

}

function eliminar() {

}

function mostrarDatos() {

}
//validar edad: Debe ser mayor o igual a 18 y menor a 100


function validarEdad(vEdad) {
    if (vEdad === '') {
        alert("Por favor ingresar edad valida")
        return
    } if (vEdad < 0) {
        alert("Edad invalida")
        return
    } if (vEdad > 120){
        alert("Edad fuera de rango")
        return
    } else{console.log("Exito!")}

}
