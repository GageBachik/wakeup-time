$(document).on('ready', function() {
  
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var clockScreen = $('<div class="clock-screen"></div>');

	$('.container').append(outerShell);
	(innerShell).appendTo(outerShell);
	(clockScreen).appendTo(innerShell);
});