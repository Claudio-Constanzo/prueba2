//validar nombre, debe contener solo letras y no ser vacio
let personas = []
let eNombre = document.getElementById('nombre')
let eEdad = document.getElementById('edad')
let vNombre = eNombre.value
let vEdad = eEdad.value
let errorNombre = document.getElementById('errorNombre')
let errorEdad = document.getElementById('errorEdad')

function validar() {  
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

function cargarDatos() {
    console.log("Cargando datos...")
    let mapPersonas = personas.map((persona, index) => {
        return `<tr>
                    <td>${index + 1}</td>
                    <td>${persona.nombre}</td>
                    <td>${persona.edad}</td>
                    <td><button onclick="eliminar(${index})">Eliminar</button></td>
                </tr>`;
    });
    let cuerpoTabla = document.getElementById('cuerpoTabla');
    let strcuerpoTabla = mapPersonas.join('');
    cuerpoTabla.innerHTML = strcuerpoTabla;
    console.log("Datos cargados correctamente");
}

function actualizarMiFormulario() { 
    let eNombre = document.getElementById('nombre')
    let eEdad = document.getElementById('edad')
    eNombre.value = ''
    eEdad.value = ''
    errorNombre.innerHTML = ''
    errorEdad.innerHTML = ''
    console.log("Formulario actualizado")

}

function eliminar() {

}


//validar edad: Debe ser mayor o igual a 18 y menor a 100


function validarEdad(vEdad) {
    if (vEdad === '') {
        alert("Por favor ingresar edad valida")
        return false
    } if (vEdad < 0) {
        alert("Edad invalida")
        return false
    } if (vEdad > 120){
        alert("Edad fuera de rango")
        return false
    } else{console.log("Exito!")
        return true 
        
    }

}
