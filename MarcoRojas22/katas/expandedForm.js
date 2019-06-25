
// Write Number in Expanded Form
function expandedForm(num) {
  // Your code here
  let cadena = '';
  let numCadena = String(num);
  let contador;
  let aux;

  for(let i = 0; i < numCadena.length; i++){
    if(numCadena[i] == '0')
      i++;
    if(i == numCadena.length) break;
    contador = Math.pow(10,numCadena.length-i-1);
    aux = Number(numCadena.slice(i,numCadena.length));
    aux = aux - (aux % contador);
    cadena += String(aux) + ' + ';
  }
  cadena = cadena.slice(0, cadena.length-3);
  while(cadena.includes(' + 0')){
    cadena = cadena.replace(' + 0', '');
  }
  return cadena;
}