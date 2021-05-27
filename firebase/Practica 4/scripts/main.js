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
                <p>Coordenadas: ${ doc.data().coordenadas.latitude} , ${ doc.data().coordenadas.longitude}</p>
            `;
            dataAccount.innerHTML = html;
        });

        listaloggedin.forEach( item => item.style.display = 'block');
        listaloggedout.forEach( item => item.style.display = 'none');
     }
     else
     {
        dataAccount.innerHTML = '';
        listaloggedin.forEach( item => item.style.display = 'none');
        listaloggedout.forEach( item => item.style.display = 'block');
     }
 }

 const obtienePosiciones = (data) =>{

    var mapa = document.querySelector('#mapa');

    console.log(data);

    var propiedades = {
        center: {
          lat: 21.152639,
          lng: -101.711598,    
        },
        zoom: 14
      }

      var map = new google.maps.Map(mapa, propiedades); 
  
      data.forEach(doc => {
        informacion = new google.maps.InfoWindow;
        let posicion = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        informacion.setPosition(posicion);
        informacion.setContent(doc.data().nombre);
        informacion.open(map);
    });
}