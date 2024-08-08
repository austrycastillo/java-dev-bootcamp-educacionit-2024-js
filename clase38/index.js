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
let s_nombre = document.querySelector('.s-nombre')
let s_edad = document.querySelector('.s-edad')
let s_email = document.querySelector('.s-email')
let validar = e => {
    // console.log('estoy validando')
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.value)
    // console.log(e.target.name)
    switch (e.target.name) {
        case 'nombre':
            // console.log('estoy en el caso')
            // console.log(exp.nombre)
            // console.log(e.target.value)
            // console.log(e.target)
            if (exp.nombre.test(e.target.value)) {
                // console.log('si')
                // e.target.classList.add('i-correcto')
                e.target.classList.add('i-correcto');
                e.target.classList.remove('i-incorrecto');
                s_nombre.classList.remove('s-nombre-error');
                campos.nombre = true;
            } else {
                // console.log('nop')
                // e.target.classList.add('i-incorrecto')
                e.target.classList.add('i-incorrecto');
                e.target.classList.remove('i-correcto');
                s_nombre.classList.add('s-nombre-error');
                campos.nombre = false;
            }
            break;
        case 'edad':
            // console.log('estoy en el caso')
            // console.log(exp.nombre)
            // console.log(e.target.value)
            // console.log(e.target)
            if (exp.edad.test(e.target.value)) {
                // console.log('si')
                // e.target.classList.add('i-correcto')
                e.target.classList.add('i-correcto');
                e.target.classList.remove('i-incorrecto');
                s_edad.classList.remove('s-edad-error');
                campos.edad = true;
            } else {
                // console.log('nop')
                // e.target.classList.add('i-incorrecto')
                e.target.classList.add('i-incorrecto');
                e.target.classList.remove('i-correcto');
                s_edad.classList.add('s-edad-error');
                campos.edad = false;
            }
            break;
        case 'email':
            // console.log('estoy en el caso')
            // console.log(exp.nombre)
            // console.log(e.target.value)
            // console.log(e.target)
            if (exp.email.test(e.target.value)) {
                // console.log('si')
                // e.target.classList.add('i-correcto')
                e.target.classList.add('i-correcto');
                e.target.classList.remove('i-incorrecto');
                s_email.classList.remove('s-email-error');
                campos.email = true;
            } else {
                // console.log('nop')
                // e.target.classList.add('i-incorrecto')
                e.target.classList.add('i-incorrecto');
                e.target.classList.remove('i-correcto');
                s_email.classList.add('s-email-error');
                campos.email = false
            }
            break;

    }
}
inputs.forEach(input =>
    input.addEventListener('keyup', validar)
);

form.addEventListener('submit', e => {
    e.preventDefault();
    if (campos.nombre && campos.edad && campos.email) {
        console.log('enviamos el form');
        //e.target.submit();
    } else {
        console.log('no enviamos');
    }
});