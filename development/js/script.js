// scripts.js

//waiting for DOM objects.
$(function(){
	console.log('js file is started and DOMs objects is loaded.');
//end waiting

//change color with css metod
  var paragraphs = $('p').css('color','green');
  $('body').css('background-color', 'black');

  var jqFirstParagraph = paragraphs.eq(0);
  console.log(rawFirstParagraph); //pick first elem. from array with jquery function eq.
  var rawSecParagraph = paragraphs[1];

  var rawFirstParagraph = paragraphs[0]; //pick this same elem. with javascript withour jquery wrapper.

  console.log(jqFirstParagraph);
  jqFirstParagraph.css('color', 'white');
//create new elements with jQuery.

  var header2 = $('<h2>The greatest header in the world.</h2>'),
      header3 = $('<h3 class="classy-header">The classiest header in Your browser!</h3>'),
      header4 = $('<h4>Fourth header.</h4>');

  header4.css('color', 'yellow');

  console.log(header2);
  console.log(header3);
  console.log(header4);

  $('body').append(header2);
  $('body').append(header3);
  $('body').append(header4);

//iteration of DOM elements with .each




});
