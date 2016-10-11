console.log('app.js working');

$(function () {
  $('button').on('click', function () {
    console.log('Button clicked!');
    appendDom();
  });
});

function appendDom() {
  var $div = $('<div class="text"></div>');
  $div.append('<h3>I am here</h3>');
  $('section').append($div);
}
