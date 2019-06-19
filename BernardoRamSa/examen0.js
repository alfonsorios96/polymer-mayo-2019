const example1 = (arr, i) => {
    let aux = arr[i];

    console.log(arr+"::"+i);

    if(arr.length === 1 || arr.length === 2){
        return false;
    }
    if(arr.length < 1){
        return true;
    }

    if(aux != arr[i+1]){
        arr.splice(0,2);
        i = 0;
        return example1(arr, i);
    }
    else{
        i = i+1;
        return example1(arr, i);
    }

}
let i = 0;
const str = '<<><><><>>';
const myArray = str.split('');
const resultado = example1(myArray, i);