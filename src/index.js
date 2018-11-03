import $ from 'jquery';
import 'bootstrap';
import './index.scss';

$('#button').on('click', () => {
  $('#important-text').append('<p>Hello World!</p>');
});
