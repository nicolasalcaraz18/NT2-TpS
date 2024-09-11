import axios from 'axios';

async function obtenerTitulosEj1(){
    try {
        const response = await fetch ('https://rickandmortyapi.com/api/episode?page=2')
        const data = await response.json();
        const primerosDiez = data.results.slice(0,10);
        primerosDiez.forEach(episodio => console.log(episodio.name));
    } catch (error) {
        console.log("Error " + error);
    }
}
//obtenerTitulosEj1()


async function eliminarPostEj2(){
    try {
        const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/4")
        console.log("El post borrado es: " + response.data)
    } catch (error) {
        console.log("Error: " + error)
    }
}
//eliminarPostEj2()

async function listarAlbumDeFotosEj3(){
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums?userId=5")
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

//listarAlbumDeFotosEj3()

async function mostrarInfoUserPorIdEj4(){
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users/5")
        const data = await response.json();
        console.log("datos del user",data)
    } catch (error) {
        console.log(error)
    }
}

//mostrarInfoUserPorIdEj4()

async function eliminarToDoEj5(){
    try {
        const response = await axios.delete("https://jsonplaceholder.typicode.com/todos/4")
        console.log("Dato borrado: ")
    } catch (error) {
        console.log(error)
    }
}

//eliminarToDoEj5()

async function mostrarComentariosPostPorIDEj6(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=2")
        const data = await response.json()
        console.log("comentarios del usuario de id 2:", data)
    } catch (error) {
        console.log(error)
    }
}

//mostrarComentariosPostPorIDEj6()

async function borrarFotoEj7(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos/1", {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log("Foto eliminada");
        } else {
            console.log("Error al eliminar la foto. Estado:");
        }
    } catch (error) {
        console.log(error)
    }
}

//borrarFotoEj7()

async function mostrarDatosClimaEj8(){
    try {
        const response = await axios.get("")
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

//mostrarDatosClimaEj8()

async function mostrarPendientesEj9(){
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos?userId=3")
        const data = await response.json()
        const tareasPendientes = data.filter(tarea => !tarea.completed)
        console.log("Tareas pendientes del usuario con ID 3:", tareasPendientes)
     } catch(error){
        console.log(error)
    }
}

//mostrarPendientesEj9()

async function obtenerArticulos(){
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    } catch (error) {
        throw error;
    }
}

obtenerArticulos().then(datos=>{
    console.log("datos cargados: ", datos)
}).catch(error=>{
    console.log(error)
})