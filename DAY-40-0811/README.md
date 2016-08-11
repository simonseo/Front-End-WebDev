######Front End Web Development

- `$0.style.property` //only inline style
- `function(e) == function(ev) == function(evt) == function(event)`: 이벤트 속성에 연결된 함수가 실행될 때 event가 자동으로 인자로 전달된다. (injection)
- each event can save only one function
- `.onkeydown` -> event shoxws key and stuff
- `console` 대부분의 브라우저가 지원함
	- info
	- error
	- time
	- dir
- ES6 let (지역변수 선언...이지만 약간 다르다?!), const (상수) 등의 키워드 지원 시작
- JS comments
	- `!<-`
	- weird

####Passed by what?
- primitive data types (number, symbol, string,... )are passed by value (copied)
- objects (including array, functions) are passed by reference

####Number
- 8진수 숫자 앞에 0
- 10진수 as is
- 16진수 숫자 앞에 `0x`

###Type Casting
####Number to String
- `''`
- `+''`
- `String()`
- `.toString()`

```javascript
9.toString()   //오류남. 데이터라서 그런 듯
9..toString()  //해결법 1
9 .toString()  //해결법 2
(9).toString() //숫자, 함수, 객체 리터럴은 괄호로 감싸주면 괜찮음.
               //(function (){}).toString()	
               //({}).toString()
```

####to Boolean
- `!!` //not not
- `Boolean()`

####String to Number
- 사칙연산 : - 덧셈은 오히려 숫자를 스트링을 변화시킴. 숫자가 아닌 (단위를 가진) 스트링을 하려 하면 `NaN`(Not a Number) 나옴
	- `str - 0`
	- `str * 1`
	- `str / 1`
- `+str`
- `Number(str)`
- `toNumber(str)`
- `window.parseInt(16.3492px, 8)` //parse == 해석하다. window 생략가능

####Getting computed style
- 비표준 MS IE (IE8-) 
	`context_node.currentStyle.property`
	`context_node.currentStyle[property]`
- 표준 W3C방식 (IE9+) 
	`window.getComputed Style(context_node[, 가상요소]).property`
	`window.getComputed Style(context_node[, 가상요소])[property]`

