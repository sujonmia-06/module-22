let greetings = 'Hello, world!';

let reverse = '';
function reversedSentence(text){
    for (let letter of text){
        reverse = letter + reverse;
    }
    return reverse;
}

let reversed = reversedSentence(greetings);
console.log(reversed);