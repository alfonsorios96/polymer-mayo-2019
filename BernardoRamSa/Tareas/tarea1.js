//1. Utiliza reduce para quitar elementos repetidos de un arreglo de arreglos(matriz)
const arreglo1 = [
    [3,2],
    [2,3],
    [3,4]
];
const arreglo2 = [];

arreglo1.reduce( (accumulator, current) => {
    if(accumulator !== undefined){
        arreglo2.push(accumulator[0]);
        arreglo2.push(accumulator[1]);
        console.log(current[0]);
        console.log(current[1]);
    }
    current.reduce((acc, cur) => {  
        if(arreglo2.indexOf(acc) === -1){
            arreglo2.push(acc);
        }
        if(arreglo2.indexOf(cur) === -1){
            arreglo2.push(cur);
        }

    });
});

console.log(arreglo2);

//........................segunda opcion con filter..............................................

const numeros = [1, 2, 3, 3, 4, 2, 5];

let reduce = numeros.filter((v,i) => numeros.indexOf(v) === i);

console.log(reduce);

//.........................tercera opcion con reduce y filter...................................

const arreglo1 = [
    [3,2],
    [2,3],
    [3,4]
];

const arreglo2 = [];

arreglo1.reduce( (accumulator, current) => {
    if(accumulator !== undefined){
        arreglo2.push(accumulator[0]);
        arreglo2.push(accumulator[1]);
    }
    current.reduce((acc, cur) => {
        arreglo2.push(acc);
        arreglo2.push(cur);
    });
});

console.log(arreglo2);

let reduce = arreglo2.filter((acc,cur) => arreglo2.indexOf(acc) === cur);

console.log(reduce);


//2. Utilizar map para cambiar la siguiente estructura de datos:...................................
/**  SALIDA ESPERADA:
[{
      fullName: String,
      age: Number,
      picture: 'URL_image'
  }]
**/

const objeto1 = [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "rolf",
        "last": "hegdal"
      },
      "location": {
        "street": "ljan terrasse 346",
        "city": "vear",
        "state": "rogaland",
        "postcode": "3095",
        "coordinates": {
          "latitude": "54.8646",
          "longitude": "-97.3136"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "rolf.hegdal@example.com",
      "login": {
        "uuid": "c4168eac-84b8-46ea-b735-c9da9bfb97fd",
        "username": "bluefrog786",
        "password": "ingrid",
        "salt": "GtRFz4NE",
        "md5": "5c581c5748fc8c35bd7f16eac9efbb55",
        "sha1": "c3feb8887abed9ec1561b9aa2c9f58de21d1d3d9",
        "sha256": "684c478a98b43f1ef1703b35b8bbf61b27dbc93d52acd515e141e97e04447712"
      },
      "dob": {
        "date": "1975-11-12T06:34:44Z",
        "age": 42
      },
      "registered": {
        "date": "2015-11-04T22:09:36Z",
        "age": 2
      },
      "phone": "66976498",
      "cell": "40652479",
      "id": {
        "name": "FN",
        "value": "12117533881"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/65.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/65.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/65.jpg"
      },
      "nat": "NO"
    }
  ];

const objeto2 = objeto1.map(object1 => {
    object2 = {};

    const fullName  = [object1.name.title, 
                       object1.name.first, 
                       object1.name.last].join(" ");

    const age       = object1.dob.age;

    const picture   = object1.picture.large;

    object2 = {
        fullName    :fullName,
        age         :age,
        picture     :picture
    };

    return object2;

});

console.log(objeto2);


//........RETO:Quitar datos repetidos utilizando SpreadOperator JS, y el tipo de dato Set.......................
let numeros = [1, 2, 3, 3, 4, 2, 5];
let miSet = new Set(numeros);
numeros = [...miSet];

console.log(numeros);

//.......RETO 2: Convertir un array a un object..........................................
var array = [
    [1, 'a'],
    [2, 'b'],
    [3, 'c']
];
const newObject = array.reduce((accumulator, currentValue) => {
    accumulator[currentValue[0]] = currentValue[1]
    return accumulator
}, {});
console.log(newObject);

//..........................N..................................

const args = [['1','valor1'],['2','valor2']];

const elem = args.map(([key, value]) => { //destructurar el elemento['', '']
    return {llave: key, valor: value};
});










