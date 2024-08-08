//ASINCRONÍA
console.log('Hola Js 1');
console.log('Hola Js 2');
console.log('Hola Js 3');
setTimeout(() => {
    console.log('Hola Js 4');
}, 5000);
console.log('Hola Js 5');

//API REST
//API ---> definiciones, interfaz, programas, protocolos, info... para desarrollar, consumidos por terceros para reutizar los servicios 
//REST --> arquitectura, tecnología para crear aplicaciones web, http, conectar varios sistemas, en diferentes formatos (xml, json)
//RESTFUL --> programas o servicios basados en REST (web service)
//AJAX --> técnica, implementar js asincróno, en XHR, http
//métodos: get, post, put, delete
let ajax = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/users";
ajax.open('get', url);
ajax.addEventListener('load',()=>{
    console.log(ajax.response)    
});
ajax.send();
