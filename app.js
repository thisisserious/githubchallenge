console.log('Up & running!');

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

$(function () {
  $('button').on('click', function () {
    console.log('Button clicked!');
  });
});
