function toCamelCase(str) {

    // La expresion regular   - || _  lo separa con split y se quita la expresion regular
    if (!str) {
        return '';
    } else {
        let word = str.replace(/-|_/g, ' ').split(' ');

        for (let i = 0; i < word.length; i++) {
            let solution = [word[0]];
            solution.push(word[i].substring(0, 1).toUpperCase() + word[i].substring(1).toLowerCase())
            
        }

    }

    return solution.join('');
}



toCamelCase('the-stealth-warrior');
console.log(toCamelCase('the-stealth-warrior'))
// console.log(toCamelCase('The-Stealth_Warrior'));


// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"


// for (let i = 1; i < word.length; i++) {
//     solution.push(word[i].substring(0, 1).toUpperCase() + word[i].substring(1).toLowerCase());
//     // console.log(word)
// }