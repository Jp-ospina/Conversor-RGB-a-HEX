console.log('Conectando...')

const r = document.getElementById('R')
const g = document.getElementById('G')
const b = document.getElementById('B')
const RTA = document.getElementById('rta')
const Btn = document.getElementById('btn')

Btn.addEventListener('click', mostrar)

function mostrar(){
    R = parseFloat(r.value)
    G = parseFloat(g.value)
    B = parseFloat(b.value)

    let rgb = [R, G, B];
    let hex = "#";

    for (let i = 0; i < rgb.length; i++) {
        let hexComponent = rgb[i].toString(16);
        if (hexComponent.length < 2) {
            hexComponent = "0" + hexComponent;
        }
        hex += hexComponent;
    }

    RTA.style =  "color:black"
    RTA.innerText = "El número RGB " + '('+rgb+')' + " en hexadecimal es " + hex;
}

console.log('Conectado.')