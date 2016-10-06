// This is my JavaScript practice file

console.log('Can I have 2 js files linked up? I can!');

var n = 1000;

function reverseNumber(n) {
  n = n + '';
  return n.split('').reverse().join('');
}

console.log(reverseNumber(32243));
