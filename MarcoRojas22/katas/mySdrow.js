function spinWords(cadena){
  //TODO Have fun :)
  const cadenaArray = cadena.split(" ").map((cadenita)=>{
    if(cadenita.length >= 5)
      return cadenita.split("").reverse().join("");
    else
      return cadenita;
  });
  return cadenaArray.join(" ");
}