// function saludar() {
//     const span = document.getElementById("space");//selecciono el elemento
//     const p = document.createElement("p");//creo un tag
//     p.innerText = "Soy un nuevo párrafo";//contenido
//     span.appendChild(p);//confirmo ubicación
// }
// function cantar() {
//     const span = document.getElementById("space");//selecciono el elemento
//     const b = document.createElement("button");//creo un botón
//     b.innerText = "Soy un nuevo botón que canta";//contenido
//     span.appendChild(b);//confirmo ubicación
//     document.getElementById("boton").removeEventListener("click", cantar)
// }

// document.getElementById("boton").addEventListener("click", cantar)

// //método de propagación
// let padre = document.getElementById("padre")
// let hijo = document.getElementById("hijo")
// let nieta = document.getElementById("nieta")
// nieta.addEventListener("click", (e) => {
//     e.stopPropagation()//detiene la propagación trabajar con false
//     console.log("soy la nieta")
// }, false)
// padre.addEventListener("click", () => {
//     console.log("soy la padre")
// }, false)

//prevenciòn de eventos por default
const link = document.querySelector("#link")
// console.log(link)
link.onclick = (e) => {
    e.preventDefault()
    console.log("hola link")
    console.log(e.target)
    console.log(e.target.id)
    if (confirm("¿seguro que quieres ir al alumni?")) {
        console.log("vamos")
        window.location = e.target.href
    }
}

//haciendo lo mismo pero con multiples elementos
let links = document.querySelectorAll("a")//a es la etiqueta html
for (let i = 0; i < links.length; i++) {
    links[i].onclick = (e) => {
        e.preventDefault()
        if (confirm("¿seguro que quieres ir al link?")) {
            window.location = e.target.href
        }
    }
}

document.form.onsubmit = (e) => {
    e.preventDefault()
    let inputs = document.querySelectorAll("input")
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i])
        console.log(inputs[i].value)
        if (inputs[i].value == "") {
            // inputs[i].classList.remove("btnCorrecto")
            // inputs[i].classList.add("btnIncorrecto")
            inputs[i].removeAttribute('class','btnCorrecto')
            inputs[i].setAttribute('class','btnIncorrecto')
           
        } else if (inputs[i].value != "") {
            // inputs[i].classList.remove("btnIncorrecto")
            // inputs[i].classList.add("btnCorrecto")
            inputs[i].removeAttribute('class','btnIncorrecto')
            inputs[i].setAttribute('class','btnCorrecto')
        }
    }
}



