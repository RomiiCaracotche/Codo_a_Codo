
//-----VARIABLES-----
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');

const nombreMsj = document.querySelector('#nombreMsj'); 
const apellidoMsj = document.querySelector('#apellidoMsj');
const emailMsj = document.querySelector('#emailMsj');
const cantidadMsj = document.querySelector('#cantidadMsj');
const categoriaMsj = document.querySelector('#categoriaMsj');

let borrar = document.querySelector('#borrar');
let resumen = document.querySelector('.resumen');
let texto = document.querySelector('#total');
let formulario = document.querySelector('#formulario');
let total = document.querySelector('#total');

const dtoEstudiante = 80;
const dtoTrainee = 50;
const dtoJunior = 15;
const valorTicket = 200;


//-----EVENTOS-----
eventos();


//-----FUNCIONES-----

//Eventos
function eventos(){
    document.addEventListener('DOMContentLoaded', () => {
        //evita enviar el formulario al apretar la tecla enter sobre un input
        document.querySelectorAll('input').forEach( node => node.addEventListener('keypress', e => {
            if(e.keyCode == 13) {
                e.preventDefault();
            }
        }))
    }); 
    
    resumen.addEventListener('click', calcularTotal)
    
    borrar.addEventListener('click', vaciarCampos)
    
    nombre.addEventListener('click', validarNombreVacio)
    
    apellido.addEventListener('click', validarApellidoVacio)
    
    email.addEventListener('click', validarEmailVacio)
    
    cantidad.addEventListener('click', validarCantidadVacia)
    
    categoria.addEventListener('click', validarCategoriaVacia)
    
    nombre.addEventListener('change', validarNombre)
    
    apellido.addEventListener('change', validarApellido)
    
    email.addEventListener('change', validarEmail)
    
    cantidad.addEventListener('change', validarCantidad)
    
    categoria.addEventListener('change', validarCategoria)
}

//Validaciones campos vacios

function validarNombreVacio(){
    if(nombre.value === ""){
        campoInvalido(nombre, nombreMsj, "Por favor, ingrese el nombre.")
        return;
    }
}

function validarApellidoVacio(){
    if(apellido.value === ""){
        campoInvalido(apellido, apellidoMsj, "Por favor, ingrese el apellido.")
        return;
    }
}

function validarEmailVacio(){
    if(email.value === ""){
        campoInvalido(email, emailMsj, "Por favor, ingrese el email.")
        return;
    }
}

function validarCantidadVacia(){
    if(cantidad.value === ""){
        campoInvalido(cantidad, cantidadMsj, "Por favor, ingrese el cantidad.")
        return;
    }
}

function validarCategoriaVacia(){
    if(categoria.value === ""){
        campoInvalido(categoria, categoriaMsj, "Por favor, ingrese el categoria.")
        return;
    }
}

//Validaciones campos correctos

function validarNombre(){
    if(nombre.value !== ""){
        //Valida que no se ingresen numeros o caracteres al nombre
        if(!/^[A-Z]+$/i.test(nombre.value)){
            campoInvalido(nombre, nombreMsj, "Por favor, ingrese un nombre válido.");
            return;
        }
        else{
            campoValido(nombre, nombreMsj);
            return;
        }
    }
    else{
        campoInvalido(nombre, nombreMsj, "Por favor, ingrese el nombre.")
        return;
    }
}

function validarApellido(){
    if(apellido.value !== ""){
        //Valida que no se ingresen numeros o caracteres al apellido
        if(!/^[A-Z]+$/i.test(apellido.value)){
            campoInvalido(apellido, apellidoMsj, "Por favor, ingrese un apellido válido.");
            return;
        }
        else{
            campoValido(apellido, apellidoMsj);
            return;
        }
    }
    else{
        campoInvalido(apellido, apellidoMsj, "Por favor, ingrese el apellido.")
        return;
    }
}

function validarEmail(){
    if(email.value !== ""){
        //Valida que el formato del mail sea el correcto
        if(!validarFormatoEmail(email.value)){
            campoInvalido(email, emailMsj, "Por favor, ingrese un email válido.");
            return;
        }
        else{
            campoValido(email, emailMsj);
            return;
        }
    }
    else{
        campoInvalido(email, emailMsj, "Por favor, ingrese el email.")
        return;
    }
}

function validarCantidad(){
    if(cantidad.value !== ""){
        if(cantidad.value < 1){
            campoInvalido(cantidad, cantidadMsj, "Por favor, ingrese una cantidad mayor a 0.");
            return;
        }
        else{
            campoValido(cantidad, cantidadMsj);
            return;
        }
    }
    else{
        campoInvalido(cantidad, cantidadMsj, "Por favor, ingrese la cantidad.")
        return;
    }
}

function validarCategoria(){
    if(categoria.value !== ""){
        campoValido(categoria, categoriaMsj);
        return;
    }
    else{
        campoInvalido(categoria, categoriaMsj, "Por favor, ingrese la categoria.")
        return;
    }
}

//Resto de funciones
function calcularTotal(e){
    e.preventDefault(); 

    validarCampos();

    let suma;
    //calcular total
    switch (categoria.value) {
        case 'ninguna':
            suma = parseInt(cantidad.value) * valorTicket;
            total.innerHTML = suma;
            break;
        case 'estudiante':
            suma = parseInt(cantidad.value) * (100 - dtoEstudiante) / 100 * valorTicket;
            total.innerHTML = suma;
            break;
        case 'trainee':
            suma = cantidad.value * (100 - dtoTrainee) / 100 * valorTicket;
            total.innerHTML = suma;
            break;
        case 'junior':
            suma = cantidad.value * (100 - dtoJunior) / 100 * valorTicket;
            total.innerHTML = suma;
            break;
    } 
}

function validarCampos(){
    validarNombreVacio()
    validarApellidoVacio()
    validarEmailVacio()
    validarCantidadVacia()
    validarCategoriaVacia()
}

function validarFormatoEmail(email) {
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)){
        return true
    } 
    return false
}

function vaciarCampos(e){
    formulario.reset();
    total.innerHTML = "";
    borrarClasesValidoInvalido();
}

function campoValido(obj, msj){
    //recibo el input y el div donde se muestra el msj
    obj.classList.remove("is-invalid");
    obj.classList.add("is-valid");
    msj.classList.remove("invalid-feedback");
    msj.classList.add("valid-feedback");
    msj.textContent = "Completado.";
}

function campoInvalido(obj, msj, texto){
    //recibo el input, el div donde se muetra el msj y el msj
    obj.classList.add("is-invalid");
    obj.focus();
    msj.classList.add("invalid-feedback");
    msj.textContent = texto;
}

function borrarClasesValidoInvalido(){
    nombre.classList.remove("is-invalid");
    nombre.classList.remove("is-valid");
    apellido.classList.remove("is-invalid");
    apellido.classList.remove("is-valid");
    email.classList.remove("is-invalid");
    email.classList.remove("is-valid");
    cantidad.classList.remove("is-invalid");
    cantidad.classList.remove("is-valid");
    categoria.classList.remove("is-invalid");
    categoria.classList.remove("is-valid");
}
