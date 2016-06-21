###### Front-End Development School

# 야무님의 QnA 및 팁
1. 선택한 영역 양옆에 백틱 (`) 을 넣고 싶으면 매크로를 사용해야 함.
1. `http-equiv`의 `X`는 "비표준"임을 나타냄. 그럼 UA는?
1. `CSS1Compat`의 `CSS1`은 무슨 뜻? 1996년에 스타일을 효율적으로 관리하기 위해 CSS가 생김 (CSS1). 기존의 모드와 CSS를 지원하는 모드를 구분하기 위해 `BackCompat`와 `CSS1Compat`이라고 이름을 지음. 이름을 잘 못 지음.
1. `!IE` 라는 건 예전과 다른, 표준이라는 뜻
1. class attribute을 여러개 지정하고 싶으면 `class="lt-ie10 let-ie9 ie8"` 이런 식으로 띄어쓰기를 하면 된다.
1. CSS에서 여러개의 class가 공통적으로 적용되는 엘리먼트를 스타일링 하고 싶으면 `.lt-ie10 .target { margin-bottom: 2px; }`
1. `IE=Edge`가 없으면 IE가 무슨 버젼이든  IE 7으로 동작됨. 그래서 가능하면 최신 기술을 사용하라고 명시해놓음. Cross browser test에서도 편리함. `.htaccess` (서버 파일)에서 이걸 명시해놓으면 html파일에서 할 필요는 없다.
1. 프론트엔드 개발자에게는 사용성, 접근성, 성능을 높이는 것이 중요하다.
1. Making your own convention/guideline can also be a great addition to your portfolio.
1. Create/customise themes - Another portfolio item!
1. jade/pug can contribute to speed

# Day 2 Review
1. 제목 `h1`~`h6` class를 이용해서 6가지 이상 사용하는 눈속임 가능.
1. `link` 와 `anchor`는 `head`에서만 사용 가능
	1. `link`는 `rel` 써줘야 함
	1. `anchor`는 일반과 # 사용 가능
1. 문법 검사: use W3.org

# Day 4 TIL
#### Image
- 필수 속성 두가지 `src` (source), `alt` (alternate text). alt도 똑똑하게, 차별 없이 해주는게 좋음. `longdesc` (image long description) 사용해서 alt에 링크를 달아준다?
- `width`, `height` 를 미리 설정해주면 브라우져에서 그 공간은 reserve해둠. 그렇기 때문에 이미지가 로딩되면서 글씨가 왔다갔다 하지 않음. 더 좋은 사용자 경험.
- If you press `ctrl+u` Emmet updates width and height automatically
- `title="마우스 올리면 나오는 글 tooltip"` 하지만 모바일에서는 나오지 않음.

#### ImageMap
This is an old technology that lets you make an anchor on specific parts of images.
'''
<img src="" alt="" usemap="#MAP_NAME">
<map name="MAP_NAME"></map>
<!-- <map id="MAP_NAME"></map> -->
'''
there was a movement to start using id instead of name, but some browsers failed to follow along.
In jQuery plugin, you can create responsive image map.

##### ImageMap Attributes
1. img
	1. `src`
	1. `alt`
	1. `usemap` - #[ID]
1. map
	1. `name` - use this as an "ID"
	1. `id` - not really used
1. area
	1. `target` - `_blank` opens a new tab/window, `_self` opens in same window
	1. `shape` - `rect`, `cir`, `poly`
	1. `coords` - rect(`x1,y1,x2,y2`); cir(`center-x,center-y,radius`); poly(`x1,y1,x2,y2,x3,y3,...`);
		- summerstyle.github.io/summer 혹은 Adobe Dreamweaver GUI 이용해서 이미지의 좌표 알아낼 수 있음
	1. `href`
	1. `alt`


#### List
1. 순차목록 ordered list `ol` and 비순차목록 unordered list `ul`
	1. List item `li` - children of `ol` or `ul`
	1. `li` 말고 `div` 쓰는 사람들이 있지만 틀림.
	1. `ol`과 `ul`은 서로 포함할 수 있음
1. 정의목록
	1. Definition list `dl` 
	1. Definition term `dt`
	1. Definition description `dd`

정의목록 예시:
```
<h2>정의 목록</h2>
<ol>
	<li>
		<a href="">정의 목록 dl <code>&lt;dl&gt;</code></a>
	</li>
	<li>
		<a href="">정의 용어 dt <code>&lt;dl&gt;</code></a>
	</li>
	<li>
		<a href="">정의 설명 dd <code>&lt;dd&gt;</code></a>
	</li>
</ol>
```


#### Blockquote
blockquote 예시:
```
<blockquote cite="http://www.blog.naver.com/ssperson&amp;logID=341313526">
	<p>계획 자체는 중요하지 않으나 계획 수립은 무엇보다 중요하다</p>
	<cite>Dwight D. Eisenhower</cite>
	<p>여름 감기는 바보만 걸린다</p>
	<cite>서명근</cite>
</blockquote>
```

URL 주소에 `&`가 들어가면 `&amp;`로 바꿔줘야 한다

####Table
1. `<table></table>`
	- `border="1" cellpadding="10" cellspacing="0"` 등의 attribute이 있지만 표준이 아니다. 스타일링은 CSS에게 양보하자.
	- `summary="이 표는 3열 4행이며 내용은 어떠어떠하다."`라는 attribute도 있고 접근성에 도움이 되지만 표준이 아니다.
	- WAI-ARIA라는 방식이 있다. 아래 참조
	- tr th td 이 아이들도 `bgcolor="#fff"` 등의 attribute 있지만 마찬가지.
	- `<style>table, tr, th, td { border: 1px solid #ff00ff; }</style>` gives a violet border across the table.
1. `<caption>적절한 Table 제목</caption>` - child of `<table>`
1. `<tr></tr>` table row - Table is basically a row oriented structure. Wrap each row with `tr`.
1. `<th></th>` table header - Each header (wether they be a horizontal or vertical header) should be wrapped with `th`.
1. `<td></td>` table data - All data excluding the headers should be wrapped with `td`.


##### 접근성 높은 테이블 is it though?
1. `<thead></thead>` - Wrap the head row with `thead`.
1. `<tfoot></tfoot>` - Wrap the foot (like "total") with `tfoot`.
1. `<tbody></tbody>` - Everything else. 암묵적으로 (브라우저 마음대로) 생성됨.
1. `scope="row"` or `scope="col"` data 선택할 때마다 row/col을 말해주도록 하는 `<th></th>` attribute. 
1. email (and gmail) are still in the 20th century. Use slice tool in photoshop to make table design.
1. WAI-ARIA - summary 대신 쓰는 attribute. It is not enough to simply write a hidden text above the table (which is okay according to the Korean law).
```
<p id="metadata-table-summary">본 표는 ....</p>
<table aria-describedby="metadata-table-summary">
...
</table>
```
##### More about tables
1. `span="2"` - `tr`이나 `col` 엘리먼트에 붙는 attribute. 아래로/오른쪽으로 몇칸을 차지하는지 명시해줌
1. `col` - `thead` 위에 원하는 column 갯수만큼 넣음
1. `colgroup` - `col`들을 하나로 묶어주는 엘리먼트

아래처럼 쓰면 URL이라는 단어 중에 title (the first, by usage) attribute 가 있으면 마우스커서가 올라갔을 때 도움말 표시가 뜬다.
```
<style>
	abbr[title] {
		cursor: help;
	}
</style>
...
<a href="http://en.wikipedia.org/wiki/URL" target="_blank"><abbr title="Uniform Resource Locator">URL</abbr></a>
<abbr>URL</abbr>
```

####Form
1. get v post
	+ post is more secure. get puts data in url
	+ get only lets ASCII. Post allows Binary as well
	+ post can get erased.
	+ get is usually used for search
	+ post is usually used for information

####Elements
#####Meta tags
1. [메타태그 정리](http://cafe.naver.com/webstandardproject/603)
1. `<base href="[root 주소]">` 가 있으면 anchor element마다 주소를 전부 적어줄 필요 없음. root 주소 이후만 적어주면 됨.
1. Facebook 의 preview text에 들어갈 내용은 `<meta name="sailthru.rubric" content="America’s most successful cities, states and firms are leaving the rest behind">`
1. Twitter 는 `<meta name="twitter:image" content="https://cdn.static-economist.com/sites/default/files/images/2016/03/articles/main/20160312_USP502.jpg">`

#####inline and block (and list elements and none)
1. block's height defined by its children, its width defined by parents
1. inline's size is only defined by itself. So for some reason, text-align cannot be applied to inline displays. 
1. div is block, span is inline??
	+ div has no meaning. you can use ARIA (role attribute)

#### Emmet Tips
- If you press `ctrl+u` Emmet updates width and height automatically
- ctrl+shift+u change tag
- ctrl+shift+; delete tag
- ctrl+shift+g add tag
- ctrl+d edit points with same content (consecutive)
- Translate what this means in Sublime+Emmet: 

```
ul>li[title=$#]*>{$#}+img[alt=$#]|t
```

> it means that you take a chunk of information that has repeated levels. You get rid of the numberings with `|t`. Inside ul, for each line (`*`), you create an `li` element with title equal to the original line, and inside the `li` element is the original line and an image.

# TO DO
1. Read about http-equiv (https://www.w3.org/TR/html5/document-metadata.html#attr-meta-http-equiv) &10003;
1. Read about UTF-8 [Wiki](https://ko.wikipedia.org/wiki/UTF-8)
1. difference between [URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) and URL? &10003;
1. Read about [MIME Type](https://en.wikipedia.org/wiki/Media_type) &10003;
1. [GET](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) vs [POST](https://en.wikipedia.org/wiki/POST_(HTTP)) Methods
1. Read about color profiles
1. Sublime Text 강의 모르는 것 주말동안 모두 듣기
1. Emmet, Markdown cheatsheet 한번 읽어보기
1. 집 가는 길에 [Frontend Developer Handbook](http://www.frontendhandbook.com/) 읽어보기
1. [React.js](http://blog.coderifleman.com/post/122232296024/reactjs%EB%A5%BC-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8B%A41)가 뭔지 읽어보기
1. 질문: [pre 엘리먼트](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)는 스타일 적용이 안 되는가?
1. [WAI-ARIA(Web Accessibility Initiative - Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)

# Questions
1. Difference between merge and checkout?
1. We use `table, tr, th, td` to mean that we want some styling to apply for all four elements. What about styles that we want to apply to those that are all four, not just any of the four?