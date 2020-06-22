const validator = {


 
maskify:(valorInput) =>{

  var valorNumeroArreglo = valorInput;
  var digitos = valorNumeroArreglo.slice(-4);
  var mask_simbolo = "#";
  var masked_str = mask_simbolo.repeat(12) + digitos;
  
  document.querySelector(".numero").innerHTML = masked_str;
  console.log("este es el numero de tu tarjeta " + masked_str);

 },
 

 isValid:(valorInput) =>{

  //console.log(typeof valorInput);
  let valorNumeroArreglo = valorInput.split("");
  //var arrInvertido=valorNumeroArreglo.reverse();
     //console.log('este es el reverso: '+arrInvertido);

  var prod = 1;
  var resul = 0;
  var sum = 0;
  var capa;
 
    //Recorro mi arreglo posición a posición para realizar el algoritmo de Luhn
    for(var i = 0; i < valorNumeroArreglo.length; i++){
     //Determino si una posición es par
       if(i%2===0){
         //Asigno a prod el valor del número en la posición i multiplicada por dos
           prod=valorNumeroArreglo[i]*2;
         //Si el prod es menor que 10 entra y se asigna ese valor en reemplazo de el elemento que esta en la posicion i del arreglo
           if(prod<10){
               valorNumeroArreglo[i]=prod;
           }else{
                // si no se cumplió la condición anterior entonces prod>=10 por lo tanto realizo la operación de acuerdo al
               // algoritmo de luhn, que en este caso es sumar las cifras del prod
               resul=Math.floor(prod/10)+(prod%10);
               // Asigno el valor de mi resul al elemento en la posicion i del array
               valorNumeroArreglo[i]=resul;
           }
       }
       else{
         //si la posicion es impar solo lo mulplico por 1 para convertirlo a tipo de dato numerico y escribo el mismo numero
         valorNumeroArreglo[i]=valorNumeroArreglo[i]*1;
       }
   }
   //muestro mi nuevo arreglo
   console.log(valorNumeroArreglo);
    //sumo cada elemento del arreglo actual y lo almaceno en sum
    for(i=0; i<valorNumeroArreglo.length; i++){
     sum=sum+valorNumeroArreglo[i];
    }
    //muestro mi suma total
    console.log(sum);
    //Pregunta si la suma del arreglo actual es divisible entre 10
    if(sum%10===0){
      //Si es divisible muestra que es un  tarjeta válida.
       //return msg = "Tarjeta de crédito valida";
       var capa = document.getElementById ("validacion")
       console.log("Tarjeta de Credito Valida");
       capa.innerHTML = "Tarjeta de Credito Valida"
   }else{
      //Si no es divisible entre 10 muestra tarjeta no válida
       //return msg = "Tarjeta de crédito no valida";
       var capa = document.getElementById ("validacion")
       console.log("Tarjeta de Credito Invalida");
       capa.innerHTML = "Tarjeta de Credito Invalida"
   }

   
   //return msg;
  }
    //document.write('<br> '+ isValid(valorNumeroArreglo));
    //console.log(isValid(valorInput));
  //}



  
};



export default validator;
