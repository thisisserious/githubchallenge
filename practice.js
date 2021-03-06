// This is my JavaScript practice file
var test = 'practice.js working';
console.log('Test:', test);

// Reverse Number Challenge
var n = 1000;

function reverseNumber(n) {
  n = n + '';
  return n.split('').reverse().join('');
}

var newNum = reverseNumber(32243);
console.log('Reverse Number:', reverseNumber(32243));

$('button').on('click', function() {
  if (newNum == 34223) {
    $('#greeting').append('<div id="affirmation"></div>');
  } else {
    $('#greeting').append('<div id="fail"></div>');
  }
});

// End of Reverse Number Challenge

// FizzBuzz Challenge
// var num = 100;
// for (var i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0 && i % 3 !== 0) {
//     console.log('Buzz');
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else {
//     console.log(i);
//   }
// }

// End of FizzBuzz Challenge

// Get current day of the week & time
var date = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
'Saturday'];
var hour = date.getHours();
var mins = date.getMinutes();
var secs = date.getSeconds();
console.log('Today is: ' + days[date.getDay()] + '.\n' + 'The time is: ' +
hour + ':' + mins + ':' + secs);

// End of get current day of the week & time

// Calculate Age
function calculateAge(birthYear, currentYear) {
  var date = new Date();
  var currentYear = date.getFullYear();
  var birthYear = 1983;
  return 'I am ' + (currentYear - birthYear) + ' years old.';
}

console.log(calculateAge());

// End of Calculate Age

// Switch Practice
var today = date.getDay();

// console.log('today:', today);
var findDay = function() {
  switch (today) {
  case 0:
    today = days[0];
    break;
  case 1:
    today = days[1];
    break;
  case 2:
    today = days[2];
    break;
  case 3:
    today = days[3];
    break;
  case 4:
    today = days[4];
    break;
  case 5:
    today = days[5];
    break;
  case 6:
    today = days[6];
    break;
  default:
    today = 'boo';
    break;
}
};

findDay(today);
console.log('Today is ' + today + '!');

// End of Switch Practice

// Array, Function, and For Loop Practice

var array = [];
var index = 0;

function arrayPop() {
  for (var i = 0; i <= 5; i++) {
    array.push(i);
    index += i;
    console.log('Index:', index);
  };
}

arrayPop();
console.log('array', array);

// End of Array, Function, and For Loop Practice

// Random function practice

var concatenate = function() {
  var a = 'spooky';
  var b = 'scary';
  var c = 'skeletons';
  console.log(a + ' ' + b + ' ' + c + '!');
};

concatenate();

// End of random function practice

// Eloquent JavaScript Add 1-10 (Introduction)
var total = 0;
var count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log('Add 1-10:', total);
// --> 55

// End of Add 1-10 while loop

// Eloquent JavaScript function example (Introduction)
function fac(n) {
  if (n == 0) {
    return 1;
  } else {
    return fac(n - 1) * n;
  }
}

console.log(fac(8));
// --> 40320

// End of intro function example

// Eloquent JavaScript Chapter 1 examples
var exponent = 2.998e8;
console.log('Exponent:', exponent);

var precedence = 1 + 1 == 2 && 10 * 10 > 50;
console.log('Precedence:', precedence);
