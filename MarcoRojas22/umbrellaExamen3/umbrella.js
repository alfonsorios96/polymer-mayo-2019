function minUmbrellas(weather) {
  // TODO
  let acumulador = 0;
  let resultados = [0,0];
  let bandera = false;
  for(let i = 0; i < weather.length; i++){
    if(!bandera){  //NO TIENE PARAGUAS
      if(weather[i] == "rainy" || weather[i] == "thunderstorms"){ //NECESITA PARAGUAS
        if(i%2 == 0){ //HOME -> WORK
          resultados[0] == 0 ? acumulador++ : resultados[0]--; //NO HAY PARAGUAS EN HOME | SI HAY PÁRAGUAS EN HOME
          resultados[1]++;
        }
        else{  //HOME <- WORK
          resultados[1] == 0 ? acumulador++ : resultados[1]--; //NO HAY PARAGUAS EN WORK | SI HAY PARAGUAS EN WORK
          resultados[0]++;
        }
        bandera = true; //TIENES UN PARAGUAS CONTIGO
      }
    }
    else{  //TIENE PARAGUAS
      if(weather[i] == "rainy" || weather[i] == "thunderstorms"){ //NECESITA PARAGUAS
        if(i%2 == 0){ //HOME -> WORK
          resultados[0]--;
          resultados[1]++;
        }
        else{  //HOME <- WORK
          resultados[1]--;
          resultados[0]++;
        }
      }
      else{ //NO NECESITA PARAGUAS
        bandera = false;
      }
    }
  }
  let res = resultados[0] + resultados[1];
  return acumulador;
}