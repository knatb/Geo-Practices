var map;

function iniciaMapa(){

    var coordenadas = {  lat: 21.152639, lng:  -101.711598 };

    var propiedades = {
        center: coordenadas,
        zoom: 12
    };

    map = new google.maps.Map(document.getElementById('map'),propiedades);

    var btnBuscar = document.getElementById('btnBuscar');

    btnBuscar.addEventListener('click', function(){

        var domicilio = document.getElementById('domicilio').value;
        console.log(domicilio);

        geocoder = new google.maps.Geocoder();

        geocoder.geocode( { 'address': domicilio, region: 'Guanajuato' }, function( results, status ){
            
            if(status == 'OK') {
                console.log(results);
                var resultados = document.getElementById('resultados');
                resultados.innerHTML = `
                    <p><strong>Coordenadas:</strong> ${  results[0].geometry.location }</p>
                    <p><strong>Detalles:</strong> ${ results[0].formatted_address} </p>
                `;

                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            }  else { alert('Geocode no se ejecuto con éxito.'); }
        });

    });

    map2 = new google.maps.Map(document.getElementById('map2'),propiedades);
    var btnBuscar2 = document.getElementById('btnBuscar2');
    btnBuscar2.addEventListener('click', function(){

        var latitudlongitud = document.getElementById('latitudlongitud').value;

        var latlngStr = latitudlongitud.split(',',2);

        var latlng = {  lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};

        console.log(latlng);

        geocoder = new google.maps.Geocoder();

        geocoder.geocode({ 'location': latlng }, function(results, status){

            if(status == 'OK') {
                var resultados2 = document.getElementById('resultados2');
                resultados2.innerHTML = `
                    <p><strong>Detalles:</strong> ${ results[0].formatted_address} </p>
                `;

                map2.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map2,
                    position: results[0].geometry.location
                });
            } else { alert('Geocode no se ejecuto con éxito.'); }

        });
    });
}