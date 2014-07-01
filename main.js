$(document).on('ready', function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	var hours = new Date().getHours();
  
	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var snooze = $('<div class="snooze"></div>');
	var bottomAmLabel = $('<p class="bottom-am-label"> AM    60 70  90 110 140 170    KHz	</p>');
	var bottomFmLabel = $('<p class="bottom-fm-label"> FM    89 92 96  102 106 108    MHz	</p>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var clockText = $('<p class="clock-text">12:12</p>');
	var amPm = $('<p class="am-pm"><span class="inactive">AM</span> <br> PM</p>');

	$('.container').append(outerShell);
	(innerShell).appendTo(outerShell);
	(clockScreen).appendTo(innerShell);
	(amPm).appendTo(innerShell);
	(bottomAmLabel).appendTo(innerShell);
	(bottomFmLabel).appendTo(innerShell);
	(clockText).appendTo(innerShell);
	(snooze).appendTo(innerShell);
	(snooze.clone()).appendTo(innerShell);
	$(".clock-text").html((( hours < 10 ? "0" : "" ) + hours) + ":" + (( minutes < 10 ? "0" : "" ) + minutes));

	setInterval( function() {
		$(".clock-text").html((( hours < 10 ? "0" : "" ) + hours) + ":" + (( minutes < 10 ? "0" : "" ) + minutes));
	},1000);
	
});