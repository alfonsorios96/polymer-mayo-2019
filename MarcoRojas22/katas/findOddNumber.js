function findOdd(A) {
  //happy coding!
  let aux = 0;
  let cont = 0;
  while(aux!= A.length){
    for(let i = 0; i < A.length; i++){
      if(aux != i){
        if(A[aux] == A[i])
          cont++;
      }
    }
    if(cont%2==0){
      return A[aux]}
     else{
     cont = 0;
     aux++;}
  }
  return 0;
}