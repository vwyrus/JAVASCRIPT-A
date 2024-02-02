// for loops

for (let i = 0; i < 5; i++) {
  console.log('in loop:', i);
}

console.log('loop finished')

const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);

  let html = `<div>${names[i]}</div>`;
  console.log(html)
}

// while loop

let i = 0;
while (i < 5) {
  console.log(`in loop: `, i);
  i++;
}
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
let i = 2;

do {
  console.log('val of i is:', i)
  i++;
}
while (i < 5)

//if statements

const age = 20;

if (age > 20) {
  console.log('you are over 20 years old');
}
const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi',];

const password = '@8dshs';

if (password.length >= 12 && password.includes('@')) {
  console.log('that password is might strong')
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
  console.log('that password is long enough')
} else {
  console.log('password is not long enough')
}

// logical NOT(!)

// let user = false

//BREAK AND CONTINUE

const scores = [50, 25, 0, 30, 100, 20, 10];

for (i = 0; i < scores.length; i++) {

  if (scores[i] === 0) {
    continue;
  }
  console.log('your score:', scores[i]);

  if (scores[i] === 100) {
    console.log('congrats, you got the top scorer');
    break;
  }
}

// switch statements 
const grade = 'A';

switch (grade) {
  case 'A':
    console.log('you got an A!');
    break;
  case 'B':
    console.log('you got an B!');
    break;
  case 'C':
    console.log('you got an C!');
    break;
  case 'D':
    console.log('you got an D!');
    break;
  case 'E':
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
}

// varibles & block scope
let age = 30;

if (true) {
  let age = 40;
  console.log('inside 1st code block', age);
}

console.log('outside code block', age);