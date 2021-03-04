function iniciaMapa() {

  var mapa = document.querySelector('#mapa');
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
        content: 'Contenido del maarcador'
      });

      marcador.addListener('click', () => {
        infowindow.open(map, marcador);
      });
    });
  }  
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
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