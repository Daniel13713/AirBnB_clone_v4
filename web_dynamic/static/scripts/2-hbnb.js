
const dictionary = {};

$(document).ready(function () {
  $('input[type=checkbox]').change(function () {
    if ($(this).is(':checked')) {
      const name = $(this).attr('data-name');
      const id = $(this).attr('data-id');
      dictionary[id] = name;
    } else {
      const id = $(this).attr('data-id');
      const name = $(this).attr('data-name');
      delete dictionary[id];
    }
    var text = '';
    for (const id in dictionary) {
      var text = text.concat(dictionary[id], ', ');
    }
    console.log(text);
    if (!text) {
      $('.amenities h4').replaceWith('<h4>&nbsp;</h4>');
    } else if (text.length >= 25) {
      $('.amenities h4').text(text.substring(0, 25) + '...');
    } else {
      $('.amenities h4').text(text);
    }
  });
});
