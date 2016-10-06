// This is my JavaScript practice file

console.log('Can I have 2 js files linked up? I can!');

var n = 1000;

function reverseNumber(n) {
  n = n + '';
  return n.split('').reverse().join('');
}

var newNum = reverseNumber(32243);
console.log(reverseNumber(32243));

$('button').on('click', function () {
  if (newNum == 34223) {
    $('#greeting').append('<div id="affirmation"></div>');
  } else {
    $('#greeting').append('<div id="fail"></div>');
  }
});
