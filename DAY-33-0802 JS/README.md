######Front End Web Development School

JavaScript: 정식 이름 ECMAScript (European Computer _ Association)
방언: ActionScript (Flash), JavaScript, JScript (IE)
DOM
BOM

역사
넷스케이프: 비전문가도 사용할 수 있고, 자바와 비슷한 웹브라우저 전용 가벼운 언어를 원한다. 서버와 소통하는 데에 오래 걸리니까 요청하기 전에 브라우저에서 반응해줬으면 좋겠다.
Brendan Eich: Father of JavaScript (Know your fathers!)
개발 초기 이름은 Mocha. 모체는 C이지만 여러가지를 짬뽕했기 때문에 생긴것만 비슷함. 클래스가 아닌 프로토타입을 사용함.
넷스케이프에 탑재할 때는 LiveScript로 이름이 바뀌고 넷스케이프의 "엔터프라이즈 서버"에도 사용됨. 이때도 프론트 백 둘 다!
Sun Microsystems와 손을 잡고 JavaScript로 이름을 바꿈. 
IE3에 탑재하려고 하니 라이센스 문제 때문에 JScript라는 이름을 사용함.
JS was born earlier than CSS
ES3 2000: Current JS
ES4 2005: E4X. was too radical, ignoring the past users and creating a language for XHTML
ES5 2009 was published (10년만!)
ES6 2015
ES7 2016

예전엔 기능 경쟁이었는데 실시간 interpreter 언어다 보니 겁나 빠른 크롬의 V8 엔진 등장 이후로 속도 경쟁이 되었다.
Single Page Application 들이 compile 앱들만큼 빨라지게 되었다!


1. ECMAScript 코어
1. DOM 문서 객체 모델 - 문서 제어 (jQuery - 문법 쉬움)
1. BOM 브라우저 객체 모델 - 창을 제어
	History
	Navigator
	Location
	Screen
	**Document**: IE8 이하는 문제가 된다.
		window.outerHeight: 창의 바깥쪽 크기
		window.devicePixelRatio
	Frames (unimportant. iframe이랑 다른 놈임) 


JavaScript has more serious crossbrowsing problems. The scroll amount is calculated using the following:
	1. scrollX, scrollY
	1. pageXOffset, pageYOffset
	1. scrollTop, scrollLeft