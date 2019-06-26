function validParentheses(parens){
  //TODO 
  while(parens.includes('()')){
    parens = parens.replace('()','');
  }
  if(parens.length == 0) return true;
  else return false;
}