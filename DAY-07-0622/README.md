
property attribute
parameter

object (나머지가 사용함, 표준) 이미지 비디오 플래시 자바애플릿. 거의 플래시를 위해 사용함. 내부에 {대체 텍스트}넣음.
embed (ie가 사용했었음, 이제는 표준 ) 


축약어 
NN (현재 표준) <abbr title="Extensible HTML">XHTML</abbr>
IE (Deprecated) <acronym title="Extensible HTML">XHTML</acronym> 은 HTML5에서 탈락함.

웹 정보
<address></address> for web addresses / email / phone. You can't use a block element inside address. Nowadays, it's not very used; you can use p instead. 

인용
긴 인용 <blockquote><p></p><cite></cite></blockquote>
짧은 인용 <q></q>

첨삭
<ins></ins>
<del></del>

code~
<pre></pre> preserved text
<code></code> computer code
<kbd>ctrl+alt+del</kbd> keyboard code

dfn

frame
페이지 중 실제로 변하는 부분 (excluding nav and sidebar)만 바꾸게 하기 위해 .html파일 여러개를 로딩하는 방식. 현재는 AJAX 기술로 대체 가능하기 때문에 비표준이 됨.
doctype frameset DTD 따로 있음.
HTML에서는 px 안 쓰고 %만 씀.
하지만 iframe은 살아남음.

Age of HTML5
Google 2009 Google Gears 중단 선언, HTML5 집중 선언
Youtube WebM으로 변환 (HTML5 표준)
Apple 2010 Flash 중단
IE9, 10 2011 HTML5 지원
Adobe vs Apple -> Android가 플래쉬 흡수

2004년에 XHTML2.0에 반발한 파폭,사파리,오페라 (+이후 구글)이 W3C의 HTML을 계승해 WHATWG를 만들고 HTML5라고 불리는 걸 2008년 만듬. HTML5 = HTML (시멘틱 요소, ) Javascript API(위치정보, 멀티스레드, 오프라인 )
Web Form 2.0, Web Application 1.0

caniuse.com 어떤 기술이 지원되는지 확인 가능
html5test.com 브라우저 테스트 

우리나라는 모든 브라우저가 지원될 때까지 기다린다.
해외는 되는 브라우저는 되게, 안되는 건 안되는대로.

차이점 
XHTML의 />가 없어짐

header
section > article, aside, nav, main
footer

time

summary+details

figure>div 이미지/그래픽
figcaption

progress 상태표시바

canvas 자바스크립트

sectioning elements: section main article aside nav. 
main: You should only use one <main> element on a page, and it shouldn’t be placed within an <article>, <aside>, <header>, <footer>, or <nav> element.
<article> element should contain a piece of self-contained content that could be distributed outside the context of the page.
header footer can be inside anything
there can be several navs

using class is better than using id 

Block elements
div, table, form, h1~6, ul, ol, li, p, pre, bq
If you haven't designated a specific style, width is as big as the parent element's.
The height is independent of the parent element, but dependent on the children.
You can set height and with
Blocks can have inlines

inline
a, em, img, input, label, span, strong
its width and height is dependent only on the children elements
you cannot set width and height
inlines, with the exception of <a>, cannot have blocks inside. <a> cannot have another clickable component.
with the exception of img, margin, padding 속성의 상 하 설정이 불가능하다.

inline block (img)
basically acts like inline but you can control width and height like block


CSS

```css
selector {
	property: value;
}
```
1em = 1*equivalent of M.
1em = 16px
30 = 30em = 480px

if there are the same style attributes inline and in css, inline takes 우선권.
You can see the hierarchy in developer tools. The ones in the bottom have less power. 
개발자들은 "inline 안하면 개발 못한다"고 말한다. 왜? `$0.style.color`을 자바스크립트로 했을 때 안 나옴. 하지만 `window.getComputedStyle`로 할 수 있음.

@charset "utf-8";

@import "";
@import url("");

color pickers
SIP - mac
picpick - window tool

csszengarden.com shows the power of css. All pages on this website has the same content and only different css. 

selector hierarchy
1. inline style 1000 `<h2 style=""></h2>`
1. id 100 `#this-element`
1. class 10 `.these-elements`
1. element 1 

simplify
- singles (grouping - if you want to apply same styles they can be listed together by commas) `#this, #thiis, #thiiis`
- multiple selector (connected by space; adds up) `article .these`
- * (additional 0) `#everything-in-this`


#TO DO 
span element?
http://blog.teamtreehouse.com/use-html5-sectioning-elements\
http://webdir.tistory.com/310

#Questions
@import 비추인 이유? 직렬식으로 파일을 불러오기 때문. <link>는 병력식으로 불러옴. 그럼에도 불구하고 호출은 호출이기 때문에 병합이 제일 빠름. 따라서 나눠서 관리하고 병합해서 업로드하느넥 제일 좋음. 