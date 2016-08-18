(function(global) {
	'use strict';
	global.num1 = (new Number(1)).valueOf();
	global.num2 = (new Number(2)).valueOf();
	global.num3 = (new Number(3)).valueOf();
	global.num4 = (new Number(4)).valueOf();
	global.num5 = (new Number(5)).valueOf();
	global.num6 = (new Number(6)).valueOf();

	global.boo1 = (new Boolean(1)).valueOf();
	global.boo2 = (new Boolean(0)).valueOf();
	global.boo3 = (new Boolean(1)).valueOf();
	global.boo4 = (new Boolean(0)).valueOf();
	global.boo5 = (new Boolean(1)).valueOf();
	global.boo6 = (new Boolean(0)).valueOf();
	global.boo7 = (new Boolean(1)).valueOf();
	global.boo8 = (new Boolean(0)).valueOf();
	global.boo9 = (new Boolean(1)).valueOf();
	global.boo10 = (new Boolean(0)).valueOf();
	global.boo11 = (new Boolean(1)).valueOf();
})(this);


// num1 = (new Number(1)).valueOf();
// 1
// num2 = new Number(2)
// Number {[[PrimitiveValue]]: 2}
// 
// isType(num1)
// "number"
// isType(num2)
// "number"
// 
// num1.toString()
// "1"
// num2.toString()
// "2"
// 
// typeof num1
// "number"
// typeof num2
// "object"
// 
// num1 instanceof Number
// false
// num2 instanceof Number
// true
// 
// num1.constructor
// Number() { [native code] }
// num2.constructor
// Number() { [native code] }
// 
// num1.__proto__
// Number {[[PrimitiveValue]]: 0}
// num2.__proto__
// Number {[[PrimitiveValue]]: 0}
// 
// 1 == num1
// true
// 2 == num2
// true
// 
// 1 === num1
// true
// 2 === num2
// false