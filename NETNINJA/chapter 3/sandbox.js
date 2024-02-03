//function declaration 
// function greet() {
//   console.log('hello there');
// }

// function expression
// const speak = function () {
//   console.log('good day!');
// };
// greet();
// greet();
// greet();

// speak();

//arguments & parmeters
// const speak = function (name = 'luigi', time = 'night') {
//   console.log(`good ${time} ${name}`);
// };

// speak('maro', 'day');

//returning values regular function 
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };


//arrow function 
const calcArea = radius => 3.14 * radius ** 2;


const area = calcArea(5);
console.log('The area is', area);

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
}

console.log(bill([10, 15, 30], 0.2))


//callback function 
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;
people.forEach(person => {
  // create html template
  html += `<li style="color: purple">${person}</li>`
});

console.log(html);
ul.innerHTML = html;