let person = {
    'First-name': 'paul',
    'age': 3,
    'height': '5ft 9in',
    'complexion': 'fair'
}
console.log(person);


let oddNumbers = [3, 7, 9]

console.log(oddNumbers[1]);


let x = 10
let y = 4

console.log(x == y);

const compare = x > 2 && 2 < y
console.log(compare);


//Logical Operators
const number = true
console.log(number);

console.log(` i love to go skatting! `);

let colour = 'red' === 'blue'? "not correct" : 'correct'

console.log(colour);

let grade = 70 !== 69? 'you pass' : 'you fail!'

console.log(grade);

console.log(true - '2');


//implicit and explicit conversion
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(100));
console.log(Boolean('kite'));
console.log(Boolean(3.16));
console.log(Boolean(10 / 2));
console.log(Number('3.14'));
console.log((3).toString());
console.log(('kite').toUpperCase());

 const number = 12
//conditional statements
if(number >= 10) {
    console.log('correct');
} else if(number === 7) {
    console.log('try again');
} else {
    console.log('out!')
}

const colour = 10

switch (colour) {
  case "red":
    console.log("colour is correct");
    break;
  case "green":
    console.log("colour is incorrect");
    break;
  default:
    console.log("input correct colour");
}

let humanPositions = ''

switch (humanPositions) {
  case "sit":
    console.log("yes");
    break;
  case "stand":
    console.log("no");
    break;
  default:
    console.log("indecent");
}


//Loops
for(let y = 1; y <= 6; y++) {
    console.log(`i love you ${y}`);
}

let i = 1
while(i <= 7) {
    console.log(`i love pizza ${i}`)
    i++
}

i = 1
do {
    console.log(`give me bread ${i}`);
    i++
} while (i <= 5)

const numArray = [1, 2, 3, 4, 5]

for (const num of numArray) {
    console.log(`give ${num}`)
}

const colorPallete = ['blue', 'red', 'green']
for (const color of colorPallete) {
    console.log(`yam ${color}`)
}

const color = "blue";
switch (color) {
  case "red":
    console.log("true");
    break;
  default:
    console.log("not correct");
}



//Functions
function love(username) {
    console.log(`i love you ${username}`)
}

love('chi')
love('obi')
love('iyke')

function add(x, y, d) {
    return x + y + d

}
const sum = add(3,2,4)
console.log(sum);

const add = (x, b) => x + b

const sum = add(50, 4)
console.log(sum);

const addFive = (num) => num + 5
const sum = addFive(10)
console.log(sum);

//Block Scope: Variables(let and const) declared inside a pair of curly braces cannot be accessed outside the block
// The console.log can only work inside the condition

const myNum = 100   //global scope variable
const myName = 'paul'  //myName = 'paulis a global variable and will not override myName = 'chidera' which is a block variable

if(true) {
    const myName = 'chidera'
    console.log(myName);
    console.log(myNum);
}
//Function Scope; variables declared inside a function cannot be accessed outside the function

function colour() {
    let colour = "red"
    console.log(colour);
    console.log(myNum);
}
colour()


//Global Scope: This is the scope outside any block or function i.e the variable is outside the block or function. A global scope variable is accessible
//both inside a function or a block
//note that a globally declared variable will not override block or function variable.
