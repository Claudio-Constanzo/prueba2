//validar nombre, debe contener solo letras y no ser vacio
let personas = []
let eNombre = document.getElementById('nombre')
let eEdad = document.getElementById('edad')
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
        
    }else {
        console.log("Error al validar los datos")
    }

}

console.log(personas)
cargarDatos();

function validarNombre(value,error) {   
    if (value === '') {
        error.innerHTML = "Por favor ingresar un nombre valido"
        return false
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        alert("El nombre solo debe contener letras!")
        // error.innerHTML = "<b>ERROR:</b> El nombre solo debe contener letras!"
        return false
    } else {
        error.innerHTML = ""
        return true
    }
    
}

function cargarDatos() {
    console.log("Cargando datos...")
    let mapPersonas = personas.map((persona, index) => {
        return "<tr><td>" +persona.nombre+
        "</td><td>" +persona.edad+
        "</td><td><button class='btn btn-danger' onclick='eliminar("+index +")'>Eliminar</button>"+
        "<button class='btn btn-primary' onclick='actualizarMiFormulario("+index+")'>Actualizar</button></td></tr>";
    });
    let cuerpoTabla = document.getElementById('cuerpoTabla');
    let strcuerpoTabla = mapPersonas.join('');
    if (cuerpoTabla) {
        cuerpoTabla.innerHTML = strcuerpoTabla;
        console.log("Datos cargados correctamente");
}
}

function eliminar(indice) {
    if (confirm("¿Está seguro que desea eliminar esta persona?")) {
        personas = personas.filter((persona, index) => indice != index);
        cargarDatos();
        console.log("Eliminando persona en el indice: " + indice);
        alert("Persona eliminada correctamente");
    }
}


function actualizarMiFormulario(indice) { 
    indice = parseInt(indice, 10);
    let eNombre = document.getElementById('nombre');
    let eEdad = document.getElementById('edad');
    if (personas[indice]) {
        eNombre.value = personas[indice].nombre;
        eEdad.value = personas[indice].edad;
    }
    let btnActualizar = document.getElementById('btnActualizar');
    btnActualizar.value = indice;
}

function actualizar(){
    let eNombre = document.getElementById('nombre')
    let eEdad = document.getElementById('edad')
    let vNombre = eNombre.value
    let vEdad = eEdad.value
    let btnActualizar = document.getElementById('btnActualizar')
    let indice = btnActualizar.value
    personas = personas.map((persona, index) => {
        if (indice == index) {
            return{
                nombre: vNombre,
                edad: vEdad
            }
        }else{
            return persona
        }
        
    })
    console.log("Actualizando persona en el indice: " + indice);
    alert("Persona actualizada correctamente");
    cargarDatos();
}



//validar edad: Debe ser mayor o igual a 18 y menor a 100


function validarEdad(vEdad) {
    if (vEdad === '') {
        alert("Por favor ingresar edad valida")
        return false
    } if (vEdad <= 17) {
        alert("Ingresar edad mayor o igual a 18")
        return 
    } if (vEdad > 100){
        alert("Edad fuera de rango")
        return false
    } else{console.log("Exito!")
        return true 
        
    }

}
