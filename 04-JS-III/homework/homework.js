// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
for(i=0; i<array.length; i++) array[i]++;
return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  array.push(elemento);
  // y devuelve el array
  // Tu código:
  
  return array;}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento);
  // Tu código:
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = ''
  for(i=0;i<palabras.length;i++){
	  frase += palabras[i];
	  if( i == palabras.length-1 ) break;
	  frase +=' ';
  }
  
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  esta = false;
  for(i=0;i<array.length;i++)
	  if( array[i] == elemento ) esta = true; 
  return esta;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  suma = 0;
  for(i=0; i<numeros.length; i++) suma+=numeros[i];
  return suma;
  
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma = 0;
  for(i=0;i<resultadosTest.length;i++)
	  suma += resultadosTest[i];
	  //suma = float(suma);
  return suma/resultadosTest.length;
 
  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  mayor = numeros[0];
  for(i=1;i<numeros.length;i++){
	mayor = mayor > numeros[i] ? mayor: numeros[i];
    }
	return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if( arguments.length == 0 ) return 0;
  if( arguments.length == 1 ) return arguments[0];
  producto = 1;
  for(i=0; i<arguments.length; i++ ) producto *= arguments[i];
  return producto;
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  cuenta = 0;
  for(i=0;i<arreglo.length; i++) 
	  if( arreglo[i] > 18 ) cuenta++;
return cuenta;  
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
   descanso = false;
   /*
   diaSemana='Domingo Lunes Martes Miércoles Jueves Viernes Sábado'.split(' ');
   diaSemana.unshift('Es fin de semana');
   */
   if( numeroDeDia == 1 || numeroDeDia == 7 ) descanso = true;
	
   //return diaSemana[ numeroDeDia ];
	return descanso? 'Es fin de semana' : 'Es dia Laboral';
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  return String(n)[0] == '9';
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  igual = arreglo[0];
  for(i=1;i<arreglo.length;i++) if( arreglo[i] != igual ) return false;
  return true;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  meses = 'Enero Marzo Noviembre'.split(' ');
  regreso =Array();
  completo=0
  Enero =Marzo =Noviembre =false;  
  for(i=0;i<array.length;i++){
 
	  if( array[i] == 'Enero' && !Enero ){ regreso.push(array[i]); Enero = true;}
	  if( array[i] == 'Marzo' && !Marzo ) { regreso.push(array[i]); Marzo=true; }
	  if( array[i] == 'Noviembre' && !Noviembre ) { regreso.push(array[i]); Noviembre=true;}

  }

  return Enero && Marzo && Noviembre ? regreso: 'No se encontraron los meses pedidos';

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  R = Array();
  for(i=0;i<array.length;i++) if( array[i]>100 ) R.push( array[i] );
  return R;	  
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  s = Array(); //s.push(numero);
  bandera = true;
  for(veces=0;veces<10;veces++){
	  numero +=2
	  if( numero == veces ) //return 'Se interrumpió la ejecución':
	   { bandera = false; break;} else
	   s.push( numero );
  }
  return bandera? s: 'Se interrumpió la ejecución';
  }



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  s = Array(); //s.push(numero);
  for(i=0;i<10;i++){
	if( i==5 ) continue;
	numero += 2;
	s.push( numero );
  }
  return s;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
