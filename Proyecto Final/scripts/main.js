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
                    <h2 class="py-3 text-danger">${service.nombre}</h2>
                    <p class="text-align: justify">${service.descripcion}.00 pesos</p>
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