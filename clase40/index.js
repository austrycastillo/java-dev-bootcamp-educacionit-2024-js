let boton = document.getElementById('boton');
let main = document.querySelector('#main');
boton.addEventListener('click', (e) => {
    // console.log('tocaste');
    e.preventDefault();
    activar('https://jsonplaceholder.typicode.com/posts');
});
let activar = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.addEventListener('load', () => {
        // console.log(xhr.status)
        if (xhr.status == 200)
            // console.log(xhr.responseText);
            mostrarInfo(xhr.responseText);
    });
    xhr.send();
}
let mostrarInfo = (info) => {
    // console.log(info);
    let contenido = JSON.parse(info);
    // console.log(contenido);
    // console.log(contenido[2]);
    // console.log(contenido[2].id);
    // console.log(contenido[2].title);

    for (const element of contenido) {
        // console.log(element.id);
        // console.log(element.title);
        let card = document.createElement('div');
        card.classList.add('card');
        let cardBody = document.createElement('div');
        cardBody.classList.add('cardBody');
        let h5 = document.createElement('h5');
        h5.classList.add('card-title');
        h5.innerHTML = element.title;
        let h6 = document.createElement('h6');
        h6.classList.add('card-subtitle');
        h6.innerHTML = element.id;
        let p = document.createElement('p');
        p.classList.add('card-text');
        p.innerHTML = element.body;
        cardBody.appendChild(h5);
        cardBody.appendChild(h6);
        cardBody.appendChild(p);
        card.appendChild(cardBody);
        main.appendChild(card);
    }

}




//PROMESAS
// const promesa = new Promise((resolve, reject) => {
//     const ram = Math.floor(Math.random() * 10);
//     setTimeout(() => {
//         ram < 5
//             ? resolve(ram)
//             : reject(new Error(`no es mayor a 5, pues el número random es ${ram}`))
//     }, 2000);
// });

// promesa
//     .then(ram => console.log(ram))
//     .catch((error) => {
//         console.log(error);
//     });

//FETCH CON UN TXT  ****VER****
// fetch('index.txt')
//     .then((info) => {
//         return info
//     })
//     .then((valor) => {
//         console.log(valor)
//     })


//FETCH CON JSON
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resp) => {
//         // console.log(resp)
//         return resp.json()
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data[2].id);
//     })



//FETCH CON JSON ANIDADO 
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resp) => {
//         // console.log(resp)
//         return resp.json()
//     })
//     .then((data) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data[2].id}`)
//             .then((response) => {
//                 return response.json()
//             })
//             .then((posts) => {
//                 console.log(posts)
//             })
//     })


////FETCH CON JSON DE IMAGENES
fetch('https://picsum.photos/v2/list')
    .then(resp => resp.json())
    .then(data => {
        // console.log(data);
        // console.log(data[2].download_url
        // );
        for (const element of data) {
            console.log(element.download_url
            );
            let img = document.createElement('img');
            img.src = element.download_url;
            img.width = 100;
            document.body.appendChild(img);
        }
    })