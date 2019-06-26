// return masked string
function maskify(cc) {
  if(cc.length <= 4)
    return cc;
  else{
    let aux = 0;
    while(aux != cc.length -4){
      cc = cc.replace(cc.charAt(aux),'#');
      aux ++;
    }
    return cc;
  }
}