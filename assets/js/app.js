$('nav div a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('header').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - 55
	}, 500);
});

$('section div div a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('header').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - 55
	}, 500);
});