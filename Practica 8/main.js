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