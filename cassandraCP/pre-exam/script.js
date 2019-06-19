// ************* Brackets ******************
function brackets(param) {
    let letter = '';
    const newParam = [];
    let i = 0;
    for (let bracket of param) {

        if (letter == '<' && bracket == '>') {
            newParam.pop()
            i--
        } else {

            newParam[i] = bracket
            i++;

            letter = bracket
        }
    }
    //console.log ( newParam)
    if (newParam[0] != '') {
        return true;
    } else {
        return false;
    }
}
let result = brackets('<><><><><><>');
console.log('result "BRACKETS" ', result)
console.log(brackets('<><><><><><>'))
//<<<<

// ************* Frog ******************



console.log(game(['Frog', '.', '.', '.', '.']))
