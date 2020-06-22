import validator from './validator.js';


//console.log(validator);


//interaccion del DOM
const formulario = document.querySelector('#formulario-tarjeta');
formulario.inputNumero.addEventListener("keyup", (e) => {


  //console.log (e);
  //console.log (e.target.value);
  //aqui ya podriamos ver el numero completo /console.log (e.target.value);

    var valorNumeroArreglo = e.target.value;
    //console.log (valorNumeroArreglo);

    validator.isValid(valorNumeroArreglo);
 
 });



//const tarjeta = document.querySelector('#tarjeta'),
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
//btnEnviarFormulario = document.querySelector('btn-enviar'),
//formulario = document.querySelector('#formulario-tarjeta'),
numeroTarjeta = document.querySelector('#tarjeta .numero'),
nombreTarjeta = document.querySelector('#tarjeta .nombre'),
logoMarca = document.querySelector('#logo-marca'),
mesExpiracion = document.querySelector('#tarjeta .mes'),
yearExpiracion = document.querySelector('#tarjeta .year');

btnAbrirFormulario.addEventListener('click', () => {
  btnAbrirFormulario.classList.toggle('active');
  formulario.classList.toggle('active');


});




// selector del Mes
for ( let i=1; i <= 12; i++){
//console.log (i);
let opcion= document.createElement ("option");
opcion. value=i;
opcion.innerText=i;
formulario.selectMes.appendChild(opcion);

}

// selector del año
const yearActual = new Date ().getFullYear ();
for (let i=yearActual ; i<= yearActual+4; i++){
//console.log (i);
let opcion = document.createElement("option");
opcion.value=i;
opcion.innerText= i;
formulario.selectYear.appendChild(opcion);

}



// input de la Tarjeta

formulario.inputNumero.addEventListener("keyup", (e) => {

//console.log (e);
//aqui ya podriamos ver el numero completo /console.log (e.target.value);

let valorInput = e.target.value;
formulario.inputNumero.value = valorInput
// ojo que aqui en los replace si influye las dobles comillas, por lo que hay que poner una sola comilla'' si poneer "" cambia el resultado 
// elimiar espacios que esten en blanco
.replace(/\s/g, '')
// elimiar letras
.replace(/\D/g, '')
// ponemos este metodo para eliminar el ultimoespaciado de la cadena
.trim();

// es para visualizar en la pagina el numero de tarjeta   
numeroTarjeta.textContent = valorInput;
  var masked_str = valorInput;
// cuando la persona borre lo escrito y que no se corra la palabra numero de tarjeta 
if(valorInput == ''){
  numeroTarjeta.textContent ='#### #### #### ####'
   
// descargar las imagenes de los logo
logoMarca.innerHTML = '';
}

else{
  
validator.maskify(masked_str);

}



if(valorInput[0] == 4){
  logoMarca.innerHTML = '';
  const imagen = document.createElement('img');
  imagen.src = 'visa.png';
  logoMarca.appendChild(imagen);
} else if(valorInput[0] == 5){
  logoMarca.innerHTML = '';
  const imagen = document.createElement('img');
  imagen.src = 'mastercard.png';
  logoMarca.appendChild(imagen);
}

});

//  Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
let valorInput = e.target.value;

formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
nombreTarjeta.textContent = valorInput; 
if(valorInput ==''){
  nombreTarjeta.textContent = 'xxxxx xxxxx';
  
}


});

// para que cuando el usurio escriba la fecha se vea reflejada en la tarjeta 
formulario.selectMes.addEventListener('change', (e) => {
mesExpiracion.textContent = e.target.value;

});

// para que cuando el usurio escriba el año se vea reflejada en la tarjeta 
formulario.selectYear.addEventListener('change', (e) => {
yearExpiracion.textContent = e.target.value.slice(2);

});
