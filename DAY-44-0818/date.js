(function(global) {
	'use strict';
	function isWorkday(day) {
		// var dayOfWeek = !day ? (new Date()).getDay() : day;
		var dayOfWeek = day || (new Date()).getDay();
		console.log('day of week', dayOfWeek);
		var emotion = 0 < dayOfWeek && dayOfWeek < 6 ? "아 출근이여..." : "았사! 주말이다. 놀자!";
		console.log(emotion);
	}
	global.isWorkday = isWorkday;
})(this);

(function(global) {
	'use strict';
	function isWorkday(day) {
		switch(day) {
			case 0:
			case 6:
				console.log('주말이다');
				break;
			case 1:
			case 1:
			case 1:
		}
	}
})(this);