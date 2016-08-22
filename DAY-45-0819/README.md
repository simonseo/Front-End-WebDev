######Front End Web Development School

#jQuery

###jQuery Websites
Search for plugins (here)[https://www.plugins.jquery.com]
Learn jQuery (here)[www.try.jquery.com]

###Browser support in jQuery 3.0
IE: 9+
Chrome, Edge, Firefox, Safari: Current and Current-1


###Install and load
####npm
```sh
$ npm i jquery
```

###CDN
Contents Delivery Network (MS, Google, MaxCDN, etc.) You can also do it locally

###Backup CDN
```js
jQuery || document.write(localjqueryHTML);
```


##Time
```js
console.time();
console.timeEnd();

```

##Quiz

 
1. 다음 중 (arguments)[https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments] 객체에 대한 설명 중 올바른 것을 모두 고르세요.
	- arguments 객체는 배열과 유사하지만, 배열 객체와는 다르다. &10003;
	- arguments 객체는 전역 객체인 window를 통해서만 접근이 가능하다.
	- arguments를 typeof로 연산해보면 'arguments object'가 출력된다.
		- 아니다. 뭐가 출력되냐?
	- arguments[0] = null; 이런 방식으로 arguments의 원소를 변경할 수 있다. &10003;
	- 답이 없다.
	- 모르겠다.


2. IIFE 패턴을 사용하는 이유가 아닌 것을 고르세요.
	- 모듈을 구성하기 위함으로 모듈 내부의 자료를 공개/비공개 처리할 수 있다.
	- 주입된 데이터(Injection Data)에 별칭(Alias)을 부여하여 사용할 수 있다.
	- 다른 작업자와의 협업 시, 코드 충돌에서 보호할 수 있는 캡슐을 제공해준다.
	- 클로저 영역을 제공하며, 클로저(함수 또는 객체)를 외부에 반환(return)할 수 있다.
	- 답이 없다. &10003;
	- 모르겠다.