const test0 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const test = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

const validateSodoku = (arrays) => {

    let miMatrizTransversa = [  [],[],[],
                                [],[],[],
                                [],[],[]
                            ];
    let errores = [];
    let fila    = 0;

    for(const arrayOfNumbers of arrays){
        let columna = 0;
        for (const numbers of arrayOfNumbers) {
            miMatrizTransversa[columna][fila] = numbers;
            columna++;
        }
        fila++;
    }

    for(const arrayOfNumbers of arrays){
        if( (new Set(arrayOfNumbers)).size !== arrayOfNumbers.length ){
            return 'Sodoku Incorrecto';
        }
    }
    for(const arrayOfNumbers of miMatrizTransversa){
        if( (new Set(arrayOfNumbers)).size !== arrayOfNumbers.length ){
            return 'Sodoku Incorrecto';
        }
    }

    return 'Sodoku Correcto';;
};

const result = validateSodoku(test0);
console.log(result);

const result2 = validateSodoku(test);
console.log(result2);
