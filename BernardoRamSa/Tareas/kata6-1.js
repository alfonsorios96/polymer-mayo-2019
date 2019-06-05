var countBits = function(n) {
    bits = (n).toString(2);
    let count = 0;
    for(letra of bits){
        letra === '1' ? count++: count;
    }
    return count;
  };

  countBits(255);