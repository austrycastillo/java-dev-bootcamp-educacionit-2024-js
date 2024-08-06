//PRACTICA CON OBJETOS
const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        }
    ]
}

//consultar el valor Super Hero Squad de la propiedad  squadName
//console.log(superHeroes.squadName)
//consultar el valor Madame Uppercut
//console.log(superHeroes.members[1].name)
//consultar el valo Superhuman reflexes
//console.log(superHeroes.members[1].powers[2])
//consultar el valor 39
//console.log(superHeroes.members[1].age)

//EXPRESIONES REGULARES 
//   let exp = /juan/
//   console.log(exp.test('nau'))
//   console.log(exp.test('JUAN'))
//   console.log(exp.test('juan'))
//   exp = /[Jj]uan/
//   console.log(exp.test('Juan'))
//   exp = /[A-Za-z]/
//   exp = /[0-9]/
//   exp = /^[a-zA-Z0-9]{3,6}$/ 
//   exp = /\d{3}/

/*
CREAR UN FORMULARIO PARA VALIDAR, PRACTICANDO:
- DOM
- OBJETOS
- EVENTOS
- FUNCIONES
- EXPRESIONES REGULARES
*/

let form = document.getElementById('form');
let inputs = document.querySelectorAll('input');
let exp = {
    nombre: /^[a-zA-ZÀ-ÿ]{4,10}$/,
    edad: /^\d{1,2}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    //^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}
let campos = {
    nombre: false,
    edad: false,
    email: false
}
let nombre = document.querySelector('#nombre')
let validar = e => {
    // console.log('estoy validando')
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.value)
    // console.log(e.target.name)
    switch(e.target.name){
        case 'nombre':
            if(exp.nombre.test(e.target.value)){
                //console.log('si')
                // e.target.classList.add('i-correcto')
                nombre.classList.add('i-correcto')
            }else{
                //console.log('nop')
                // e.target.classList.add('i-incorrecto')
                nombre.classList.add('i-incorrecto')
            }
        break;
        
    }
}
inputs.forEach(input =>
    input.addEventListener('keyup', validar)
)