console.log('katas');

function minUmbrellas(weather) {
    // TODO
    console.log(weather);
    const umbrellasHome = 2
    const umbrellasOffice = 0;

    //Se hace un For para que mi array comienze en 1, y 
    //comparar si son nones que sea en la mañana y si son pares que sea en la tarde
    let counter = 1;
    //Contador de climas en la mañana
    let counterWeatherOne = 0;
    //Contador de climas en la noche
    let counterWeatherTwo = 0;
    for (let array = 0; array < weather.length; array++) {
        // console.log(array);

        

        if(array % 2 === 0) {
            console.log('clima mañana: ' + weather[array])
            if(weather[array] === 'thunderstorms' || weather[array] === 'rainy') {
                counterWeatherOne++;
                console.log('lluvioso en la mañana, necesitas una sombrilla ' + counterWeatherOne);
            } else {
                console.log('despejado en la mañana');
            }
        } else {
            console.log('clima tarde ' + weather[array]);
            if(weather[array] === 'thunderstorms' || weather[array] === 'rainy') {
                counterWeatherTwo++;
                console.log('lluvioso en la tarde necesitas una sombrilla ' + counterWeatherTwo );
            } else {
                console.log('despejado en la tarde');
            }
        }


        // if(counterWeatherOne === 0) {
        //     console.log('No hay sombrillas en casa ' + counterWeatherOne);
        // } else {
        //     console.log('hay sombrillas en casa ' +  counterWeatherOne)
        // }

        // if(counterWeatherTwo === 0) {
        //     console.log('No hay sombrillas en la oficina ' + counterWeatherTwo);
        // } else {
        //     console.log('hay sombrillas en la oficina ' +  counterWeatherTwo)
        // }
        // do {
        //     counterWeatherOne += 1;
        //     console.log(counterWeatherOne);
        //  } while (array % 2 === 0)


        counter++;
    }

    


    // for (const one in weather) {
    //    console.log(one);
    //    return one+1;
    // }

    // if(numero % 2 == 0) {
    //     return "par";
    // }
    // else {
    //     return "impar";
    // }

}

minUmbrellas(["rainy", "cloudy", "rainy", "cloudy", "sunny", "sunny", "cloudy", "thunderstorms"])