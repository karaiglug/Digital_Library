/**
 * main.js
 *
 * 
 */
jQuery(document).ready(function($) {
	$(".button-collapse").sideNav();
	$('.parallax').parallax();
	$('.slider').slider({full_width: true});
	$('.materialboxed').materialbox();
	$('.collapsible').collapsible();
	$('.tooltipped').tooltip();
	$('.modal-trigger').leanModal();
	$('ul.tabs').tabs();

	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: false,
      alignment: 'left', 
      gutter: 0, 
    });

    $('#portfolio-container').mixItUp();
	$('.wrap-categories-portfolio .categories-item a').click(function (e) {
		e.preventDefault();
	});
} );
