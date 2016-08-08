


####DOM Level 0
>The Level 0 DOM was invented by Netscape at the same time JavaScript was invented and was first implemented in Netscape 2. It offers access to a few HTML elements, most importantly forms and (later) images.

#####Forms
approach using `document.forms[i]`, `document.forms[`name`]`, or `document.forms.name`

#####Difference betweeen anchor and link
1. anchor
	- name. 이제는 접근하는 데에 ID를 더 많이 사용함. (but for forms, you **HAVE TO USE NAMES** 서버에 데이터를 전송할 때는 name을 사용하기 때문에)
1. link
	- href



####Intermediate DOM (1997)
The Intermediate DOMs are the DOMs developed by Netscape (document.layers) and Microsoft (document.all).

>When the Version 4 browsers were released, the hype of the day was DHTML so both browsers had to support it. DHTML needs access to layers, separate parts of a page that can be moved across the page. Not surprisingly in view of their increasing competition, Netscape and Microsoft chose to create their own, proprietary DOMs to provide access to layers and to change their properties (their position on the page, for instance). Netscape created the layer model and the DOM document.layers, while Microsoft used document.all.
>
>Fortunately, nowadays these intermediate DOMs are not important any more. You can safely forget them.



####[DOM Level 1](https://www.w3.org/TR/DOM-Level-1/) (1998)
표준화 착수함. Id, TagName, shortcut 등으로 선택 가능해짐
1. XML DOM (core)
	- XML (eXtensible Markup Language) is HTML without rules. Before JSON, everyone used XML using AJAX (Asynchronous Javascript and XML)
	- had to use DOM only (getElementsByTagName)
1. HTML DOM
	- provides shortcuts as well as DOM. (document.body, document.head, document.documentElement)
	- selection by classname appears later. it is super slow.

####[DOM Level 2](https://www.w3.org/TR/DOM-Level-2/) (2000)
현재 사용되는 DOM Event Model 등장.

####[DOM Level 3](https://www.w3.org/TR/DOM-Level-3-Core/) (2004)
1. DOM Properties (in C++, member variable) / methods (member function)
1. Node Interface - 노드가 building block인 interface. There are two ways of selecting an element. You can traverse to it, or you can select it directly. 
	1. traversal: same as graph traversal. but too lengthy, and a single space 
		- `parentNode`
		- `childNodes`
		- `firstChild`
		- `lastChild`
		- `nextSibling`
		- `previousSibling`
		- etc.
	1. direct selection
		- getElement(s)...
####DOM Level 4 (2015)
Create custom DOM Event (event promise를 수정하는 야매방법은 있었지만 이로써 표준 지정)


#####Sidetalk
- PostCSS, Babel(ES6)

###TO DO
- Data Structures 복습 (C++ pointer, reference, class, Tree)
- Java class 복습
