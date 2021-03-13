var mapa = document.querySelector('#mapa');

var initCoords = {
    lat: 0,
    lng: 0
};

var properties = {
    center: initCoords,
    zoom: 2
};


function getMarkers(){

    const markers = [
    {
        name: "México",
        longitude: "-99.1276",
        latitude: "19.427"
    }, {
        name: "Brasil",
        longitude: "-47.9292",
        latitude: "-15.7801"
    }, {
        name: "España",
        longitude: "-3.70327",
        latitude: "40.4167"
    }
    ];
    return markers;

}

function iniciaMapa(){

    const map = new google.maps.Map(mapa, properties);

    const marcadores = getMarkers();
    //console.log(marcadores);

    for(marcador in marcadores){

        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
            title: marcador.name
        })

    }
}