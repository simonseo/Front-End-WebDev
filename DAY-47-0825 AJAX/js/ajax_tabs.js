(function(global, XHR) {
	'use strict';
	var createXHR = (function(){
		XHR = XHR || ActiveXObject('Microsoft.XMLHTTP');
		return function() {
			return new XHR();
		};
	})();


//Simon's version
	// var $page_content = $('.page-content');
	// var $article_buttons = $('.article-list li[data-index]');
	// var xhr = createXHR();
	// xhr.onreadystatechange = function(){
	// 	if (this.readyState === 4 && this.status === 200) {
	// 		$page_content.html('[' + xhr.statusText + ']' + xhr.response);
	// 	}
	// 	else {
	// 		$page_content.html('전송실패');
	// 	}
	// }
	// 
	// $article_buttons.each(function(idx, element) {
	// 	element.onclick = (function(){
	// 		return function() {
	// 			xhr.open('GET', 'data/data_' + element.getAttribute('data-index') + '.html');
	// 			xhr.send();
	// 		};
	// 	})();
	// });


// yamoo9's version
	var page_content = document.querySelector('.page-content');
	var nav_list = document.querySelectorAll('aside a');
	for (var i = nav_list.length - 1; nav_list[i]; i--) {
		nav_list[i].onclick = viewUpdate(nav_list[i], i);
	}

	var xhr = createXHR();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			page_content.innerHTML = ('[' + xhr.statusText + ']' + xhr.response);
		}
	}


	function viewUpdate(self, idx) {
		var view_url = self.getAttribute('href');
		return function() {
			xhr.open('GET', view_url);
			xhr.send();
			//어떤 페이지에 와있는지 알 수 있도록 주소창도 바꿔줌
			// 페이지의 주소(해쉬) 값을 변경
			global.location.hash = view_url;
			 // 웹 브라우저가 수행하는 브라우저의 기본 동작 차단
			return false;
		};
	}


})(this, this.XMLHttpRequest);