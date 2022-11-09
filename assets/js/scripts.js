WebFont.load({
	google: {
		families: [
			'Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic',
			'Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic',
			'Josefin Sans:100,200,300,regular,500,600,700',
			'Inter:regular',
		],
	},
});

!(function (o, c) {
	var n = c.documentElement,
		t = ' w-mod-';
	(n.className += t + 'js'),
		('ontouchstart' in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
			(n.className += t + 'touch');
})(window, document);

//
// Countdown Timer Script
//

var timer;

// CURRENT DATE AND TIME
var now = new Date();

/* OFFSET FOR Greenwich Mean Time from UTC:
 * For each offset, you add 1 hour (60 minutes)
 * For example:
 * GMT +00:00 would just be + 0 (or nothing at all)
 * EST -05:00 would be 0 - 60 - 60 - 60 - 60 = -240 (5 hours behind)
 * NST -03:30 would be 0 - 60 - 60 - 30 = -150 (3 hours and 30 minutes behind)
 */
var offset = now.getTimezoneOffset() - 150;

/* SET DATE TO SPECIFIC DAY IN THE FUTURE
 * MONTHS go from 0 to 11: January is 0, February is 1, and so on
 */
var then = new Date(2023, 01, 17, 18, 00, 0, 0);

// COUNT DOWN TO 3 DAYS IN THE FUTURE (259,200,000 = 1000 * 60 * 60 * 24 * 3)
// var then = now.getTime() + 259200000;
var compareDate = new Date(then) - now.getDate() - offset * 60 * 1000;
timer = setInterval(function () {
	timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
	var dateEntered = new Date(toDate);
	var now = new Date();
	var difference = dateEntered.getTime() - now.getTime();

	if (difference <= 0) {
		$('#days').text('0');
		$('#hours').text('0');
		$('#minutes').text('0');
		$('#seconds').text('0');
	} else {
		var seconds = Math.floor(difference / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		var days = Math.floor(hours / 24);

		hours %= 24;
		minutes %= 60;
		seconds %= 60;

		$('#days').text(days);
		$('#hours').text(hours);
		$('#minutes').text(minutes);
		$('#seconds').text(seconds);
	}
}
