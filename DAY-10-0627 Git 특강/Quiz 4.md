FDS_TEST__2016/06/27
「프론트엔드 개발 스쿨」 강의 진행 결과를 확인하고, 수업 내용을 복습하기 위한 수강생 테스트입니다. 총 10문항으로 구성된 각 질문에 알고 있는 바를 기술하여 문제를 풀어보세요. ^ㅁ^


1. 작성자 이름을 알려주세요. 



1. 다음 CSS에 대한 설명 중 옳은 것은? 
	- CSS의 Full Name은 Casting Style Sheet이다.
		- 아니다. Cascading Style Sheet이다.
	- CSS는 HTML의 파트너로 인터랙션 디자인을 담당한다.
		- 아니다. CSS는 동적인 디자인을 담당한다. 요즘은 애니메이션도 가능하지만 인터랙션은 자바스크립트를 사용.
	- CSS는 JavaScript를 완벽하게 대체하는 New Language이다.
		- 아니다. 인터랙션 부분을 대체하지 못했다.
	- CSS는 동적으로 문서에 요소를 생성하거나, 추가 삽입, 제거, 복제, 이동 등을 행할 수 있다.
		- 아니다. 그 부분은 자바스크립트가 필요하다.
	- 답이 없다. &10003;

1. CSS 문법에 대한 설명 중, 틀린 것은? 
	- CSS는 문서의 요소(Document Elements)를 선택할 수 있는 선택자 문법(Selector Syntax)을 제공한다.
		- 맞다.
	- CSS의 선언 구간은 중괄호({})로 묶여 진다.
		- 맞다. `selector선택자 { property속성 : value값; }`
	- CSS의 선언문은 속성과 값으로 정의 되며, 속성과 값을 구분하는 구분자는 세미콜론(;)이다. &10003;
		- 아니다. 구분자는 세미콜론이 아니라 콜론이다. 
	- CSS 문법 오류 발생 시, 오류가 발생한 부분의 뒤에 위치한 코드는 스타일 적용이 되지 않는다.
		- 모른다. 하지만 답이 하나이기 때문에 이것은 맞을 것이다.
	- 답이 없다.

1. <a> 요소에 수치(width, height) 속성을 주기 위해 꼭 필요한 스타일 선언을 모두 선택한다면? 
	- `display: inline;`
	- `display: block;` &10003;
	- `display: none;`
	- `display: inline-block;` &10003;
	- 답이 없다.


1. 모든 요소를 선택하는 유니버셜 선택자(Universal Selector)는? 
`*`


1. 다음 중 CSS 문서의 최 상단에 위치해야 하는 규칙은? 
	- `@import` char보다 아래
	- `@charset` &10003;
	- `@media` 어디에나
	- `/*! license-comment.css */` char보다 아래
	- 답이 없다.

1. HTML 구조(↓ 이미지)를 참고하여 적절한 선택자를 작성하시오. 
class 속성 이름이 child 여야 하고, 단락의 의미를 가진 요소 선택자.
`p.child`
![childparentlistulblahbalh](http://i.imgur.com/rmGtxho.png)


1. HTML 구조(↑ 이미지)를 참고하여 적절한 선택자를 작성하시오. 
`id="parent"`인 요소의 자식 중 `class="child"` 인 요소를 찾아, 그 중 1번째를 제외한 나머지 형제 요소들을 찾는 선택자.
`#parent > .child ~ .child`


1. 다음 두 선택자를 비교하여 차이점을 명확하게 기술 하시오. 
`.front-end` VS `[class="front-end"]`
전자는 해당 클래스가 있기만 하면 되고, 후자는 해당 클래스(들)만 있어야 된다.


1. 다음 중 새 창으로 열리는 외부 링크 요소를 선택하는 선택자는? 
	- a[href]
	- a[href][title]
	- a[href="http://"][title]
	- a[href="http://"][title="_blank"]
	- 답이 없다. &10003;
		- `target="_blank"`, 그리고 `[href^="http://"]`

1. 스타일 코드를 모듈화(Modularization)하는 이유는? 
	간편한 비쥬얼, 효율적인 관리, 리팩토링


