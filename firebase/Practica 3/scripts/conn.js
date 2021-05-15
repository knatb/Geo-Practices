var firebaseConfig = {
    apiKey: "AIzaSyDT0Zemusnl0KASdXaIOUs6JResm1oCQzQ",
    authDomain: "autorizacion-d8ce3.firebaseapp.com",
    databaseURL: "https://autorizacion-d8ce3.firebaseio.com",
    projectId: "autorizacion-d8ce3",
    storageBucket: "autorizacion-d8ce3.appspot.com",
    messagingSenderId: "436514863710",
    appId: "1:436514863710:web:dc1bc7d430769a40f4d2cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();