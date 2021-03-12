var paises = document.querySelector('#paises');

fetch('https://corona.lmao.ninja/v3/covid-19/countries')
.then( function(response){
    response.json()
    .then (function(data){
            data.forEach(registro => {
                
                let dupla = document.createElement('div');
                dupla.className = 'row border bg-light';
                paises.appendChild(dupla);
                
                let column = document.createElement('div');
                column.className = 'col-12';
                paises.appendChild(column);

                let nombre = document.createElement('p');
                nombre.textContent = 'País: ' + registro.country + ' - Casos: ' + registro.cases;
                column.appendChild(nombre);
            });
        });
});