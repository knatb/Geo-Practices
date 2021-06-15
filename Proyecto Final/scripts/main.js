const listaloggedout = document.querySelectorAll('.logged-out');
 const listaloggedin = document.querySelectorAll('.logged-in');
 const dataAccount = document.querySelector('.dataAccount');
 
 const configuraMenu = (user) => {
     if(user){
        db.collection('usuarios').doc(user.uid).get().then( doc =>{
            const html = `
                <p>Nombre: ${ doc.data().nombre }</p>
                <p>Correo: ${ user.email}</p>
                <p>Teléfono: ${ doc.data().telefono }</p>
                <p>Dirección: ${ doc.data().direccion }</p>
            `;
            dataAccount.innerHTML = html;
        });

        listaloggedin.forEach( item => item.style.display = 'block');
        listaloggedout.forEach( item => item.style.display = 'none');
     } else {
        dataAccount.innerHTML = '';
        listaloggedin.forEach( item => item.style.display = 'none');
        listaloggedout.forEach( item => item.style.display = 'block');
     }
 }
 
 const serviceList = document.getElementById('serviceList');

 const getServices = (data) =>{

    if(data.length){
        let html = '';

        data.forEach(doc => {
            const service = doc.data();
            console.log(service);
            const columna = `
                <div class="col-12 col-md-4" data-aos="fade-right" data-aos-duration="4000">
                    <img class="img-fluid shadow rounded" id='service' src="./img/services/${service.imagen}" alt="${service.nombre}">
                    <h2 class="py-3">${service.nombre}</h2>
                    <p class="text-align: justify">${service.descripcion}</p>
                    <p class="text-danger">$${service.precio}.00 MXN</p>
                    <a href="https://paypal.me/knatb08/${service.precio}" target="_blank">
                        <button class="btn btn-primary">Pagar Ahora</button>
                    </a>
                </div>
            `;
            html += columna;
        });
    
        serviceList.innerHTML = html;
    } else {
        serviceList.innerHTML = '<p class="text-center fs-1" style="color: #fff">Ingrese con sus claves para ver los servicios.</p>';
    }
 };

 
function iniciaMapa() {
var coordenadas = { lat: 21.152639, lng: -101.711598  }

var map = new google.maps.Map(
    document.getElementById('mapa'),
    {
        center: coordenadas,
        zoom: 15
    }
);
var marcador = new google.maps.Marker({ position: coordenadas, map: map });
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