function iniciaMapa(){

    var coordenadas = {  lat: 21.152639, lng:  -101.711598 };

    var propiedades = {
        center: coordenadas,
        zoom: 12,
    };

    map = new google.maps.Map(document.getElementById('map'),propiedades);

    showPlaces();
}

function showPlaces(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      
      var coordenadas = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: coordenadas,
        radius: 1000,
        type: ['atm','dentist']
      }, function(results, status, pagination){
        if(status !== 'OK') return;
        console.log(results)
      });
    });
  }
}