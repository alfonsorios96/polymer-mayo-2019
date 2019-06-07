function duplicateCount(text){
    text = text.toLowerCase();
    myMap = new Map();
    let myValue = 0;

    for(letter of text){
      if(myMap.has(letter)){
        let repetitions = myMap.get(letter);
        myMap.set(letter, ++repetitions);
      }
      else{
        myMap.set(letter, 0);
      }
    }

    for([key, value] of myMap){
      if(value > 0){
        myValue++;
      }
    }

    return myValue;
  }

  duplicateCount('hoooHlaa');