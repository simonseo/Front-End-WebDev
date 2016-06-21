###### Front-End Development School

#####Table of Contents
1. [Day 1 Review](#day-1-review)
	1. [My own and first ever GitHub blog](#my-own-and-first-ever-github-blog)
	1. [Auto indent](#auto-indent)
	1. [Doctype and compatibility](#doctype-and-compatibility)
	1. [Meta elements](#meta-elements)
1. [Day 2 TIL](#day-2-til)
	1. [Node.js](#nodejs)
	1. [Formatting Tags](#formatting-tags)
	1. [MS IE 조건부 주석문](#ms-ie-조건부-주석문)
	1. [Creating Snippets](#creating-snippets)
	1. [HTML entity and Emmet](#html-entity-and-emmet)
	1. [Etcetera](#etcetera)
	1. [Jump](#jump)
	1. [Image](#image)
1. [To Do](#to-do)

#Day 1 Review

#####My own and first ever GitHub blog
See it [here](http://simonseo.github.io).
It'll be used as my blog/website/resume


#####Auto indent
1. in HTML (and perhaps other languages) in Sublime Text 3
1. Command Palette (ctrl+shift+P) > Indentation: Reindent Lines
1. Edit > Line > Reindent

#####Doctype and compatibility
- Only `<head>` and `<body>` can be children elements of `<html>`. Comments are children nodes.
- See that IE _actually_ has compatibility issues with/without certain tags. Use F12 key to see console/etc.
- `!!!4t` which gives 
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
``` 
is rendered standard. Check wether a webpage is in standard mode by opening console window and type in `document.compatMode`. By the way, Comment above DTD (Doctype Definition) is ALWAYS quirk in IE. However, this is not always the case in other browsers. 

`lang="ko-KR"` can be placed in any element tag.

#####Meta elements
1. You can render with newest engine in IE by typing `meta:compat`, which becomes`<meta http-equiv="X-UA-Compatible" content="IE=Edge">` with Emmet.
1. **[viewport](http://aboooks.tistory.com/352)**
```<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- if you have a wing of size 40px and the 본문 is 1200px, and you want to show the wings, then you should not set width as device-width(which is by default 960?) but instead write 1240px```
1. **keyword** element is not considered by Google's search engine algorithm. It is however used by other websites.
1. **link element** always has to be inside head. NOT BODY


#Day 2 TIL
#####Node.js
Downloaded [Node.js](nodejs.org) LTS v4.4.5 includes [npm](www.npmjs.com) (nodejs project manager) v2.14.12. `node --version` in `cmd.exe` (node command with option --version). We will use nodejs more later on.

```sh
$ node --version #4.4.5
$ npm --version #2.14.12
```

```sh
$ npm install --global http-server #installs "server". Only execute this code once. (I think)
```

```sh
$ http-server -o #activate local computer as server. 
```
The folder in which you were at becomes the root folder. At the instantiation of cmd.exe, you can write "cd" and drag the target folder to cmd.

#####Formatting Tags
```
<b>bold</b>
<i>italic,oblique</i>
```
these (as well as `<big>` and `<small>`) are standard in HTML5, however, you should leave these functions to CSS, not HTML. HTML is for structuring, not formatting. You can validate your HTML at validator.w3.org. Otherwise, you can use the [Chrome extension](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?utm_source=chrome-ntp-icon). Instead of these elements, there are other tags that give meaning. From the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i):

Use this element only when there is not a more appropriate semantic element. For example:
- Use `<em>` to indicate emphasis or stress.
- Use `<strong>` to indicate importance.
- Use `<mark>` to indicate relevance.
- Use `<cite>` to mark the name of a work, such as a book, play, or song.
- Use `<dfn>` to mark the defining instance of a term.
*and superscript `<sup>` and subscript `<sub>`

- Heading 1~6: h1, h2, ... h6. The standard used to be "only use h1 once" because each webpage was considered one page. Now, a single webpage can show several pages, for exampl, different news sections.
- `<br>` is used to break lines inside paragraphs. It has no closing tag. It is the same as pressing shift+enter in photoshop. Using enter in photoshop is synonymous to wrapping a line with a separate heading tag, paragraph tag, etc.
- `<hr>` 수평선 Horizontal Rule. If you go to [Naver](naver.com) and go to Web Developer Tool > CSS > Disable all styles, you can see that they too use this dividing line.
- You can use `<div></div>` to mark the start/end of an arbitrary section.

`.page-main|c` with emmet gives:
```sh
<div class="page-main"></div>
<!-- /.page-main -->
```
This is the normal way to set sytles. 
```HTML
<style>
	body {
		/*정상*/
		background: #333;
		color: #fff;
		}
	</style>
```
Browser hack is intended to fix some bugs that appear in some browsers. Thus some browsers support this bug/hack, some don't.
```HTML
<style>
	body {
		/*브라우저 핵 예시: 키워드 앞에 언더스코어*/
		_background: red;
		_color: yellow;
		}
	</style>
```
#####MS IE 조건부 주석문
Instead of using browser hacks to fix bugs, we can differentiate the code for different browsers, by applying classes to the body element using IE's conditional comments. IE 6~9까지는 주석이 아니라 코드문으로 해석됨. Emmet: `cc:ie`
```HTML
<!--[if IE]>
<p>IE에서만 해석되는 구문</p>
<![endif]-->
```
아래는 IE 9 이하에서만 실행
```HTML
<!--[if lte IE 9]>
<p>IE에서만 해석되는 구문</p>
<![endif]-->
```
아래는 모든 표준 브라우져 Emmet: `cc:noie`
```HTML
<!--[if !IE]><!-->
<p>Blahblahbalbha</p>
<!--<![endif]-->
```
아래는 조건부 주석문을 사용해서 html 엘리먼트가 브라우저 환경마다 다르게 작동할 수 있도록 클래스로 태그한 것.
```HTML
<!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->
<!--[if IE 6]><html lang="ko-kr" class="ie6"><![endif]-->
<!--[if IE 7]><html lang="ko-kr" class="ie7"><![endif]-->
<!--[if IE 8]><html lang="ko-kr" class="ie8"><![endif]-->
<!--[if IE 9]><html lang="ko-kr" class="ie9"><![endif]-->
```
#####Creating Snippets
1. select what you want and copy.
1. Go to Tools > Developer > New Snippet
1. Replace everything inside brackets after CDATA with your text.
1. Uncomment tabtrigger and write your keyword
1. Uncomment scope and write text.html or whatever file you're working in. You can find out the scope by right clicking?

#####HTML entity and Emmet
For texts, it is better to use html entity codes rather than actual symbols because the browser may decode these symbols as code, not text.
Por ejemplo, &lt; for <, &copy; for copyright
You can do this a bit easier using Emmet on classes 

`h1.brand{title}|c` (c for "code"; it also inserts start & finish lines) gives
```HTML
<h1 class="brand">title</h1>
<!-- /.brand -->
```

`h1.brand{title}|e` (e for "encoding") gives
```HTML
&lt;h1 class="brand"&gt;title&lt;/h1&gt;
```

`h1>h2+h3+h4` gives
```HTML
<h1>
	<h2></h2>
	<h3></h3>
	<h4></h4>
</h1>
```

`h1>h2+h3+h4|e` gives
```HTML
&lt;h1&gt;
&lt;h2&gt;&lt;/h2&gt;
&lt;h3&gt;&lt;/h3&gt;
&lt;h4&gt;&lt;/h4&gt;
&lt;/h1&gt;
```
You can add `<pre></pre>` (pre for "preserve") to maintain whitespaces. If you don't have the `<pre>` tag, you have to manually insert `<br>`.

#####Etcetera
- You can increase page speed score by 'minifying' codes: unify different files, delete whitespace, delete comments, change variable names at the build level (YUI Compressor)
- In Brackets, you can edit CSS for an in-HTML selected tag very easily using right-click > quick edit or `ctrl+E`
- inside `<head>`, there are `<meta>`, `<title>`, `<link>`
- You can make your own favicon (Favorite Icon) by typing `link:favicon` with Emmet and doing the same thing as linking css
- Use anchor to create hyperlinks? Yes.
- To copy and paste a whole line in Sublime Text, use ctrl+ins -> shift+ins

#####Jump
- use id like so: `<h3 id="agenda">Table of Contents</h3>`
- you can jump back to a specific place by using anchor: `<a href="#agenda">Go to agenda</a>`

#####image
- `<img src="img/image.jpg" alt="http://imgur.com/jej3Q.jpg">` gives:
- <img src="img/image.jpg" alt="http://imgur.com/jej3Q.jpg">
- 이미지 사이즈는 96ppi 이런거에 영향받지 않음
- 파일크기는 100KB 이하가 괜찮음. 
- If not working with photographers who work with AdobeRGB or ProPhotoRGB, sRGB is okay. If so, Don't convert to sRGB. Remember to embed color profile. Color profile is very important! refer to 김환 교수 
- [Placeholder](placehold.it)
- in snippet, writing the code below
```HTML
<img src="http://placehold.it/${1:600}x${2:400}/${3:000}/${4:fff}/?text=${5:Hold}" alt="${5:Hold">
```
instead of 
```HTML
<img src="http://placehold.it/600x400/000/fff/?text=Hold" alt="Hold">
```
will let you press tab to change desired variables.
`![Hold](http://placehold.it/300x200/000/fff/?text=Hold)` or simply `![alternative text](image src)` is the syntax for using images in markdown

![Hold](http://placehold.it/300x200/000/fff/?text=Hold)


# TO DO
1. Read about http-equiv (https://www.w3.org/TR/html5/document-metadata.html#attr-meta-http-equiv)
1. Read about UTF-8 [Wiki](https://ko.wikipedia.org/wiki/UTF-8)
1. difference between URI and URL?
1. Read about [MIME Type](https://en.wikipedia.org/wiki/Media_type)
1. What is Browser Hack in CSS?
1. Read about color profiles
1. [See](http://naradesign.net/wp/2007/03/27/118/) which are actually Standard Mode or Quirk Mode &#10003;
1. What is DTD? &#10003;
1. Install GitHub preview &#10003;
1. Install Korean Ipsum &#10003;
1. Review: 상대/절대 주소 &#10003;
1. difference between anchor and link &#10003;
1. What is viewport? &#10003;