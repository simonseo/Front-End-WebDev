######Front End Web Development School

####When is `<script>` loaded?
From [kirupa.com](https://www.kirupa.com/html5/running_your_code_at_the_right_time.htm):

![Script load timing graph](./summary_72.png)

####Are `null` and `undefined` Objects?
No they are [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) data types. "원시 자료형"이란 object도 아니고 메소드도 없는 데이터다.  자바스크립트에는 6개의 원시 자료형이 있다: string, number, boolean, null, undefined, symbol이다. null이랑 undefined는 객체가 아니라 값이고, 다른 애들은 값의 이름이기도 하고 객체의 이름이기도 하다네요 (대소문자 주의) undefined와 null을 제외하고는 각각을 감싸는 wrapper 객체가 있다:

1. string 원시자료형의 객체 wrapper는 String, 
1. number은 Number, 
1. Boolean은 Boolean, 
1. Symbol은 Symbol (edited)

####DOM API
다음 중 DOM API에서 지원하는 방법이 아닌 것을 모두 고르세요.

- 선택 (Selection)
- 사건 (Events)
- 조작 (Manipulation)
- 탐색 (Traversal)
- 유효성 검사 (Validation) (HTML) &10003;
- 지리 (Geolocation) (HTML) &10003;


####JavaScript Iterative Statements
while
do ~ while
for
for ~ in (?)
for ~ of (?)
forEach (?)

####JavaScript Conditional Statements
if ~ else if ~ else
switch ~ case ~ default (+break)
3항식

####cosnole log styling
```javascript
//For pink background and red text
console.error("Hello World");  

//For yellow background and brown text
console.warn("Hello World");  

//For just a INFO symbol at the beginning of the text
console.info("Hello World");  

//For styling (Chrome, FireFox, FireBug)
console.log( '%c string string stirng', 'background: #222; color: #bada55');
```

####Scope
In JavaScript, if, for, while do not have their own scope. Only functions do.

####DOM Tree properties
```javascript
el.nodeName          //or .tageName is the name of the node saved as a string.
el.nodeType
el.nodeValue         //only for #text; others return null.
el.parentNode
el.parentElementNode //
el.firstChild
el.firstElementChild //retrieves the first element
el.lastChild
el.lastElementChild
el.previousElementSibling
el.nextElementSibling
```
####Node properties
```javascript
el.id
el.className
el.title //tooltip
```

####Node Attributes - Custom attributes
```javascript
el.getAttribute('id')	//[difference between property and attribute in JS](http://stackoverflow.com/a/10280487)
el.getAttribute('role')
el.getAttribute('data-container')
el.getAttribute('aria-hidden')
```
####DOM Methods
```javascript
//get methods: array-like structure called Node-list: (유사배열) seems like an array, but is not. 
Node.querySelectorAll('CSS Selector') //stronger version of get methods
Node.querySelector('CSS Selector')    // == querySelectorAll()[0]
Node.hasChildNodes()                  //https://developer.mozilla.org/ko/docs/Web/API/Node/hasChildNodes
Node.item(0) = Node[0]
```

###Create Nodes!
####creator methods
```javascript
document.createElement('p')
document.createTextNode('strstr')
context_node.appendChild(target_node); //appends target_node as the last child of context_node.
context_node.parentNode.insertBefore(target_node, context_node); //appends target_node in front of context_node. 
                                                                 //You must provide the parent node too.
```


#####Sublime Package: Alignment
select lines you want to align and press `ctrl+alt+A`.

