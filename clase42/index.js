//SPA
// let contenido = document.getElementById("contenido");
// let links = document.querySelectorAll("a");
// links.forEach(link => {
//     link.addEventListener("click", e => {
//         e.preventDefault();
//         // console.log(e)
//         // console.log(e.target)
//         // console.log(e.target.href)
//         let datos = e.target.href;
//         fetch(datos)
//             .then(response => response.text())
//             .then(conten => {
//                 // console.log(conten)
//                 contenido.innerHTML = conten;
//                 history.pushState(conten, "index", datos);
//             })
//     });
// });

// window.addEventListener("popstate", e => {
//     console.log(e.state);
//     contenido.innerHTML = e.state;
// });



//SPA CON EVENTOS
// const a = document.querySelectorAll("a");
// a.forEach(link => {
//     console.log(link.classList[0]);
//     let clase = link.classList[0];//
//     link.addEventListener("click", e => {
//         e.preventDefault();
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.class);
//         // history.pushState({
//         //     key: clase
//         // }, "", clase);
//         let span = document.querySelectorAll("span");
//         span.forEach(info => {
//             console.log(info);
//             console.log(info.id);
//             let id = info.id;//
//             if (clase == id) {
//                 info.classList.remove("hide");
//                 info.classList.add("active");
//             } else {
//                 info.classList.remove("active");
//                 info.classList.add("hide");
//             }
//         });
//     });
// });


//LOCALSTORAGE
//MÉTODOS: setItem, getItem, clear, removeItem
function registrarLocal() {
    // console.log(document.form)
    // let fruta = document.getElementById("fruta");
    // let dulce = document.getElementById("dulce");
    let texto = "Hoy tengo ganas de cantar";
    // document.form.fruta.value
    localStorage.setItem("texto", texto);
    // localStorage.setItem("dulce", document.form.dulce.value);
}
registrarLocal();
console.log(localStorage.getItem('texto'));

document.querySelector("a").addEventListener("click", e => {
    e.preventDefault();
    console.log(localStorage.getItem(fruta));
});