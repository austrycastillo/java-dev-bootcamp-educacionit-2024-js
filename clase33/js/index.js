// console.log("Hola linda console")
// //variables   --> var, const, let
// //tipo de datos --> string, int, double, float, boolean, arreglos [], objetos {}
// //declarar e inicializar variables
// var x = 2
// console.log(x)
// var x = 4
// console.log(x)
// let nombre = "Eustaquio"
// console.log(nombre)
// //operador + - * / %
// console.log(2 + 2 )
// let y = 10
// console.log(x*y)
// //> >= < <= == === != ! 
// let result = true
// console.log(result)
// console.log(!result)
// // ++ -- &&   ||
// console.log(true && false)
// //condicionales
// if(y === 10){
//     console.log("si es igual a 10")
// }else{
//     console.log("no es igual a 10")
// }

// let color = window.prompt("escribe tu color favorito")
// console.log(color)



/******************
 PRACTICA 1
 calcular el punto de equilibrio 
 cf costo fijo
 pv precio venta
 cv costo variable
 pe punto de equilibrio
 ************/
// let cf, pv, cv, pe
// cf = Number(prompt("Ingrese los costos fijos"))
// pv = Number(prompt("Ingrese el precio de venta"))
// cv = Number(prompt("Ingrese el costo variable"))
// pe = cf / (pv - cv)
// console.log("el punto de equilibrio es " + pe)
// console.log(`el punto de equilibrio es ${pe} `)

/*************** 
 ES UNA EMPRESA X
 Y DESEA QUE LOS OBREROS CALCULEN
 SU SUELDO SEMANAL
 - HASTA 40  ---> U$D20
 - HORAS EXTRAS --> U$D30
 DESARROLLAR UN SISTEMA PARA QUE EL EMPLEADO SEPA CUANTO COBRA EN LA SEMANA
 * */
// var varlorHora = 20, valorHoraExtra = 30
// var jornada = 40
// var nombre, horasTrabajadas, salario, horasExtras
// nombre = prompt("Ingrese su nombre")
// horasTrabajadas = Number(prompt("Ingrese la cantidad de horas trabajadas"))
// if (horasTrabajadas <= jornada) {
//     salario = horasTrabajadas * varlorHora
// } else {
//     horasExtras = horasTrabajadas - jornada
//     salario = (jornada * varlorHora) + (horasExtras * valorHoraExtra)
// }
// console.log(`Esta semana te corresponde un salario de ${salario}`)


//fecha en js
// var fecha = new Date()
// var diaSemana = fecha.getDay() // dia de la semana
// var mes = fecha.getMonth()
// var anio = fecha.getFullYear()
// var dia = fecha.getDate()// dia del mes
// console.log(dia)
// switch (diaSemana) {
//     case 1:
//         console.log("Hoy es lunes")
//         break
//     case 2:
//         console.log("Hoy es martes")
//         break
//     case 3:
//         console.log("Hoy es miércoles")
//         break
//     case 4:
//         console.log("Hoy es jueves")
//         break
//     case 5:
//         console.log("Hoy es viernes")
//         break
//     default:
//         console.log("fin de semana")

// }

/*
var --> redefinible -  redeclarar - scope global
let --> redefinible - no redeclarar - scope local
const --> no redefinible - no redeclarar - scope local
*/

//bucle while
var a = 1
do {
    console.log(a)
    a++
} while (a <= 20)

for (var i = 20; i >= 10; i--) {
    console.log(i)
}


