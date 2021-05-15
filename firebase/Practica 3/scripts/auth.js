const formaIngresar = $('#formaIngresar')
const salir = $('#salir');

$('#formaIngresar').on('submit', (e) => {
  e.preventDefault();

  let Correo = $('#mail').val();
  let Password = $('#password').val();

  auth.signInWithEmailAndPassword(Correo, Password).then( cred => {
    console.log('entro');

    $('#ingresarModal').modal('hide');
    $('#formaIngresar').trigger("reset");
    $('.error').text(' ');

  }).catch( err => {
    console.log(err);
    $('.error').text(mensajeError(err.code));
  });
})

$('#salir').on('click', (e)=>{
  e.preventDefault();

  auth.signOut().then(()=>{
    alert('El usuario ha salido del sistema');
  })
})


function mensajeError (codigo){
  switch(codigo){
    case 'auth/wrong-password':
      return ('Su contraseña es incorrecta');
    case 'auth/user-not-found':
      return ('Usuario no encontrado');
    case 'auth/weak-password':
        return ('Contraseña debil');
    default:
        return ('Ocurrio un error al ingresar con este usuario');
  }
}