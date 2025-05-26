//validar nombre, debe contener solo letras y no ser vacio
personas = []
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
    let fNombre = validarNombre(eNombre, vNombre, errorNombre)
    let fEdad = validarEdad(eEdad, vEdad, errorEdad)
    if (fNombre && fEdad) {
        let persona = {
            nombre: vNombre,
            edad: vEdad
        }
        let personas = personas.push(persona)
        console.log(persona)
        return
    }

}

function validarNombre() {

}


function actualizarMiFormulario() {

}

function eliminar() {

}
//validar edad: Debe ser mayor o igual a 18 y menor a 100


function validarEdad() {
    if (vEdad === '') {
        alert("Por favor ingresar edad valida")
        return
    } if (vEdad < 0) {
        alert("Edad invalida")
        return
    } else (vEdad != 0)

}
