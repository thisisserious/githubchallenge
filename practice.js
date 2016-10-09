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

$('button').on('click', function () {
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
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var hour = date.getHours();
var mins = date.getMinutes();
var secs = date.getSeconds();
console.log('Today is: ' + days[date.getDay()] + '.\n' + 'The time is: ' + hour
+ ':' + mins + ':' + secs);

// End of get current day of the week & time
