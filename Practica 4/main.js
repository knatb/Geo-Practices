var demo = document.querySelector('#demo');

function obtener () {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(show);
    } else {
        demo.innerHTML('El navegador no soporta la operación');
    }
}

function show(position){
    var coordenadas = position.coords.latitude + ',' + position.coords.longitude;
    var mapa = document.querySelector('#mapa');
    console.log(coordenadas);
    var imageurl = 'https://maps.googleapis.com/maps/api/staticmap?center='+ coordenadas + '&zoom=10&size=800x400&key=AIzaSyAv-m46ebIV9fqkE2fIBGeWunmGmBm2R24';
    mapa.innerHTML = '<img src='+ imageurl+'></img>';
}

