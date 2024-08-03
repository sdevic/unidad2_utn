//envio de solicitud

document.getElementById('ingresoForm').addEventListener('submit',function(event){
    event.preventDefault();//Detener el envvio del formulario por defecto
    
    validarFormulario()
   
});

function validarFormulario(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let comentario = document.getElementById('comentario').value;
    let asunto = document.getElementById('asunto').value;
    let email = document.getElementById('email').value;
    let valid = true; //Variable para verificar que el formulario sea valido
    //chequeo que todos los imput obligatorios esten completados
    if(nombre ===''){
        document.getElementById('errorNombre').innerText = "El nombre es obligatorio";
        valid =false;
    }else{
        document.getElementById('errorNombre').innerText = "";
    }
    if(apellido ===''){
        document.getElementById('errorApellido').innerText = "El apellido es obligatorio";
        valid =false;
    }else{
        document.getElementById('errorApellido').innerText = "";
    }
    if(asunto ===''){
        document.getElementById('errorAsunto').innerText = "El asunto es obligatorio";
        valid =false;
    }else{
        document.getElementById('errorAsunto').innerText = "";
    }
    
    if(comentario ===''){
        document.getElementById('errorComentario').innerText = "El nombre es obligatorio";
        valid =false;
    }else{
        document.getElementById('errorComentario').innerText = "";
    }
    if(email ===''){
        document.getElementById('errorEmail').innerText = "El nombre es obligatorio";
        valid =false;
    }else{
        document.getElementById('errorEmail').innerText = "";
    }
if(valid){
    //bloqueo los inputs
    document.getElementById('nombre').disabled = true; 
    document.getElementById('apellido').disabled = true; 
    document.getElementById('telefono').disabled = true; 
    document.getElementById('comentario').disabled = true;  
    document.getElementById('tipoDeContacto').disabled = true;    
    document.getElementById('asunto').disabled = true; 
    document.getElementById('email').disabled = true; 
    document.getElementById('enviar').disabled = true; 
    //lo hago asincronico para que mire el servidor  :)
    setTimeout(()=>{
    getMensaje();
} ,3000);
}
}

//cuando hago click en volver
document.getElementById('volver').addEventListener('click',function(event){
    event.preventDefault();//Detener el envvio del formulario por defecto
    
    location.reload() 
   
});


//busco el mensaje de confirmacion del envio
const getMensaje = ()=>{
    const http = new XMLHttpRequest()
    http.onreadystatechange = () =>{
        
        //verificar si la respuesta esta completa y es exitosa
        if(http.readyState == 4 && http.status == 200){
            
            document.getElementById("mensaje").innerHTML = http.responseText; //mostrar mensaje
            document.getElementById("volver").style.display = "block"; //para que aparezca el boton volver
            document.getElementById('ingresoForm').style.display ="none";
            
        }
    };
    // inicio la solicituda get
    http.open('GET',"http://127.0.0.1:50621//mensaje.txt",true);
     //enviar solicitus al servidor
     http.send();
    
   
}


