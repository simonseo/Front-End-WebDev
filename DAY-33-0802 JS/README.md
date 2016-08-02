######Front End Web Development School

#TIL - JavaScript
##Introduction
정식 이름 **ECMAScript** (European Computer _ Association)

- 방언: **ActionScript** (Flash), **JavaScript**, **JScript** (IE)

###JavaScript Structure
1. ECMAScript 코어
1. DOM 문서 객체 모델 - 문서 제어 (jQuery - used because 문법 쉬움)
1. BOM 브라우저 객체 모델 - 창을 제어
	1. History - AKA 뒤로가기
	1. Navigator - user agent info
	1. Location - AKA 주소창
	1. Screen - AKA 컴퓨터 화면
	1. **Document**: the root of the DOM model. IE8 이하는 문제가 된다.
	1. Frames (unimportant. iframe이랑 다른 놈임) 

###History of JavaScript
1. 넷스케이프: 비전문가도 사용할 수 있고, 자바와 비슷한 웹브라우저 전용 가벼운 언어를 원한다. 서버와 소통하는 데에 오래 걸리니까 요청하기 전에 브라우저에서 반응해줬으면 좋겠다.
1. Brendan Eich: Father of JavaScript (Know your fathers!)
1. 개발 초기 이름은 Mocha. 모체는 C이지만 여러가지를 짬뽕했기 때문에 생긴것만 비슷함. 클래스가 아닌 프로토타입을 사용함.
1. 넷스케이프에 탑재할 때는 LiveScript로 이름이 바뀌고 넷스케이프의 "엔터프라이즈 서버"에도 사용됨. 이때도 프론트 백 둘 다!
1. Sun Microsystems와 손을 잡고 JavaScript로 이름을 바꿈. 

####Simple Timeline
1. ES3 2000: Current JS
1. ES4 2005: E4X. was too radical, ignoring the past users and creating a language for XHTML
1. ES5 2009 was published (10년만!)
1. ES6 2015
1. ES7 2016

######Fact!
- IE3에 탑재하려고 하니 라이센스 문제 때문에 JScript라는 이름을 사용함.
- JS was born earlier than CSS
- 예전엔 기능 경쟁이었는데 실시간 interpreter 언어다 보니 겁나 빠른 크롬의 V8 엔진 등장 이후로 속도 경쟁이 되었다.
- Single Page Application 들이 compile 앱들만큼 빨라지게 되었다!


##BOM
브라우저 구성환경. Unlike DOM, there are no strict definitions or standards. Vendors are free to implemenet these in any way they want. BOM is not actually part of JS. It's just an API or 사용설명서. 현재로서는 DOM에 비해서는 BOM은 별로 안 중요하다.

###BOM Object: Window
####Window properties
```javascript
window.outerHeight 					//창의 바깥쪽 크기
window.devicePixelRatio
window.scrollX 						//The scroll amount is calculated using the following properties of the window object. 
									//It is not standardized and so JavaScript has more serious crossbrowsing problems.
									//  vertical: scrollX, pageXOffset, scrollLeft
									//  horizontal: scrollY, pageYOffset, srollTop,

```
######some facts
- if you set the variable name as a reserved name like scrollY, you can get errors.
- if you put the js file in the front, it cannot calculate the scroll values. You need to put it at the end or add an eventListener..
- you can use window.scrollTop as a condition. It is a simplified version of `!!window.scrollTop` (typecasting to boolean) which is `typeof window.scrollTop == 'undefined'`
- js is a dot `.` grammar language.

####`window` object methods
```javascript
window.alert('string');					//pops up a dialogue box
window.confirm('string');				//pops up a dialogue box with options to say yes or no. Returns a boolean value. 잘 안씀.
window.prompt('string', 'placeholder');	//asks for a string. returns the input string. 잘 안씀.
window.open('url'); 					//popup window. (now it's a popup tab) 이제는 차단된다.

window.resizeTo(width, height);			//resize window. chrome doesn't support this anymore.
window.resizeBy(width, height); 
window.moveTo(xpos, ypos); 				//move window. 예전에는 screen 밖으로 나갈 수 있었는데 이제 안됨. Chrome X.
window.moveBy(xpos, ypos);
window.scrollTo(xoffset, yoffset);		//self explanatory. Chrome O.
window.scrollBy(xoffset, yoffset);
```


####Window - events
```javascript
function() {}
window.setInterval(function, millisecond);	//After each time interval, the designated function is initiated. Don't use units though.
clearInterval(interval_id);					//Stops interval.
window.setTimeOut(function, millisecond);	//Happens only once.
window.onload = function;					//note that it is not function();
```

######some facts
- `()` is the function initiation operator. If the user writes it next to a function name, the function is fired at the instance of being read by the interpreter. If not, it is fired whenever the event handler is ready.
- `document.getElementById('box');` is part of the DOM API. It is quite costly so remember to save it to a variable.
- $0 retrieves the element selected by clicking. $0.style.property = value;
- px em etc. is a string value in JS. Use '100px'.
- parseInt() casts a string into a number?




====
###BOM Object: Location `window.location`
This is the address bar part.
>The Location interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.

####Location properties
```javascript
location.href
location.hash
location.protocol
location.host				//same with hostname
location.hostname			//same with host
location.port
location.pathname
location.search				//query
```

####Location methods
```javascript
location.reload();			//refresh function
location.replace();			//redirect almost
```
`<a href="javascript:location.replace('http://daum.net/')"></a>` is practically the same as `<a href="http://daum.net"></a>`



====
###BOM Object: History `window.history`
>The History interface allows to manipulate the browser session history, that is the pages visited in the tab or frame that the current page is loaded in.

####History methods
```javascript
history.go();
history.forward();
history.back();
```

====
###BOM Object: Screen `window.screen`
This represents the screen of the user monitor. Ironically, it is part of the window object. You can understand screen as an object that simply holds information of the screen. Screen is used usually for getting stats.
>The Screen interface represents a screen, usually the one on which the current window is being rendered.

####Screen properties
```javascript
screen.width
screen.availWidth
screen.height					//includes taskbar
screen.AvailHeight				//does not include taskbar. The farthest that the browser can go.

screen.top						//deprecated
screen.availTop					//

screen.orientation				//orientation object for phones
screen.orientation.angle
screen.orientation.type
screen.orientation.onchange 	//event for when orientation changes to and from landscape and portrait
```

====
###BOM Object: Navigator `window.navigator`
Responsible for information such as "which dtds can the browser handle", "what version is the browser".
> The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

####Navigator Properties
```javascript
navigator.userAgent 					//the version of browser. Browsers take source codes from each other so you need a 'detectizer'.
										//dedicated web like [m.naver.com](./#) redirection needs browser snipping.
navigator.vendor
navigator.battery
navigator.onLine 						//read-only
navigator.cookieEnabled 				//`window.localStorage` does it much better so you should probs query about that. (Wow, technology.) 
										//if it is not, you can use cookie
navigator.language 						//user language


navigator.geolocation 					//object: geolocation of handheld device
navigator.geolocation.watch(); 			//follow where the device is going
navigator.geolocation.getCurrentPosition(success, error, options); 			//
```

====
###BOM Object: Document `window.document`
>The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree

####Document Properties
```javascript
document.title
document.doctype 						//the doctype or `null` if none
document.compatMode 					//`CSS1Compat` (standard mode) or `backCompat` (quirk mode). 
										//Refer to day-04 for more info.
										//You can use this for DOM scripting.

document.activeElement 					//retrieves the focused element
document.cookie 						//splitable with semicolons and assginment signs '='
```

######DOM 맛보기
```javascript
	//Example
var standard_mode = document.compatMode == "CSS1Compat";
	//or
var standard_mode = document.doctype != null;
var html = document.documentElement;
if (standard_mode) {
	html.setAttribute('class', 'standard');
}
else {
	html.setAttribute('class', 'non-standard');
}
```

####Document Methods
```javascript
document.write('<link rel="stylesheet" href="css/style.css">');
```

===
###[Why are they called `cookies`?](http://cookiecontroller.com/internet-cookies/browser-cookies/)
1. The Hansel and Gretel Browser Cookies Theory
1. The Cookie Monster Easter Egg
1. The Chinese Fortune Cookie
1. Magic Cookie