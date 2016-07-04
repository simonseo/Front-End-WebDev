###### Front End Web Development School

#####퀴즈 작성
- 각 문제는 ordered list로 작성하고, 장식은 모두 지운다.
- 몇단어짜리 코드는 단일백틱으로 둘러싸고, 긴 코드나 주관식 답안은 blockcode로 처리한다.
- 객관식: 다중선택/단일선택 상관없이 unordered list로 선택지를 나열하고, 정답 뒤에 체크표시를 한다. 내가 골랐는데 틀린 부분이나 코멘트는 해당 선택지에 하단 list element로 작성한다.
- 주관식: 문제의 하단 요소로 작성한다. 내 답은 일반 글로 작성하고 정답은 blockquote를 사용한다.



#Quiz 6 (2016년 7월 4일)

1. `<img>` 하단 알 수 없는 공간이 생길 경우, 이를 해결할 방법은?
	- `text-align: justify;`
	- `display: none;`
	- `vertical-align: bottom;` &10003;
		- float도 괜찮지만 이미지가 가지고 있는 속성을 바꿔주는게 더 좋을 것 같다.
	- `line-height: 1;`
	- 답이 없다.

1. 다음 중 성질이 다른 속성 값은 무엇인가요?
	- `uppercase`
	- `lowercase`
	- `small-caps` &10003;
	- `capitalize`
	- 답이 없다. 
		- 모두 `font-variant`의 속성값이다. 아니다?! small-caps는 variant고 나머지는 transform...?

1. "IR(이미지 대체) 기법"이란 무엇인지 기술해보세요.

	글의 위치에 이미지를 대신 삽입하는 것.

	>

1. 다음은 font 속기형 작성법입니다. 이 중 잘못된 것은?
	- `font: 14px sans-serif;`
	- `font: large/1 serif; &10003;`
		- 단위가 없다.
		- 아니다 line-height이다
	- `font: bold 22px;` &10003;
		- 필수인 font-family가 없다. (필수 font size, family)
	- `font: 1rem/1.5rem "Nanum Gothic", Sans-Serif;`
	- 답이 없다.

1. 다음 중 overflow 속성 값이 아닌 것은?
	- `visible`
	- `scroll`
	- `auto`
	- `hidden`
	- 답이 없다. &10003;

1. 다음 속성이 각각 적용된 요소는 어떤 차이가 있는지 기술 하시오.
`display: none;` VS `visibility: hidden;`

	전자는 스크린리더에 읽히지 않고 요소를 없애버린다. 후자는 눈에 보이지만 않을 뿐이다.

1. 다음 중 float 속성 값은?
	- `relative`
	- `absolute`
	- `none` &10003;
		- 보통 초기화할 때 사용한다.
	- `static`
	- 답이 없다.

1. float 속성이 적용된 아래 .target 요소를 화면 폭 600px 이하에서 float 해제하려 합니다. 이를 구현하는 코드를 작성해보세요. `.target { float: left; }`

	```css
	@media only screen (max-width: 600px) {
	  .target { float: none; }
	}
	```

1. 부모 영역을 넘쳐나는 자식 요소일 경우는 화면에 스크롤이 생기지만, 그렇지 않을 경우는 스크롤이 감춰지도록 코드를 작성해보세요.
.parent { /* 여기에 코드를 작성합니다. */ }

	```css
	.parent {
	  overflow: auto;
	}
	```

1. float: right;이 적용된 이미지 요소는 어떻게 동작 되어 화면에 처리되는지 자세하게 기술해보세요.

	스크린 z축으로 뜨고 오른쪽으로 붙는다. 해당 요소 전에 등장한 요소들에는 영향을 끼치는 않고, 밑에 있는 요소들에만 영향이 있다. 만약 여러 이미지 요소에 `float:right;`가 적용되었으면 코드에서 위에 있던 요소들이 오른쪽에 붙는다. 해당 요소 아래에 비어있는 요소가 있으면 이미지 뒤로 숨는다. 내용이 있으면 이미지를 둘러싸려고 한다.