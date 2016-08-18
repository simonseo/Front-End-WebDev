function convertArrayWrapper() {
	var closurefn;
	if (Array.from) {
		closurefn = function(data) {
			return Array.from(data);
		};
	}
	else {
		closurefn = function(data) {
			return Array.prototype.slice.call(data);
		};
	}
	return closurefn;
}


var convertArray = convertArrayWrapper();




var convertArray = (function() {
	var closurefn;
	if (Array.from) {
		closurefn = function(data) {
			return Array.from(data);
		};
	}
	else {
		closurefn = function(data) {
			return Array.prototype.slice.call(data);
		};
	}
	return closurefn;
}());