let nombre, apellido, email, cantidad, categoria;
let borrar = document.getElementById('borrar');
let resumen = document.querySelector('.resumen');
let texto = document.getElementById('total');
let errorDiv = document.getElementById('errorDiv'); 


resumen.addEventListener('click', function(e){

    e.preventDefault(); 
    limpiarHTML();

    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    email = document.getElementById('email').value;
    cantidad = document.getElementById('cantidad').value;
    categoria = document.getElementById('categoria').value;

    if((nombre && apellido && email && cantidad && categoria) !== "" ){
        let total;
        switch (categoria) {
            case 'estudiante':
                total = parseInt(cantidad) * 200 * 0.2;
                texto.innerHTML = "Total a pagar: $".concat(total);
                break;
            case 'trainee':
                total = cantidad * 200 * 0.5;
                texto.innerHTML = "Total a pagar: $".concat(total);
                break;
            case 'junior':
                total = cantidad * 200 * 0.85;
                texto.innerHTML = "Total a pagar: $".concat(total);
                break;
        } 
    }           
    else{
        alert("Debe completar todos los campos!!!"); 
        /* texto.style.paddingTop = "15px";
        texto.style.color = "white";
        texto.textContent = "Complete todos los campos!!!";
        errorDiv.style.backgroundColor = "rgb(224, 41, 41)";
        errorDiv.style.textAlign = "center"; */  
    }
})


borrar.addEventListener('click', function(e){
    e.preventDefault(); 
    limpiarHTML();
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('email').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('categoria').value = "";
    document.getElementById('total').textContent = "Total a pagar: $";

})

function limpiarHTML(){
    texto = document.getElementById('total');
    texto.style.paddingTop = "15px";
    texto.style.color = "rgb(0, 64, 128)";
    texto.textContent = "Total a pagar: $";
    errorDiv = document.getElementById('errorDiv'); 
    errorDiv.style.backgroundColor = "rgb(207, 226, 255)";
    errorDiv.style.textAlign = "left";  
}

