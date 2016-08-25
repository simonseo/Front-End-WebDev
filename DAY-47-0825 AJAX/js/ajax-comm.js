(function(global, XHR) {
	'use strict';
	console.log(XHR);
	//create
	var createXHR = (function() {
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP'); //if XHR exists, assign that, otherwise, assign ActiveX.
		return function(){                               //set createXHR once.
			return new XHR();                            //어라 괄호가 필요없어?
		}
	})();
	var xhr = createXHR();

	//open - defines what kind of data to send over what protocol
	//'http method, ignored if url != http', url, async
	// xhr.open('GET', 'data/data.txt', false); //GET POST, HTML XML TEXT JSON, true false(비동기 여부, deprecated)
	// xhr.open('GET', 'data/data.txt');     //비동기 통신 
	xhr.open('GET', 'data/data.html'); 

	//Send
	// xhr.send();                              //sends the request
	                                         //in synchronous, waits until data is loaded. 지금의 경우
	                                         //we wait until we receive data, so the expression in if statement evalutates to true.
	                                         // in aysnchronous, the next line is interpreted right away.
	                                         // the code below runs without waiting, so it evaluates to false. (didn't wait)
	// the code below is a code to update the view page with data from the server.
	// if ( xhr.status === 200 ) {
	// 	console.log('통신 데이턴 전송 성공');
	// 	console.log(xhr.response);
	// 	document.querySelector('.ajax-result').textContent = xhr.response;
	// }
	// else {
	// 	console.log('통신 데ㅣ터 전송 실패')
	// }

	xhr.onreadystatechange = function() {
		if ( xhr.status === 200 && xhr.readyState === 4) {
			console.log('통신 데이턴 전송 성공');
			console.log(xhr.response);
			document.querySelector('.ajax-result').innerHTML += '[' + this.statusText + ']' + xhr.response;
		}
		else {
			console.log('통신 데ㅣ터 전송 실패')
		}
	};

	function updateView() {
		xhr.send();
	}

	document.getElementsByClassName('call-ajax-data')[0].onclick = updateView;
	global.xhr = xhr;
})(this, this.XMLHttpRequest);


