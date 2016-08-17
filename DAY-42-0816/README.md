######Front End Web Development School

#Quiz
1. 다음 중 성격이 다른 DOM API 메소드는 무엇인가요? *
	- `.createElement()`
	- `.createTextNode()`
	- `.createAttribute()`
	- `.createDocumentFragment()`
	- `.querySelectorAll()` &10003;
	- `답이 없다.`
 
2. 다음 중 표준 DOM API가 아닌 것은 무엇인가요? *
	- `.appendChild()`
	- `.insertAfter()` &10003;
	- `.cloneNode()`
	- `.replaceChild()`
	- `답이 없다.`
	- `모르겠다.`
 
3. 다음 중 .hasChildNode() 메소드가 반환하는 값의 유형은 무엇일까요? *
	- `Number`
	- `String`
	- `Boolean` &10003;
	- `Object`
	- `답이 없다.`
	- `모르겠다.`
 
4. 다음 중 typeof 키워드 연산자가 올바르게 답하지 못하는 것을 모두 고르세요. *
	- `{}`
	- `[]`
	- `"typeof 는 설계상 오류가 있습니다."`
	- `1012.935673`
	- `false`
	- `null` &10003;
	- `답이 없다.`
	- `모르겠다.`

	>**Correct answer**
	>`[]`
	>`null`

5. DOM 헬퍼 함수 remove()를 작성해보세요. *

	```javascript
	function remove(node) {
	  parent = node.parentNode;
	  if (!!parent) {
	    parent.removeChild(node);
	  }
	  else {
	    throw new Error('passed argument is not a node.')
	  }
	}
	```
 
6. 다음 중 숫자형 문자를 숫자로 변경하는 방법이 아닌 것은 무엇일까요? *
	- `+숫자형 문자 데이터 ` X
	- `숫자형 문자 데이터 / 0`
	- `Number( 숫자형 문자 데이터 )`
	- `parseInt( 숫자형 문자 데이터, 10 )`
	- `답이 없다.`
	- `모르겠다.`

	> **Correct answer**
	> 숫자형 문자 데이터 / 0

7. 다음 함수가 수행하는 일은 무엇 일까요? 유추해보세요. `function camelCase(text) { ... }`

	```
	주어진 string을 다른 작명법에서 카멜케이스 형식으로 바꿔주어 반환한다.
	```
 
8. 다음 중 원시 데이터 유형(Primitive Date Type)인 것을 고르세요. *
	- `new Object()`
	- `[3, 7, 20, 23]`
	- `/[0-9][a-z]/ig`
	- `(new Date()).getDay()` X
	- `답이 없다.`
	- `모르겠다.`

	>**Correct answer**
	>답이 없다.
 
9. 다음 중 constructor 속성을 가지지 못하는 것을 모두 고르세요. *
	- `null` &10003;
	- `undefined` &10003;
	- `{ 'name': 'this is object' }`
	- `[ true, undefined, null ]`
	- `( function(global){ console.log(global, this); }(this) )`
	- `document.querySelector('body')`
	- `모르겠다.`
	- `답이 없다.`

10. switch 조건 문에 break가 필요한 상황을 기술하세요. *

	```
	뒤에 작성된 코드가 실행되는 것을 원치 않을 때
	```


#TIL
```javascript
while (count++ <= 10) {  }           //you can increment index in the condition statement.
while ( (count += 2) <= 10) {  } 
while ( (var count = 20) <= 10) {  } //you can even assign values too
```

```javascript
//Until ES5
function fx(element) {
	var element = element || document; //assign element if it exists, document if not.
}
//ES6
var fx = (element = document) => { //arrow function. 
	// we have assigned a default value. you don't need to assign it separately. 
}

```
Functions are objects. You can create properties to use within functions.

###`for ... in`
Slower than simple for. You should only use this on objects without length properties. Use for asynchronized communication x` 

```javascript
for (var property in obj) {
	if (obj.hasOwnProperty(property)) { //without this condition, js will search through its ancestors for the property.
                                        // refer to javascript garden
		console.log("속성:", property);
		console.log("값:", obj[property]);
	}
}
// 1. property in simon
// 2. simon.property
// 3. simon['property']
```
For arrays,

```javascript
for (var index in movieList) {
	if (movieList.hasOwnProperty(index)) {
		console.log(movie);
	}
}
```

###`for ... of`
Use for arrays. Not available for crossbrowsing. You need a transpiler to use this.

```javascript
for (var movie of movieList) {
	console.log(movie);
}
```

###`.forEach(function(item, index, arr) {  })`
callback function. You can omit index and arr. In jQuery the parameters are in the order: index-item-arr. This method also exists for nodelists in Chrome.

```javascript
movieList.forEach(function(item, index) {
		console.log('movie', index, item);
	});
```

###`arr = arr.map(function(item, index, arr) {  })`
map mutates items, if you return a value in the function. You map it into a new array. 


###with
Used to call an object multiple times. For example, when you use `console.log()` multiple times. Or you need the properties of an object repetitively.

###function
1. declaration (value) `function fn() { console.log("this is a function"); }`
	Hoisted to top of the scope.
1. expression (reference) `var fn = function() { console.log("this is a function"); };`
	Hoisted to right below any functions declared with `function` declaration. But its value is assigned later.
1. create object `var fn = new Function('console.log("this is a function");');`
	This method is not recommended. Why? Read JS garden.

###Scope Chain
In JS, like Python, `var`s in if, for, while blocks don't have their own scope. Functions do. If you call a var in a function, JS will look at the stored variables in this order to retrieve the variable value:

1. local scope of function
1. parameter of function
1. outer scope of function (repeat 1 and 2)
1. global scope

In ES6, `let` was introduced, which is a keyword used to declare a variable within if, for, and while blocks as well as function blocks.
>let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
>-MDN

###Comparison operators
`===` and `!==` are strict comparison operators:

>JavaScript has both strict and type-converting equality comparison. For strict equality the objects being compared must have the same type and:

>	- Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
>	- Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.
>	- Two Boolean operands are strictly equal if both are true or both are false.
>	- Two objects are strictly equal if they refer to the same Object.
>	- Null and Undefined types are == (but not ===). [I.e. (Null==Undefined) is true but (Null===Undefined) is false]

```javascript
0 == false   // true
0 === false  // false, because they are of a different type
1 == "1"     // true, automatic type conversion for value only
1 === "1"    // false, because they are of a different type
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
```