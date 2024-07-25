//funciones propias
// function saludar() {
//     console.log('Holaaaaaaa pepsicola')
// }
// saludar()
// function cantar() {
//     const letra1 = 'tararara';
//     return letra1;
// }
// const letra2 = cantar()
// function sumar(a, b) {
//     return a + b;
// }
// console.log(sumar(2, 10))
// let fun = function () {
//     console.log('soy una función anónima')
// }
// fun()
// let fun2 = () => console.log('soy una función flecha')
// fun2()
// let fun3 = () => {
//     return 'soy una función'
// }
// console.log(fun3())
// let producto = (id, nombre, precio, stock) => {
//     return {
//         id: id,
//         nombre: nombre,
//         precio: precio,
//         stock: stock
//     }
// }
// let productoNombre = producto(34, "mouse", 300, 12)

// console.log(productoNombre.nombre)
// console.log(productoNombre.stock)



//Manejando el DOM
let h1 = document.querySelector("h1");
let parr = document.querySelector("#parr");
console.log(h1);
console.log(parr);
let parr2 = document.getElementById("parr");
console.log(parr2);
let h2 = document.querySelector(".h2");
console.log(h2);
parr.innerHTML = "soy un nuevo contenido blabla"
parr.style.color = "red"
parr.style.backgroundColor = "green"
parr.style.border = "2px solid black"
parr.style.borderRadius = "5px"
parr.style.padding = "10px"

let div = document.createElement('div')
div.innerText = 'hola nuevo div'
document.body.appendChild(div)

let caja = document.querySelector('.caja')
let p = document.createElement('p')
p.innerText = 'Hoy es miércoles 24/07/2024'
caja.appendChild(p)
p.setAttribute('id', 'miId')
p.setAttribute('class', 'miclase')
h2.classList.add('miclase')

/*
crear un div desde html con un selector de clases, luego crear una lista ordenada
con 5 series desde js

*/
const caja2 = document.querySelector('.caja2')
const ol = document.createElement('ol')
let series = ['El señor de los anillos', 'Lucifer', 'La reina sur']
for (var i = 0; i < series.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = series[i]
    ol.appendChild(li)
}
caja2.appendChild(ol)

// const li1 = document.createElement('li')
// li1.innerHTML = 'El señor de los anillos'
// ol.appendChild(li1)

// const li2 = document.createElement('li')
// li2.innerHTML = 'Lucifer'
// ol.appendChild(li2)

// const li3 = document.createElement('li')
// li3.innerHTML = 'La reina sur'
// ol.appendChild(li3)

// const li4 = document.createElement('li')
// li4.innerHTML = 'Dr House'
// ol.appendChild(li4)

// const li5 = document.createElement('li')
// li5.innerHTML = 'Pablo Escobar'
// ol.appendChild(li5)