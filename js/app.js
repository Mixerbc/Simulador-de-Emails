// Variables

const bntEnviar = document.querySelector("#enviar")
const resetBtn = document.querySelector("#resetBtn")
const formulario = document.querySelector("#enviar-mail")

// Variables para campos
const email = document.querySelector("#email")
const asunto = document.querySelector("#asunto")
const mensaje = document.querySelector("#mensaje")
const er = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    

eventListeners()
function eventListeners(){
    // Cuando la app arranca
    document.addEventListener("DOMContentLoaded",iniciarApp)

    // Campos de formularios

    email.addEventListener("blur", validarformulario)
    asunto.addEventListener("blur", validarformulario)
    mensaje.addEventListener("blur", validarformulario)

    // Resetea el formulario

    resetBtn.addEventListener("click",resetearFormulario)


    // Enviar email


    bntEnviar.addEventListener("click", enviarEmail)

}








// Funciones


function iniciarApp(){
    bntEnviar.disabled = true
    bntEnviar.classList.add("cursor-not-allowed","opacity-50")
    
}


// Valida el formulario

function validarformulario(e){


   
    if(e.target.value.length > 0){ 

         //Elimina Errores
    
       const error = document.querySelector("p.error")
       if(error){
        error.remove()
       }
   


        e.target.classList.remove("border-red-500")
        e.target.classList.add("border-green-500")
       
      

    }
    else{
        e.target.classList.remove("border-green-500")
     e.target.classList.add("border-red-500")
    
     mostrarError("Todos los campos son requeridos")
     
    }
    if(e.target.type === "email"){
    
    
    if(er.test(e.target.value)){
        
        //Elimina Errores
        const error = document.querySelector("p.error")
        if(error){
            error.remove()
           }
 
 
         e.target.classList.remove("border-red-500")
         e.target.classList.add("border-green-500")
        
       
        
    }
    else{
        e.target.classList.remove("border-green-500")
        e.target.classList.add("border-red-500")
        console.log("Incorrecto")
        mostrarError("Email Invalido")
    
    }


}
if( er.test(email.value)&& asunto.value !== "" && mensaje.value!== ""){
    bntEnviar.classList.remove("cursor-not-allowed","opacity-50")
    bntEnviar.disabled = false
}


}


function mostrarError(mensaje){

    const mensajeError = document.createElement("p")
    mensajeError.textContent = mensaje;
    mensajeError.classList.add("border","border-red-500","background-red-100","text-red-500","p-3","text-center","mt-5","error")
    const errores = document.querySelectorAll(".error")
    if(errores.length === 0){
       formulario.appendChild(mensajeError) 
    }

    
}

function enviarEmail(e){
    e.preventDefault()
    const spinner = document.querySelector("#spinner")
    spinner.style.display = "flex";


    //Muestra el spinner en solo 3 segundos

    setTimeout(() =>{
        spinner.style.display = "none" 
        const parrafo = document.createElement("p")
    parrafo.textContent= "El mensaje se envio correctamente"
    parrafo.classList.add("text-center","my-10","p-3","bg-green-500","text-white","font-bold","uppercase")
    
    formulario.insertBefore(parrafo,spinner)

    setTimeout(()=>{
        
        resetearFormulario()

        parrafo.remove();
    },4000);

    }, 3000);


}

function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}
