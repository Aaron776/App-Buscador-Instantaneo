//Refereciamos los datos del DOM
let buscador=document.getElementById('buscar')
let celdas=document.getElementsByTagName('td')

// Peticion a la Api
//traemos los datos desde una API
let url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
    .then( response => response.json() ) // aqui en este then hago la peticion a la api y obtengo una respuesta y luego transformo los datos en objeto json para usar en este archivo
    .then( json => mostrarDatos(json) )
    .catch( error => console.log(error) )


const mostrarDatos=(datos)=>{
    console.log(datos)
    let body=''
    for(let i=0; i<datos.length; i++){
        body += `<tr><td>${datos[i].name}</td></tr>`
    }

    document.querySelector('.datos').innerHTML = body
}

//Input Buscar funcionamiento
buscador.addEventListener('keyup', (accion)=>{
    let texto=accion.target.value // aqui se graba cada letra, palabras o caracteres que ingresamos en el input
    console.log(texto)

    let er = new RegExp(texto, "i") // el objeto RegExp sirve para hacer coincider texto con un patron
    for(let i=0; i<celdas.length; i++) {
        let valor = celdas[i]
        console.log(valor)
        if(er.test(valor.innerText)){
            valor.classList.remove("ocultar")
        }else{
            console.log(valor)
            valor.classList.add("ocultar")
        }
    }
})


