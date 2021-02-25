var navegador = document.querySelector('#datosNavegador');

var datos = navegador.getElementsByTagName('li');


function obtenerDatos(){
    datos[0].innerHTML = 'El navegador es ' + navigator.appCodeName;
    datos[1].innerHTML = 'El navegador es ' + navigator.appVersion;
    datos[2].innerHTML = 'Status de internet ' + navigator.onLine;
    datos[3].innerHTML = 'La plataforma es ' + navigator.platform;
}