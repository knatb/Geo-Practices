var demo = document.querySelector('#demo');

function obtener () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        demo.innerHTML('El navegador no soporta la operación');
    }
}

function showPosition(position){
    //console.log(position);
    demo.innerHTML = 'Latitud: ' + position.coords.latitude + '<br>' +
    'Longitud: ' + position.coords.longitude;
}