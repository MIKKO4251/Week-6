// string methods
const sentence = `the quick brown fox jumped over the lazy dog`

// length of a String
document.write(sentence.length)

// convert to uppercase
document.write(sentence.toUpperCase())

// convert to lowercase
document.write(sentence.toLowerCase())

// cut some part of string
console.log(sentence.slice(0,10))

// finding index of fox
console.log(sentence.indexOf(fox))

// finding index of foxes
console.log(sentence.indexOf(`foxes`))

// replace particular 
console.log(sentence.replace(`dog`,`goat`))

// replace all o letter with 0
console.log(sentence.replaceAll(`o`,`0`))

// check if jump exists
console.log(sentence.includes(`jump`))

// check if sentence starts with 'the'
console.log(sentence.startsWith('the'))

// check if sentence starts with 'The'
console.log(sentence.startsWith('The'))

// add strings together
confirm.log('Alphabets: '.concat(sentence))

// find where a string ends
console.log(sentence.charAt(16))

// convert a string to Array
console.log(sentence.split(' '))

// repeat a particular String
console.log('sentence'.repeat(2))

const num = 80
console.log(typeof num,toString())

consol.log(string(num))