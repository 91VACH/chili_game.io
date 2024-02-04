
document.getElementById('btn2').style.display ='none';
fondo.src= "./img/img_before_event.png";
function funcionTotal() {
    

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    return numeroGenerado;
}
let nuevoNumero=(parseInt(generarNumeroSecreto()));

function numeroGeneradoUsuario() {
    let num=document.querySelector("#numero-adivinanza").value;
    return num;
}

let numeroIngresado=parseInt(numeroGeneradoUsuario());

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
cambiarImg();
asignarTextoElemento('p.rptaChili',nuevoNumero);

while (numeroIngresado === nuevoNumero) {
    console.log('sí pez, eran iguales');
    numeroIngresado=(numeroIngresado/numeroIngresado)*(Math.floor(Math.random()*10)+1);
    console.log(`pero ahora es ${numeroIngresado}`);
    asignarTextoElemento('p.rptaChili',numeroIngresado);
}

function cambiarImg() {
    fondo.src= "./img/img_after_event.png";
}

function ocultar_mostrar() {
    document.getElementById('btn1').style.display ='none';
    document.getElementById('numero-adivinanza').style.display='none';
    document.getElementById('btn2').style.display ='flex';
}

asignarTextoElemento('p.piensaChili',nuevoNumero);
ocultar_mostrar();
}