(function(global, storage, $) {
	'use strict';
	var $html = $('html');

	if (storage) {
		$html.addClass('localStorage');
	}
	else {
		$html.addClass('no-localStorage');
		console.info('Please update to a browser with localStorage feature');
		return;
	}
	// storage.setItem('FDS', '프디스88');
	// global.FDS = storage.getItem('FDS');
	// FDS ? console.log('FDS 값: ', FDS) : storage.setItem('FDS', 'Front End Web Development School');

	// storage.removeItem('FDS');

	var sujin = {
		'name'      : '수진',
		'job'       : '디벨로퍼',
		'age'       : '23',
		'gender'    : '여성',
		'email'     : 'sujin@gmail.com',
		'favorites' : ['자동차', '여행', '공부']
	};

	storage.setItem('sujinisi', JSON.stringify(sujin)); //cannot save an object to the storage. Only strings. So convert to string.
	console.log('sujinisi: ', JSON.parse(storage.getItem('sujinisi'))); //Without stringifying, it will save "[object Object]"
	console.log('sujinisi: ', (storage.getItem('sujinisi')));

	// var num = 23123;
	// storage.setItem('number', num);
	// console.log('num: ', storage.getItem('number')); //this will log "[object Object]"



})(this, this.localStorage, this.jQuery);