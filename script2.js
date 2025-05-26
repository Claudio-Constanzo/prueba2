//validar nombre, debe contener solo letras y no ser vacio
personas = []

function validar(){
    let eNombre = document.getElementById('nombre')
    let eEdad = document.getElementById('edad')
    let vNombre = eNombre.value
    let vEdad = eEdad.value
    let errorNombre = document.getElementById('errorNombre')
    let errorEdad = document.getElementById('errorEdad')
    let fNombre = validarNombre(eNombre,vNombre,errorNombre)
    let fEdad = validarEdad(eEdad,vEdad,errorEdad)
    if (fNombre && fEdad){
        let persona ={
        nombre: vNombre,
        edad: vEdad
        }
        let personas = personas.push(persona)
    }
    
    /*if (nombre === ""){
        alert("No dejar campo vacio.")
        return 
    }*/

    if 
}


//validar edad: Debe ser mayor o igual a 18 y menor a 100