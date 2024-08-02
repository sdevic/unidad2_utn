//envio de solicitud

document.getElementById('ingresoForm').addEventListener('submit',function(event){
    event.preventDefault();//Detener el envvio del formulario por defecto
    validarFormulario();
});

function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let password = document.getElementById('password').value;
    let repetirPassword = document.getElementById('repetirPassword').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let valid = true; //Variable para verificar qie el formulario sea valido

}




//busco el mensaje de confirmacion del envio
const getMensaje = ()=>{
    const http = new XMLHttpRequest()
    http.onreadystatechange = () =>{
        console.log("onreadystatechange");
        console.log(http.readyState);
        console.log(http.status);
        //verificar si la respuesta esta completa y es exitosa
        if(http.readyState == 4 && http.status == 200){
            document.getElementById("mensaje").innerHTML = http.responseText; //mostrar menstaje
            
        }
    };
    // inicio la solicituda get
    http.open('GET',"http://127.0.0.1:50621//mensaje.txt",true);
    
    //enviar solicitus al servidor
    http.send();
}
getMensaje();