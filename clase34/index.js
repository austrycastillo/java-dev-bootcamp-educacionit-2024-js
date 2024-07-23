// //arreglos
// let numeros = [1, 2, 3, 4]
// let datos = [1,
//     'Ana',
//     true,
//     2.2,
//     {}
// ]
// let colors = new Array('Carlor', 'Petra')
// console.log(numeros[2])
// for (var i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }
// //objetos
// const auto = {
//     marca: 'fiat',
//     precio: 250,
//     motor: 1.3,
//     color: 'rojo',
//     datos: ['a', 'b', 'c'],
//     pasajero: {
//         nombre: 'Juana',
//         edad: 24
//     }
// }
// console.log(auto)
// console.log(auto.color)
// console.log(auto.datos[2])
// console.log(auto.pasajero.nombre)

// //foreach
// const frutas = ['banana', 'frutilla', 'mango', 'coco']
// frutas.forEach(elemento => {
//     console.log(elemento)
// });
// // for of
// for(elemento of frutas){
//     console.log(elemento)
// }
// // map (crear nuevo array)
// frutas.map(elemento => {
//     console.log(elemento)
// });
// //for in
// for(elemento in auto){
//     console.log(elemento)
// }
// frutas.push('limón')//ingreso al final
// for(elemento of frutas){
//     console.log(elemento)
// }
// frutas.pop();//elimino al final
// for(elemento of frutas){
//     console.log(elemento)
// }
// frutas.unshift('coco')
// for(elemento of frutas){
//     console.log(elemento)
// }
// frutas.shift()
// for(elemento of frutas){
//     console.log(elemento)
// }
// console.log(frutas.slice(2))
// console.log(frutas.slice(0,1))

// const level1 = [7, 4, 9, 10, 2, 23, 18, 42, 53, 99, 100]
// const level2 = level1.filter(item => item % 2 == 0);
// console.log(level1)
// console.log(level2)
// const level3 = level1.find(item => item > 40);
// console.log(level3)
// const level4 = level1.findIndex(item => item > 40);
// console.log(level4)


/*
crear 2 arreglos:
- 1 para persona 1
- otro para persona 2
- llenar los arrays con actividades que hacen las personas
- crear un tercer array con las actividades en común 

*/
let persona1 = [
    'cantar',
    'bailar',
    'correr',
    'escalar',
    'nadar',
    'jugar'
];
let persona2 = [
    'leer',
    'dormir',
    'cantar',
    'comer',
    'jugar',
    'descansar'
];
let actividadesComun = [];
for (var i = 0; i < persona1.length; i++) {
    //console.log(persona1[i])
    for (var j = 0; j < persona2.length; j++) {
        if (persona1[i] == persona2[j])
            actividadesComun.push(persona2[j]);
    }
}
console.log(actividadesComun)

/*
Carrera de atletas, preguntar cuantos atletas, el sistema solicita nombre del atleta (promp), tiempo que tardó,
al final mostrar el mejor tiempo
*/
let nombreAtletas = [];
let tiempoAtletas = [];
let menorTiempo = 100;

do {
    const name = prompt("escribí el nombre del atleta")
    nombreAtletas.push(name);
    const time = prompt("escribí el tiempo del atleta")
    tiempoAtletas.push(time);
} while (window.confirm("desea agregar otro atleta?"));
console.log(nombreAtletas)
console.log(tiempoAtletas)
for (var i = 0; i < tiempoAtletas.length; i++) {
    if(tiempoAtletas[i]< menorTiempo )
        menorTiempo = tiempoAtletas[i]
}
console.log(menorTiempo);