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

// CURRENT DATE AND TIME
const now = new Date();

/* OFFSET FOR Greenwich Mean Time from UTC:
 * For each offset, you add 1 hour (60 minutes)
 * For example:
 * GMT +00:00 would just be + 0 (or nothing at all)
 * EST -05:00 would be 0 - 60 - 60 - 60 - 60 = -240 (5 hours behind)
 * NST -03:30 would be 0 - 60 - 60 - 30 = -150 (3 hours and 30 minutes behind)
 */
const offset = now.getTimezoneOffset() - 150;

/* SET DATE TO SPECIFIC DAY IN THE FUTURE
 * MONTHS go from 0 to 11: January is 0, February is 1, and so on
 */
const then = new Date(2023, 02, 31, 18, 00, 0, 0);

// COUNT DOWN TO 3 DAYS IN THE FUTURE (259,200,000 = 1000 * 60 * 60 * 24 * 3)
// var then = now.getTime() + 259200000;
const compareDate = new Date(then) - now.getDate() - offset * 60 * 1000;
timer = setInterval(() => {
	timeBetweenDates(compareDate);
}, 1000);

const timeBetweenDates = (toDate) => {
	const dateEntered = new Date(toDate);
	const now = new Date();
	const difference = dateEntered.getTime() - now.getTime();

	if (difference <= 0) {
		$('.countdown-row').hide();
	} else {
		let seconds = Math.floor(difference / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);

		hours %= 24;
		minutes %= 60;
		seconds %= 60;

		$('#days').text(days);
		$('#hours').text(hours);
		$('#minutes').text(minutes);
		$('#seconds').text(seconds);
	}
}
