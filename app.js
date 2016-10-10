console.log('app.js working');

$(function () {
  $('button').on('click', function () {
    console.log('Button clicked!');
    var $div = ('<div></div>');
    $div.append('<p>I am</p>');
    console.log($div);
  });
});
