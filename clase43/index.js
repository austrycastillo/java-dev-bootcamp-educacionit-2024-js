//PERSISTENCIA CON COOKIES
//USAMOS EL OBJETO DOCUMENT Y EL MÈTODO COOKIE
// document.cookie = 'dato = 100';
// document.cookie = 'sentimiento = amor';
// document.cookie = 'lenguaje = js';
// document.cookie = "nombre=;expires = thu, 22 sep 2024 00:00:00 UTC;max-age=0";

//GEOLOCALIZACION
// let div = document.getElementById("div");
// const mapLink = document.getElementById("mapLink");
// const button = document.getElementById("button");
// button.addEventListener("click", e => {
//     // console.log(e);
//     // console.log(navigator.geolocation)
//     if (!navigator.geolocation) {
//         div.innerText = "La geolocalización no está disponible en tu navegador, intente más tarde, blabla...";
//     } else {
//         div.innerText = "Localizando....⌛";
//         setTimeout(() => {
//             console.log(navigator.geolocation.getCurrentPosition(success, error));
//         }, 3000);
//     }
//     function success(dato) {
//         // // console.log("todo bien" + dato);
//         // console.log(dato.coords);
//         // console.log(dato.coords.latitude);
//         // console.log(dato.coords.longitude);
//         let latitude = dato.coords.latitude;
//         let longitude = dato.coords.longitude;
//         mapLink.innerHTML = `https://www.openstreetmap.org/${latitude}/${longitude}`;
//         div.innerHTML = `<b>Latitude:</b> ${latitude}<br><b>Longitud:</b>${longitude}`;
//         mapLink.href = `https://www.openstreetmap.org/#map=14/${latitude}/${longitude}`;
//     }
//     function error() {
//         console.log("error");
//         div.innerText = "Error, intente más tarde";
//     }
// });


//CLASES
class Inmueble {
    habitacion;
    cocina;
    patio;
    banio;
    living;
    cochera;
    balcon;
    constructor() {
        this.habitacion = 0;
        this.cocina = 0;
        this.patio = 0;
        this.banio = 0;
        this.living = 0;
        this.cochera = 0;
        this.balcon = 0;
    }
    setHabitacion(habitacion) {
        this.habitacion = habitacion;
    }
    setCocina(cocina) {
        this.cocina = cocina;
    }
    setPatio(patio) {
        this.patio = patio;
    }
    setBanio(banio) {
        this.banio = banio;
    }
    setLiving(living) {
        this.living = living;
    }
    setCochera(cochera) {
        this.cochera = cochera;
    }
    setBalcon(balcon) {
        this.balcon = balcon;
    }
    getHabitacion() {
        return this.habitacion;
    }
    getCocina() {
        return this.cocina;
    }
    getPatio() {
        return this.patio;
    }
    getBanio() {
        return this.banio;
    }
    getLiving() {
        return this.living;
    }
    getCochera() {
        return this.cochera;
    }
    getBalcon() {
        return this.balcon;
    }
    mostrarInmueble() {
        return {
            habitacion: this.habitacion,
            cocina: this.cocina,
            patio: this.patio,
            banio: this.banio,
            living: this.living,
            cochera: this.cochera,
            balcon: this.balcon
        }
    }

}

//INSTANCIAS DE LA CLASE INMUBLE
const apto = new Inmueble();//OBJETO
const quinta = new Inmueble();
const casa = new Inmueble();
const hacienda = new Inmueble();
const monoambiente = new Inmueble();

apto.setBalcon(1);
apto.setHabitacion(3);
apto.setBanio(2);
apto.setLiving(2);
apto.setCocina(1);

monoambiente.setLiving(1);
monoambiente.setBanio(1);
monoambiente.setCocina(1);

hacienda.setHabitacion(10);
hacienda.setLiving(3);
hacienda.setBanio(3);
hacienda.setCochera(3);
hacienda.setCocina(1);

console.log(apto.mostrarInmueble());
console.log(monoambiente.mostrarInmueble());
console.log(hacienda.mostrarInmueble());
console.log(`Habitaciones: ${hacienda.mostrarInmueble().habitacion}`);
