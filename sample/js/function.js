$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.navbar-header').css({
    'transform' : 'translate(0px, '+ wScroll /20 +'%)'
  	});

	$('.back-bird').css({
		'transform' : 'translate(0px, ' + wScroll /4 +'%)'
	});

	$('.fore-bird').css({
		'transform' : 'translate(0px, -' + wScroll /20 +'%)'
	});

});
$(document).ready(function(){
	$('.row div').each(function(i){
	setTimeout(function(){
		$('.row div').eq(i).addClass('is-showing');
		}, 300 * (i+1));
	});
});