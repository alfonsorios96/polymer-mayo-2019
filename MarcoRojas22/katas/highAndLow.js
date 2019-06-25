function highAndLow(numbers){
  // ...
  let numbersArray = numbers.split(" ");
  const resultado = numbersArray.sort((a,b) => {
    return b-a;
  });
  
  return resultado[0] + " " + resultado[resultado.length-1];
}