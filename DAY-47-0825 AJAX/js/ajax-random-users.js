(function(global, XHR) {
	'use strict';
	var xhr = new XHR;
	document.body.addEventListener('click', updateView);

	function updateView() {
		xhr.open('GET', 'http://api.randomuser.me/?results=20&gender=female&nat=gb,br');
		xhr.send();
	}

	xhr.onreadystatechange = function() {
		if (this.status === 200 && this.readyState === 4) {
			var doc = JSON.parse(this.response);
			console.log(doc);
			console.log(JSON.stringify(doc));
		}
	};
})(this, this.XMLHttpRequest || ActiveXObject(Microsoft.XMLHTTP));

	// template = 
	// '<table>' + 
	// 	'<thead>' + 
	// 		'<tr>' + 
	// 			'<th>' + Index + '</th>' + 
	// 			'<td>' + Name + '</td>' + 
	// 			'<td>' + Age + '</td>' + 
	// 			'<td>' + Gender + '</td>' + 
	// 		'</tr>' + 
	// 	'</thead>' + 
	// 	'<tbody>' + 
	// 		'<tr>' + 
	// 			'<th>' + index + '</th>' + 
	// 			'<td>' + name + '</td>' + 
	// 			'<td>' + age + '</td>' + 
	// 			'<td>' + gender + '</td>' + 
	// 		'</tr>' + 
	// 	'</tbody>' + 
	// '</table>';
	// 
	// 

