let numbers = [9,8,3,4,6,5,3,2,7,5,6,2,3,7,8,9,3,6,5,2,8,6,4,6,5,01,73,48,73,81,34,36,59,83,20,60,13,65,0];

function removeDuplicate(numbers){
    const unique = [];
    for (const element of numbers){
        if (unique.indexOf(element) == -1){
         unique.push(element);
        }
    }
    return unique;
}
let uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);