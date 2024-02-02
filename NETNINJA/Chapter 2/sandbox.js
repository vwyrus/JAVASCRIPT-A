// for loops

// for (let i = 0; i < 5; i++) {
//   console.log('in loop:', i);
// }

// console.log('loop finished')

const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i]);

//   let html = `<div>${names[i]}</div>`;
//   console.log(html)
// }

// while loop

// let i = 0;
// while (i < 5) {
//   console.log(`in loop: `, i);
//   i++;
// }
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }
// let i = 2;

// do {
//   console.log('val of i is:', i)
//   i++;
// }
// while (i < 5)

//if statements

const age = 20;

// if(age > 20){
//   console.log('you are over 20 years old');
// }
// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi',];

const password = '@8dshs';

if (password.length >= 12 && password.includes('@')) {
  console.log('that password is might strong')
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
  console.log('that password is long enough')
} else {
  console.log('password is not long enough')
}