let str="cat";
console.log(str.toUpperCase());


let a = 'a'
let b = 'b'
if (a < b) { // true
    console.log(a + ' is less than ' + b)
} else if (a > b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(a + ' and ' + b + ' are equal.')
}

const message = "    TASTE THE RAINBOW!  ";
const whisper=message.toLowerCase().trim()
console.log(whisper)




const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
const regex = /dog/gi;
console.log(p.replace(regex,"cat"));

const word = "skateboard";
newWord=word.slice(5).replace("o","e");
console.log(newWord)

/*console.log(`My lucky number is ${3+3}`)
for(let i=0; i<10;i++){
    console.log(Math.floor(Math.random()*10))
}*/


const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const roll=`you rolled a ${die1} and a ${die2}. They sum to ${die1+die2}`
console.log(roll)

