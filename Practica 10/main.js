var apiUrl = 'https://corona.lmao.ninja/v3/covid-19/countries';
var mapa = document.getElementById('mapa');

var initCoords = {
    lat: 0,
    lng: 0
};

var properties = {
    center: initCoords,
    zoom: 2
};


function iniciaMapa(){

    fetch(apiUrl)
    .then( function(response){
        response.json().then(function(data){
            const map = new google.maps.Map(mapa, properties);

            data.forEach(marcador => {
                fetch(apiUrl)
                .then(function(response){
                    console.log(response);
                })
            })
        });
    })
    .catch( function(error){
        console.log('Ocurrió un error');
    })
}