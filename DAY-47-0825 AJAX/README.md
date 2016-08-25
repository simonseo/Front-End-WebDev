######Front End Web Development School

##AJAX (Asynchronous JavaScript And XML)
Not limited to XML. Text, HTML, XML, JSON. End users can manipulate the website while things are loading. But this has a shortcoming in accessibility. ARIA is a solution to this.

In traditional synchronous websites, the front sends a HTTP request to the server and waits until there is a response, and the page updates everything. With AJAX, a new layer of AJAX engine between the front and back continuously requests new info and continuously updates the view.


###XHR (XML HTTP Request)
used for communication between web page and server. Front sends a request using the XHR object and the server sends updates using text data like XML or JSON.

XHR is not supported in IE6. It supports ActiveXObject instead.

####XHR Object
.open()
.send()
.status - a page's request status can be seen in networks tab of developer tools
	- `100` continue
	- `101` switching protocol
	- `200` OK
	- `404` client error
	- `500` server error //호스팅 
.statusText
	- 'OK'
.readyState - Holds the status of the XMLHttpRequest. Changes from 0 to 4: 
	- `0` request not initialized 
	- `1` server connection established
	- `2` request received 
	- `3` processing request 
	- `4` request finished and response is ready
.onreadystatechange

####Text and HTML
You can just dump it into a box. For HTML files that are structured with tags, you should use `.innerHTML` to add to the page document. use `.response`

####XML
You need to use proper XML DOM API and you need to parse all the data with annoying for loops. Use `.responseXML`

####JSON
JSON data is interpreted as objects directly by JavaScript, so there is much less tedious work. Use `.response` From [randomuser](http://randomuser.me), you can use cURL to request random user profile data.

>cURL [is] a lightweight, command-line tool for making HTTP requests without a web browser. cURL lets you try out various API requests in a command-line interface such as the command prompt in Windows or Terminal on the Mac. You don't need to build a working web application just to try out the APIs.

There is a JSON object in JS as well as a json method in jQuery. Follow the steps:
	1. .json -> string: receive the file of xhr.response as string literal
	1. string -> object: use `JSON.parse()` method to change the json formatting to an object
		- object -> string: user `JSON.stringify()` method to get strings from the object

####jQuery AJAX & JSON methods
- `$.ajax()`
- `$.get()`
- `$.post()`
- `$.getJSON()` returns object. 
- `$.gestScript()`

```js
//JS Promise 개념???
//ES2015 Promise 기본 지원

//For JSON
$.getJSON(url)
	.then(function(data, status, XHR) {
		console.log(data.results); // rorcp
	}) 

//Low Level Interface for all kinds of asynchronous HTTP requesting
$.ajax({
	'url' : url,
	'dataType' : 'json',
	'method' : 'GET'
})

```

##AngularJS
This is a great framework for creating SPAs (Single Page Applications). This is done with MVC model + AJAX. There are a lot of techniques required for SPAs which are covered by AngularJS:
	- DOM Manipulation
	- Page History
	- Routing
	- AJAX
	- Data Binding
	- etc., etc.

Features: Model(json data) directives(지시자, html 템플릿 대신 만들어줌) data binding view expression(interpolation 등의 표현) validation(form validation) cotnroller(함수, js?) services testing(test driven ~) template factories(서비스 안에 객체를 구성함) veiws(HTML템플릿) history routing jqLite dependency injection(ng-aria, ng-animation)

jQuery has better UI libraries.

###History
Started by Misko Hevery as a personal project before going to Google. It was intended for designers with HTML knowledge, not frontend developers. He recreated Google Feedback in 3 weeks with AngularJS, a project that took 3 people 6 months with GWT (A google kit). This is 2009.

After 2012, with the help of Google's marketing, it grows exponentially.

###Why Angular
- Increases productivity in creating SPAs (Short code, Unified code)
- MVC structure, Module extension
- Two-way Data Binding - this is a double sided sword. it can be very slow.

###cases
- jandi - SPA speedy
- m.entertain.naver.com/ranking - sorting (.ng-app)
- google - doesn't use AngularJS for everything. cuz it's too massive

###usage
- local download
- hosted CDN
- package - bower grunt jsvim gulp npm 