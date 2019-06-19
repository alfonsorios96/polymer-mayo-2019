function minUmbrellas(weather) {
  let long = weather.length;
  let morning =false;
  let afternoon = false;
  let umbrellasHome=0;
  let umbrellasJob=0;
  weather.map((time,i) => {
    if(i%2!==0){
      morning = weather[i-1] === 'rainy' || weather[i-1] === 'thunderstorms' ? true:  false;
      afternoon = time === 'rainy' ||  time === 'thunderstorms' ? true : false;
      if(umbrellasHome>0){
          if(umbrellasJob>0){
              if(morning === true){
                umbrellasHome--;
                umbrellasJob++;
              }
              if(afternoon ===true){
                umbrellasHome++;
                umbrellasJob--;
              }
          }else if(morning===true){
            umbrellasHome--;
            umbrellasJob++;
            if(afternoon===true){
               umbrellasHome++;
               umbrellasJob--;
            }
          }else if(afternoon===true){
               umbrellasHome++;
          }
      }else{
        if(morning===true){
            umbrellasJob++;
            if(afternoon===true){
               umbrellasJob--;
               umbrellasHome++;
            }
        }else if(afternoon===true){
               if(umbrellasJob>0) umbrellasJob--;
               umbrellasHome++;
          }   
      }
    }}
    );
  return umbrellasJob + umbrellasHome;
}