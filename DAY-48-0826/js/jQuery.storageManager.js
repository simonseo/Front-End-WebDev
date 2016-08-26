(function(global, $) {
	'use strict';


	$.storageManager = {
		'get': (function() {
			var localstorage = global.localStorage, json = global.JSON;
			
			return function(key) {
				if (key) {
					//given a key by user
					if ($.type(key) === 'string') {
						//if proper key, return the value. If it's a JSON data, return as an object.
						var value = localstorage.getItem(key);
						return value == 'undefined' ? undefined : json.parse(value);
						// return value;
					} else {
						throw new Error('Please input a string value as key.');
					}
				} else {
					//not given a key, return everything
					return localstorage;
				}
			}
		})(),

		'set': (function() {
			var localstorage = global.localStorage, json = global.JSON;
			return function(key, value) {
				localstorage.setItem(key, json.stringify(value));
			}
		})(),

		'delete': (function() {
			var localstorage = global.localStorage, json = global.JSON;
			return function(key, value) {
				localstorage.setItem(key, json.stringify(value));
			}
		})(),

		'has': (function() {
			var localstorage = global.localStorage, json = global.JSON;
			return function(key, value) {
				localstorage.setItem(key, json.stringify(value));
			}
		})(),

		'supports': (function() {
			return function(feature) {
				var feature_map = {
					'json': !!global.JSON,
					'localstorage': !!global.localStorage
				};
				if (!feature) {
					return feature_map;
				} else {
					return feature_map[feature.toLowerCase()];
				}
			}
		})()
	};
})(this, this.jQuery);
