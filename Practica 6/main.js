var mapa = document.querySelector('#mapa');
mybutton = document.getElementById("myBtn");

var coordernadas = {
  lat: 0,
  lng: 0
}

function iniciaMapa() {
  var propiedades = {
    center: coordernadas,
    zoom: 20
  }

  map = new google.maps.Map(mapa, propiedades);

  var icono = {
    url: 'https://www.gifsanimados.org/data/media/67/coche-y-automovil-imagen-animada-0097.gif',
    scaledSize: new google.maps.Size(50,50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
  }
  
  var marcador = new google.maps.Marker({ 
    position: coordernadas, 
    icon: icono
  });  

  if(navigator.geolocation){
    movePosition(marcador);
  }

  function movePosition(marcador){
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);

      var posicion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      
      marcador.setPosition( new google.maps.LatLng(posicion.lat, posicion.lng));
    });
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}