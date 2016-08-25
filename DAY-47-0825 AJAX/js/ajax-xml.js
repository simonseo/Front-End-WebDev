(function(global, XHR) {
	'use strict';
		var xhr = new XHR;

	xhr.onreadystatechange = function() {
		if ( xhr.status === 200 && xhr.readyState === 4) {
			var doc = this.responseXML;
			var people = doc.querySelector('people');
			var person_list = people.querySelectorAll('person');
			var template = '<ul>';
			for (var name, tel, email, l = person_list.length - 1; l >= 0; l--) {
				name  = '<span>' + person_list[l].querySelector('name').firstChild.nodeValue + '</span>';
				tel   = '<span>' + person_list[l].querySelector('tel').firstChild.nodeValue + '</span>';
				email = '<span>' + person_list[l].querySelector('email').firstChild.nodeValue + '</span>';
				template += '<li>' + name + tel + email + '</li>';
			}
			template += '</ul>';
			document.getElementsByClassName('ajax-result')[0].innerHTML = template;
		}
		else {
			console.log('통신 데ㅣ터 전송 실패', xhr.status, xhr.readyState);
		}
	};

	function updateView() {
		xhr.open('GET', 'data/data.xml'); 
		xhr.send();
	}

	document.getElementsByClassName('call-ajax-data')[0].onclick = updateView;
	global.xhr = xhr;
})(this, this.XMLHttpRequest || ActiveXObject('Microsoft.XMLHTTP'));


