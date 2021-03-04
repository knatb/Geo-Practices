var informacion = '<h2>Universidad de la Salle Bajío</h2>';
informacion += '<p>Avenida Universidad 602</p>';
informacion += '<p>Horario: 7:00 am - 4:00 pm</p>';

var mapa = document.querySelector('#mapa');

mybutton = document.getElementById("myBtn");

function iniciaMapa() {  
  var map = new google.maps.Map(mapa, propiedades);  

  var propiedades = {
    center: {
      lat: 21.152639,
      lng: -101.711598,    
    },
    zoom: 14
  }

  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);

      let posicion = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      const marcador = new google.maps.Marker({ 
        position: posicion, 
        map,
        title: 'Marcador'
      });

      map.setCenter(posicion);

      const infowindow = new google.maps.InfoWindow({
        content: informacion
      });

      marcador.addListener('click', () => {
        infowindow.open(map, marcador);
      });
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