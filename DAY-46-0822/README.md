######Front End Web Development School

##jQuery Basics
###`$ function`
Is an alias of the jQuery() function. `jQuery` and `$` are a 'factory' function, which means it takes care of different arguments in different ways on its own and creates a jQuery object. Smart... but dangerous? Obviously, `$` is a function and `$()` is an object.

###`$var_name`
If a jquery function returns a jquery object, you should put a dollar sign `$` at the start of your variable name. If a function returns just any other stuff, no need.

###`noConflict([true])`
To avoid conflict with other libraries, you can:

1. Only use `jQuery`
2. Get rid of `$` by `var $jq = jQuery.noConflict();`
3. Get rid of both `$` and `jQuery` by `var $jq = jQuery.noConflict(true);`
4. Use it in a closure by passing `jQuery` as `$` in IIFE.
5. Use it in a closure by using the factory function (weird): `jQuery.noConflict(true)(function($){   /* code*/   })`

###`global`
IIFE에서 global를 사용하지 않으면 scope chain을 뒤져야 하기 때문에 비효율적임.

##Event
```js
/* 진보 이벤트 모델 (크로스 브라우징)
 * W3C 표준 모델     .addEventListener(type, handler, capture);
 * MS 비표준 모델    .attachEvent('on'+type, handler);
 * jQuery            .on('type', handler)
 * 
 * 구형 이벤트 모델  ['on'+type] = handler;
 */
```
There are two types of event handlers

- `.on()` executed everytime event happens
- `.one()` executed once

```js
// $button.click(function() {
$button.on('click', function() {
				$(this).next().text('changed text'); //
			});
```
###load vs ready
- `$( document ).ready( handler )` DOM is ready
- `$( window ).load( handler )` Images and iframes as well as DOM are ready.

```js
function readyFn() { ... }

$( document ).ready( readyFn );   //runs readyFn onces DOM is ready.
$( readyFn );                     //does the same thing as above.
```
###Delegated Event 이벤트 위임

###Data `event.data` 이벤트 데이터
```js
$target.on('clicked', {'clickState': false}, function(e) {
		if (!e.data.clickState) {
			$target.wrap('<div style="outline: 2px solid yellow">');
		}
		else {
			$target.unwrap();
		}
		e.data.clickState = !clickState;
	});
```


##[Selector](http://codylindley.com/jqueryselector): Filter vs Find
- this can be used together with other CSS selectors, or as filters. 
	- `:first`, `:last`
	- `:odd`, `:even`
	- `:text`, `:checked`, `:selected`
- `Filter` returns `this` that satisfies the given condition (selector, function...)
- `Find` returns descendent elements inside `this` that satisfies the condition.

###Filter
You can have selectors or functions inside some of these
- `.first()` First Child
- `.last()` Last Child
- `.eq()` nth Child
- `.filter()` Filter by selector or function that returns a boolean value
- `.not()`
- `.slice()`

###Traversal/Find
- `.content()`         Descendent Nodes  Get everything inside. Including text nodes, element nodes, etc.
- `.find()`            Descendent        Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
- `.children()`        Children          Get the children of each element in the set of matched elements, optionally filtered by a selector.
- `.next()`            Sibling           Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
- `.nextAll()`         Sibling           Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
- `.nextUntil()`       Sibling           Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
- `.prev()`            Sibling           Get the immediately preceding sibling of each element in the set of matched elements. If a selector is provided, it retrieves the previous sibling only if it matches that selector.
- `.prevAll()`         Sibling           Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
- `.prevUntil()`       Sibling           Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
- `.siblings()`        Sibling           Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
- `.parent()`          Parent            Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
- `.parents()`         Ancestor          Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
- `.parentsUntil()`    Ancestor          Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
- `.offsetParent()`    Ancestor          Get the closest ancestor element that is positioned.
- `.closest()`         Ancestor          For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree. Optional context.

#####Play with the jQuery list-like object
- `.add()` returns new jQuery object that has the new elements with specified selector, html, element.
- `.addBack()` Adds back into the jQuery object, the elements that existed before being replaced by a traversal.
- `.end()` Removes the current jQuery object and goes back to the state that existed before the last traversal.
- `.reverse()`


##Manipulation

###.css
```js
$smth.css(prop, value);
$smth.css({
	prop : value,
	prop2 : value2
	});
$smth.css(prop, function(index, value) { ... })

```
###Attribute vs Property
```js
$smth.prop('value')                     //gets properties that are dynamically changed by user
$smth.prop('value', 'some string')      //sets property
$smth.val('some string')                //shortform
$smth.prop('disabled', true);           //disabled

$smth.attr('title')                     //gets attributes that are set by website
$smth.attr('disabled', true);           //diabled="disabled" XHTML 방식
```

###Play with classes
- `$jqObject.removeClass()` Removes all classes or removes specified class.
- `$jqObject.addClass()` Adds specified class.
- `$jqObject.hasClass()` Takes a string with class name and returns a boolean value.
- `$jqObject.toggleClass()` Evaluates whether the element has the specified class: adds if not, removes if so.



.html([HTML code | function(index, oldHTML)]) Gets HTML inside element, or Sets a new one.
.text()
.attr()


####Simplify manipulation
Using manipulation methods:

```js
$('<div>')
	.addClass('division-template')
	.attr({
		'id' : 'custom-div',
		'title' : 'template for reuse'
	})
	.text('Division elment content')
	.on('click', function() {
		console.log(this);
	})
	.appendTo('body');
```
Using the factory function:

```js
$('<div>', {
	'attr' : {
		'class' : 'division-template',
		'id' : 'custom-div',
		'title' : 'template for reuse'
	},
	'text' : 'Division element content',
	'on' : {
		'click': function() {
			console.log(this);
		}
	}
}).appendTo('body');
```

###Append methods
```js
A.append(B)           //A>C+B
A.appendTo(B)         //B>C+A

A.prepend(B)          //A>B+C
A.prependTo(B)        //B>A+C

A.insertBefore(B)     //A+B || A is inserted before B
A.before(B)           //B+A || before A, insert B

A.insertAfter(B)      //B+A
A.after(B)            //A+B || after A, insert B
```

###Wrap
.wrap() 
.wrapAll()
.unwrap()


##Modernizr
For JS and CSS. For CSS, tt detects features in the user's browser and adds classes. For JS, the `Modernizr` object will save boolean values for each function.

###Detectizr
A Modernizr extension that detects even OS environment, device model, screen size, browser details, etc. This is also saved as CSS classes and as JS object `Detectizr`

```js
Detectizr.detect({'device':false}); //default value is true for all values. This changes whether to detect. 
```
###Respond.js
Fast media queries for older browsers