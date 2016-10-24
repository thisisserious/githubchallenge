console.log('app.js working');

$(function () {
  $('button').on('click', function () {
    console.log('Button clicked!');
    appendDom();
  });
});

function appendDom() {
  var $div = $('<div class="text"></div>');
  $div.append('<div class="text">Comparison is the thief of joy.</div>');
  $('section').append($div);
}
