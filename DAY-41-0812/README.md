new Array()
Capitalizing the first `A` is a convention that is used to mean that it creates a object.

You can make functions as constructors?

Array
You can also use strings as indices.
`arr['the_truth'] = "I am simon"`
Node Lists look like lists but they don't have the methods that array do (Chrome does)


Object/property 추가 
`myObj['property'] = data;`

`typeof var` or `typeof(var)`

```javascript
typeof number; //number
typeof string; //string
typeof boolean; //boolean
typeof function; //function
typeof object; //object
typeof arrary; //object
typeof null; //object
typeof undefined; //undefined
```
var instanceof object_type
true || false

.constructor
객체에서는 완벽하지만 아니라면 오류를 발생.

Object.prototype.toString.[call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
오브젝트 객체의 프로토타입의 .toString 함수객체의 .call()함수를 
함수가 프로토타입을 만든다.
new로 만들어진 객체들은 전부 프로토타입을 공유한다.
그 프로토타입을 접근(수정)하려면 함수.prototype이나 객체.constructor.prototype으로 가능.

Developer Menu
add breakpoints on lines
press F8 to go step by step
add variables to `watch`