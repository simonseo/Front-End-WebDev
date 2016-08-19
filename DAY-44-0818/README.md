UMD - AMD, Web, CommonJS

singleton

```js
var button_set = query('button-set');
var buttons = makeArray(query('.button'));
```

####Using closure

```js
for (var i=0, l=buttons.length; i<l; i++) {
	buttons[i].onclick = (function(i){
			return function() {
				console.log(i);
			};
		})(i);
}
```

####Using forEach (kind of a closure?)
```js
buttons.forEach(function(button, index) {
	button.onclick = function() {
	console.log(index);
};
});
```

####Using object property
```js
for (var i=0, l=buttons.length; i<l; i++) {
	buttons[i].index = i;
	buttons[i].onclick = function() {
		console.log(this.index);
	}
}
```

###OOP: JS
`constructor function` is the `class` of JS. All constructors (classes) have prototypes. You can approach the prototype in two ways using `foo.__proto__` (only allowed in some browsers) and `foo.constructor.prototype`.

Here is a constructor function Coffee:

```js
function Coffee(name) {
  this.name = name;
}
```

To create instances, you need the `new` keyword. All instances created (with the `new` keyword) all inherit the prototype and -

```js
var americano = new Coffee('아뭬리카노');
var mocha = new Coffee('모카');
```

Let's check what we made.

```js
//input
americano
//output
Coffee {name: "아뭬리카노"}
name : "아뭬리카노"
__proto__ : Object 
	constructor : Coffee(name)
	__proto__ : Object

//input
americano.constructor === Coffee
//output
true
```

This is the `Class` keyword added in recent versions of ES.

```js
Class Coffeee {
	constructor() {}
	addShot() {}
}
```

#####Built-in / Native Objects
1. Number `var num = new Number(2016);`
1. String
1. Boolean
1. Array
1. Function
1. Object

###Why JS is shit
Like some other beginner-friendly languages, JS allows unstrict typing. This is useful in simple operations, but as soon as you start

```js
num1 = (new Number(1)).valueOf(); // 1
num2 = new Number(2)              // Number {[[PrimitiveValue]]: 2}
// 
isType(num1) // "number"
isType(num2) // "number"
// 
num1.toString() // "1"
num2.toString() // "2"
// 
typeof num1 // "number"
typeof num2 // "object"
// 
num1 instanceof Number // false
num2 instanceof Number // true
// 
num1.constructor // Number() { [native code] }
num2.constructor // Number() { [native code] }
// 
num1.__proto__ // Number {[[PrimitiveValue]]: 0}
num2.__proto__ // Number {[[PrimitiveValue]]: 0}
// 
1 == num1 // true
2 == num2 // true
// 
1 === num1 // true
2 === num2 // false
```