//async - await - fetch: modelo bloqueando

// let comidas = [
//     {
//         'nombre': 'pizza',
//         'precio': 100
//     },
//     {
//         'nombre': 'milanesa',
//         'precio': 250
//     },
//     {
//         'nombre': 'brocoli',
//         'precio': 99
//     }
// ]

// function mostrarComidas() {
//     return new Promise((resolve, reject) => {
//         console.log('cargando info....');
//         setTimeout(() => {
//             resolve(comidas)
//         }, 3000)
//     })
// }

// async function getComidas() {
//     let comidas = await mostrarComidas()
//     console.log(comidas)
//     console.log(comidas[1].nombre)
// }
// getComidas();

// async function mostrarTodos(){
//     const todosRespuest =await fetch('https://jsonplaceholder.typicode.com/todos');
//     const data = await todosRespuest.json();
//     return data;
// }


//CONSUMIR UN SERVICIO WEB CON FETCH DESDE
/*https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX
AGREGANDO LUEGO AL DOM IMÁGENES DESDE https://image.tmdb.org/t/p/w500/
AL FINAL AGREGAR EL VALOR DE LA CLAVE poster_path DEL JSON DE LAS PELICULAS
PROBAR Y PENSAR COMO PAGINAR USANDO LA CLAVE page DEL JSON
*/
let page = 1;
let siguiente = document.getElementById('siguiente');
let anterior = document.getElementById('anterior');
siguiente.addEventListener('click', () => {
    if (page < 100) {
        page++;
        cargar();
        document.getElementById('msn').classList.add('oculta');
    }
});
anterior.addEventListener('click', () => {
    if (page > 1) {
        page--;
        cargar();
        document.getElementById('msn').classList.add('oculta');
    } else {
        document.getElementById('msn').classList.remove('oculta');
        document.getElementById('msn').innerHTML = '<b class=red>no existe la página</b>'
    }

});
const cargar = async () => {
    try {
        const info = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${page}`);
        console.log(info);
        console.log(info.status);
        const datos = await info.json();
        console.log(datos);
        console.log(datos.results);
        // console.log(datos.results[2]);
        // console.log(datos.results[2].backdrop_path);
        let peliculas = '';
        datos.results.forEach(element => {
            // console.log(element)
            // console.log(element.backdrop_path)
            peliculas += `<div><img src="https://image.tmdb.org/t/p/w500/${element.backdrop_path}" class="peli"></div>`;
        });
        document.querySelector('main').innerHTML = peliculas;
    } catch (e) {
        console.log(e)
        document.getElementById('msn').innerHTML = '<b class=red>Intente más tarde, no podemos conectarnos 😪</b>'
    }
}

cargar();