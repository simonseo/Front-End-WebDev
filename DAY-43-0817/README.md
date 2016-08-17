######Front End Web Development School

##TIL

###Strict Mode
use strict mode when making constructor functions. `"use strict";`
Before ES6, functions executed in the global scope regarded the window object as `this` inside a function, without having to write `window.fn()` or `this.fn`.
After, without specifying what `this` refers to, `this` inside a function will be undefined.

###Functions as FCO (First Class Objects)
Javascript 함수는 일반 함수로서 때론 생성자 함수, 함수의 인자, 함수의 반환 값, 객체의 멤버, 배열의 원소로서 다양하게 사용된다.

**일급객체(First-Class Object)의 특징**

- 변수, 데이터 구조 안에 담을 수 있다.
- Callback function: 인자(Parameter, Argument)로 전달할 수 있다.
- 반환 값(Return Value)으로 사용할 수 있다.
- 런타임(실행) 중에 생성할 수 있다.
- 할당에 사용된 이름과 관계 없이 고유하게 식별할 수 있다.

```javascript
// 변수에 함수를 할당할 수 있다.
var fn = function () { ... };

fn();

// 함수의 인자로 함수가 전달될 수 있다.
function fn(callback) {
    callback();
}

fn( function() { ... } );

// 함수의 반환 값으로 함수를 내보낼 수 있다. (객체도 가능)
function fn() {
    return function() { ... };
}

fn()();

// 객체의 속성으로 함수를 설정할 수 있다. (메소드)
var obj = {
    "fn": function() { ... }
};

obj.fn();

// 배열의 원소(Item)로 함수를 메모리할 수 있다.
var arr = [];
arr[0] = function() {...};

arr[0]();
```

###Closure Function
바깥에서는 함수 내부(Closure)의 객체를 참조할 수 없다. 그런데 클로져 내부로부터 반환된 함수(Closure Function)는 부모 함수의 스코프에 접근 가능하다.
>클로저 영역에서 반환된 함수 === 클로져 함수

####Example 1
```javascript
function _countDown(target_number) {
	var count = target_number;
	console.log(count);
	function _countDownInner() {
		console.log(count--);
	}
	return countDownInner;
}
var countDown = _countDown(10); 
```
이렇게 하면 countDown 함수를 실행했을 때마다 _countDown함수 실행 당시의 parameter등을 접근할 수 있다. 다음은 결과물이다:

```javascript
countDown(); //10
countDown(); //9
countDown(); //8
countDown(); //7
```

####Example 2
From the following HTML code, we want the console to log the index of an `a` link whenever it is clicked.

```html
<nav class="demo-nav">
	<ul>
		<li><a href="#">item 01</a></li>
		<li><a href="#">item 02</a></li>
		<li><a href="#">item 03</a></li>
		<li><a href="#">item 04</a></li>
	</ul>
</nav>
```
Obviously, we'll have to get the `a` elements.

```js
var list = document.getElementsByTagName('a');
```
Now we should loop through the list and assign an onclick event. Let's try this (wrong):

```js
for (var i = 0, l = list.length; i < l; i++) {
	list[i].onclick = function() {
		console.log(i);
	};
}
```
The console will show `4` every time the links are clicked. This is because `i` has been saved to the global scope and because `onclick` does not save the value inside `i` at the time of the assignment.

So what we have to do is have `onclick` remember the value `i` at every single loop. This is where closure comes in.

```js
function fn(index) {
	return function() {
		console.log(index);
	}
}

for (var i = 0, l = list.length; i < l; i++) {
	list[i].onclick = fn(index); //실행할 때는 index값을 전해줄 수 있다. 
	                                 //순환할 당시의 index값을 탈출 시켜야함.
	                                 //클로져를 사용하지 않으면 index가 undefined이건, 
	                                 //루프의 마지막 값이 나온다. 
}
```

###IIFE Pattern (Immediately Invoked Function Expression)
The most often used pattern in modern JS, the IIFE pattern, uses closure. This doesn't pollute the global scope. Different from normal function declaration & assignments, this pattern does not leave any trace in the global scope. This was derived because JS does not have support for differentiating between private and global members. There are several ways to make this:

```js
( function() {}() ); //Recommended
+function() {}();
~function() {}();
!function() {}();
( function() {} )();
```

####Example 1
So if we recreate the count function with IIFE, we get the following. Note that no functions or variables called in the global scope, except for the `countDown` function.

```js
var countDown = (function(num) {
		var _num = num;
	return function() {
		return _num--;
	};
}(10)); //Immediately executed!
```

####Example 2
Let's try IIFE with the second example from above. In the original code, we had `fn`, `i`, `l`, and `list` as global variables. Ew. Let's move the declaration of the function `fn` into a closure.

```js
var list = document.getElementsByTagName('a');

for (var i = 0, l = list.length; i < l; i++) {
	list[i].onclick = (function(index) {
		return function() {
			console.log(index);
		}
	}(i));
}
```

Now we have only three variables that were introduced into the global scope. What if I don't want three? I just want to leave `list` alone and erase everything else. What should I do?


```js
var list = document.getElementsByTagName('a');

(function(){
		for (var i = 0, l = list.length; i < l; i++) {
			list[i].onclick = (function(index) {
			return function() {
				console.log(index);
			}
		}(i)); //closes and assigns a function to onclick
	}
}()); //closes and executes everything else
```
Do we have just one variable? I'll go and check. (1 minute later) I just did. It works!


###Modern JavaScript Module Pattern
This modularizing method for frontend(different from backend, they have separate files for separate modules?) 

####jQuery
1. wrap all the functions in a closure.
1. create an object in the global scope,  You can't get or set the hidden variables. You can edit variables inside our global object.
1.  that has some of those functions.

You could set the member variables to be 

```js
//global is the window object passed to the closure.
global.type = isType;
global.getCSS = getStyle;
```

```js
function css(el, prop, value) {
	if (!value) {
		return getStyle(el, prop);
	}
	else {
		return setStyle(el, prop, value);
	}
}

(function(global) {
	'use strict';
	var simonlib 
}(window));
```

####Yahoo UX team
Create object outside the closure.
Inside the closure, add category objects to the object.
Inside the categories assign functions to variables.