###### Front End Development School

#Day 9
###CSS selectors and file format type
글자가 깨지면 charset을 설정하면 된다
/*! filename.* ⓒsimonseo.github.io, 2016 */
/*CSS 선택자 
http://www.w3schools.com/cssref/css_selectors.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
CSS1
	요소 선택자 E
		0001
	그룹핑 E, E, E
	아이디 선택자 `#`id
		0100
	클래스 선택자 `.`classname 
		E.class-name 특정한 상황에만 쓰고 싶으면, 디자인 컨셉이 명확한 경우, 굳이 요소를 제한해야할 경우  요소이름도 넣어주면 좋다. 0011점?
		.class-name 요소 이름이 없으면 재사용이 쉬울 수 있다. ()
		.class-name1.class-name2 멀티클래스, 교집합. HTML: <p class="class-name1 class-name2">; IE 6 에서는 클래스 순서를 바꾸면 인식 안됨.
		.class-name1 .class-name2 자손 내부 전체
		0010
	전체 선택자 `*`
		0000
		html요소 전체를 선택하지만 부하를 일으키기 쉽기 때문에 필요할 때만 해라.
	자손 선택자 ` `
		E_a E_d
		띄어쓰기. 마지막에 있는 요소만 스타일링 해줌.
		E없이 쓰면 html요소 전체를 선택하지만 부하를 일으키기 쉽기 때문에 필요할 때만 해라.
CSS2 (IE 6 미지원, 7 버그; 하지만 둘이 합쳐서 2%도 안됨.)
	직계 자식 선택자 `>`
		E_p > E_c
		E_p > *
		점수는 꺾쇠 없는 거랑 똑같음
	인접 형제 선택자 `+`
		E+E+E
		마지막 요소만 스타일링해줌.
		틀이 무너지지 않아야 한다. 틀이 무너질 가능성이 높으면 형제 선택자를 쓰면 안된다.
	General sibling selector `~`
		A ~ B
		all sibling B elements that follow A
	Attribute selector `[attr]` or `[attr="value"]`
		IE 7, 8에서 버그 있음
		#name == [id="name"]
		.classname != [class="classname"] 전자는 classname을 포함만 하면 됨. 후자는 정확히 일치해야 함.
		a[href^="classname"] | [class$="classname"] 전자`^=`는 classname으로 시작/ 후자 `$=`는 classname으로 끝나야 함. 후자는 file extension icon 다는데 유용하다.


emmet은 css 선택자를 사용한다.

점수가 같은 경우 아래 써있는 게 우선.

문서를 보면 객체를 만든다
HTML은 Box 모델을 사용한다
- content
- content box
- padding box
- border box
- margin box
- offset box

user agent stylesheet: 웹브라우저가 기본적으로 가지고 있는 스타일시트. 이것도 표준은 있지만 브라우저들이 잘 안 지킨다;
margin: 8px 이라고 써있는 건 top right bottom left 전부를 간단하게 나타낸 것 (시계방향);

영어는 밑줄에 맞춤, 10~11px 많이 쓰임
한글은 가운뎃줄에 맞추고, 13~14px

html에서 클래스/아이디 등이 있어도 css에 안 써놨으면 개발자 도구에서 안 보임.
이름은 옆사람한테 아무 설명 없이 줘도 알아들을 정도로 명시적으로 써라! button->btn 정도는 괜찮음. cancel->c는 안 괜찮음.
줄여쓸거면 주석이라도 달아라

rgba의 a 는 알파값. 투명도

magic brush plugin for PS
선택 - 채널 사용해야 된다
key color
remote color
*/
/* font-size를 정해주면 그 요소 안에서는 1em이 그게 된다.*/
	/*상속-덮어 쓰는 형식*/
	/*font-size: 1.25em;*/
	/*폰트를 상대값으로 하려면 20/16 꼴로 나타낸 후 ctrl+shift+y 해주면 알아서 계산해줌 20px 이라고 쓰는 것과 같음*/

`lst+mt0+mb0+pl0+tab` : 
```
list-style-type: ;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
```
코드가 반복되면 같은 클래스로 묶어주면 좋다! 클래스가 너무 많아도 안 좋으니 반복되면 써라.
#TO DO

#QnA
- What is a Grid System
- 인터넷 속도를 물어보고, 그에 따라 다른 이미지 퀄리티를 불러줄 수 없을까?
- HTML5에서는 <a> 요소가 블록 테그 요소를 감쌀 수 있다. 그러나 요소 내부에 '어떤 컴포넌트'가 있다면 문법 오류가 생긴다. 그 어떤 컴포넌트는 무엇인가?
- what's needed/recommended in tables: caption, title, etc.
- Grid & framework design = adaptive?
- Why use multipart/form-data for binary data?
- What is binary data?