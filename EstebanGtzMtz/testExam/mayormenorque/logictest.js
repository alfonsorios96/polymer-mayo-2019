let testString = '<><><><<<>';

let drop = /<>/g;

result = testString.replace(drop, '');

if (!result.lenght > 0) {
    console.log('false');
} else {
    console.log('true');;
}
console.log(result);