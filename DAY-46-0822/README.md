######Front End Web Development School

##jQuery
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

###Event
```js
/* 진보 이벤트 모델 (크로스 브라우징)
 * W3C 표준 모델     .addEventListener(type, handler, capture);
 * MS 비표준 모델    .attachEvent('on'+type, handler);
 * 
 * 구형 이벤트 모델  ['on'+type] = handler;
 */
```

```js
// $button.click(function() {
$button.on('click', function() {
				$(this).next().text('changed text'); //
			});
```
###load vs ready
`$( document ).ready( handler )` DOM is ready
`$( window ).load( handler )` Images and iframes as well as DOM are ready.

```js
function readyFn() { ... }

$( document ).ready( readyFn ); //runs readyFn onces DOM is ready.
$( readyFn );                   //does the same thing as above.
```

###Attribute vs Property
```js
$(this).prop('disabled', true); //disabled
$(this).attr('disabled', true); //diabled="disabled" XHTML 방식
```

###play with classes
`$jqObject.removeClass()`
`$jqObject.addClass()`
`$jqObject.hasClass()`
`$jqObject.toggleClass()`

###Traversal
- `.children()`     Get the children of each element in the set of matched elements, optionally filtered by a selector.
- `.closest()`      For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
- `.find()`         Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
- `.next()`         Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
- `.nextAll()`      Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
- `.nextUntil()`    Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
- `.offsetParent()` Get the closest ancestor element that is positioned.
- `.parent()`       Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
- `.parents()`      Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
- `.parentsUntil()` Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
- `.prev()`         Get the immediately preceding sibling of each element in the set of matched elements. If a selector is provided, it retrieves the previous sibling only if it matches that selector.
- `.prevAll()`      Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
- `.prevUntil()`    Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
- `.siblings()`     Get the siblings of each element in the set of matched elements, optionally filtered by a selector.

###(Selector)[http://codylindley.com/jqueryselector]
this can be used together with other CSS selectors, or as filters. 

- `:first`, `:last`
- `:odd`, `:even`
- `:text`, `:checked`, `:selected`

###.css
`.css(prop, value)`
`.css({prop:value})`
`.css(prop, function(index, value) { ... })`


##Modernizr
For JS and CSS. For CSS, tt detects features in the user's browser and adds classes. For JS, the `Modernizr` object will save boolean values for each function.

###Detectizr
A Modernizr extension that detects even OS environment, device model, screen size, browser details, etc. This is also saved as CSS classes and as JS object `Detectizr`

```js
Detectizr.detect({'device':false}); //default value is true for all values. This changes whether to detect. 
```
###Respond.js
Fast media queries for older browsers