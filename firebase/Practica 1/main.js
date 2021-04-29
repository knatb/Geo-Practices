var firebaseConfig = {
    apiKey: "AIzaSyCrXFL_mMbyLRVSC9Fn6_lfsDjMx54EzlE",
    authDomain: "proyecto1-935aa.firebaseapp.com",
    databaseURL: "https://proyecto1-935aa.firebaseio.com",
    projectId: "proyecto1-935aa",
    storageBucket: "proyecto1-935aa.appspot.com",
    messagingSenderId: "514873387506",
    appId: "1:514873387506:web:fa75cac073ad42be0b636b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const productoslista = document.querySelector("#lista");

const formulario = document.querySelector("#forma");

function renderProductos(doc){

        
    let li = document.createElement("li");
    let nombre = document.createElement("span");
    let codigo = document.createElement("span");
    let borrar = document.createElement("button");

    borrar.className = "btn btn-danger m-3";

    nombre.textContent = doc.data().nombre + " ";
    codigo.textContent = doc.data().codigo + " ";
    borrar.textContent = "Borrar  ";

    li.setAttribute("id", doc.id);
    li.appendChild(borrar);
    li.appendChild(nombre);
    li.appendChild(codigo);

    productoslista.appendChild(li);

    borrar.addEventListener("click", (e) => {
        let id = e.target.parentElement.getAttribute("id");
        db.collection("productos").doc(id).delete();
    } );
}

//Guarda datos
formulario.addEventListener('submit',(e)=> {
    e.preventDefault();
    db.collection('productos').add({
        nombre: formulario.nombre.value,
        codigo: formulario.codigo.value
    });

    formulario.nombre.value ='';
    formulario.codigo.value ='';

});


db.collection('productos').onSnapshot( snapshot =>{
    let changes = snapshot.docChanges();
    changes.forEach( change => {
        if(change.type == 'added'){
            renderProductos(change.doc);
        } else if(change.type=='removed'){
            console.log(change.doc.id);
            let valorid = document.getElementById(change.doc.id);
            lista.removeChild(valorid);
        }
    });
});