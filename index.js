console.log('Conectando...')

// Conversor RGB a Hexadecimal

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

// Conversor Hexadecimal a RGB

const num = document.getElementById('hex')
const calHex = document.getElementById('btnHex')
const rta_hex = document.getElementById('rtaHex')

calHex.addEventListener('click', hexToRgb)

function hexToRgb(hex) {

    const hexNum = num.value

    // Eliminar el signo # si está presente
    hex = hexNum.replace(/^#/, '');
  
    // Convertir a valores RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    rta_hex.style = "color:black"
    rta_hex.innerText = "El número Hexadecimal " + '('+'#'+hexNum+')' + " en RGB es " + '(' + r +', '+ g +', '+ b +')'
    
}

console.log('Conectado.')