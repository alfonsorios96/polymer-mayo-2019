function minUmbrellas(weather){
    let minUmbrellasToUse = 0;
    let morning = 1;
    for (i = 0; i <= weather.length -1; i++) {

        minUmbrellasToUse = weather[i] === 'rainy' || weather[i] === 'thunderstorms' ? minUmbrellasToUse + 1 : minUmbrellasToUse , morning = 2;
    
        
        minUmbrellasToUse = weather[i+1] === 'rainy' || weather[i+1] === 'thunderstorms' && morning === 1? minUmbrellasToUse + 1 : minUmbrellasToUse, morning =0;
        
        i++;
    }
    minUmbrellasToUse = minUmbrellasToUse < 0? minUmbrellasToUse * -1 : minUmbrellasToUse;
    return minUmbrellasToUse;
}


console.log(minUmbrellas(["overcast"]))