###### Front End Web Development School

#Team Activity 3 (Aweare Website Structuring & Styling)
[웹표준 준수] HTML, CSS 문법은 유효한가?
[접근성 고려] 사용자 입장에서 접근하는데 문제가 없는가? (음성 출력/키보드 접근 등)
[의미 구조화] HTML 구조는 올바른 의미를 가지는가?
[스타일 모듈] CSS 스타일 디자인(설계)는 효율적으로 작성되었는가?
[네이밍 규칙] HTML, CSS에 설정된 이름은 간결하며 읽기 용이한가?
[코드 최적화] 불 필요한 <div> 또는 <span> 요소의 남용 및 무의미하게 중복되는 스타일 코드는 없었는가?
[팀원간 소통] 코드는 읽기 쉽고, 간결한가?

문법
img empty
article heading


의미 구조화
header: logo h1 
what about hamburger? just button
roh: util > hamburger >nav
simon: hamburger + nav>ul
how many navs? some say 1. some say 6
footer-nav: fixed following?

blocks:
class naming: .col-1~4 .row1~4 등 - 부트스트랩에서 그게 좋음.



main? 이름 짓기 힘들어서 안함. 

reset+common+style

이미지 추출은 어떻게 하나ㅏㅏㅏ
정품을 쓰자!
쬐끄만 것들 어렵다 - 스파리읕??

헤딩 태그 HTML Outliner로 봤을 때 깔끔하면 좋을 것

아이템 카테고리는 하면 안되겠다.

img hover: 

label: 가상요소 안씀 일부러.


#TIL

##Typography Review

###Type-Scale Ratio
H6를 1로 잡았을 때 매 단계마다 똑같은 비율을 곱한다. [다음](http://www.type-scale.com)은 일반적으로 사용되는 비율이다.

Minor Second
Major Second
Minor Third
Major Third
Perfect Fourth
Augmented Fourth
Perfect Fifth
Minor Sixth

###Baseline
Row 사이 간격으로 글자크기를 포함하는 높이를 말한다.
기본(버티컬리듬)에 충실하면서 한가지 특이한 점을 갖는게 중요함. 
ascender
baseline
descender

###Vertical Rhythm
각 요소간의 수직적인 공간 배열 관계. 리듬을 지켜주면 읽기 편하고 정돈된 느낌.

[ line-height을 구하는 공식 ]
1) ceil( 글자 크기 비율(1.24) ÷ 기본 행간 비율(1.5) ) = 글자 크기가 차지하는 행의 개수
   1.24/1.5 = .826666667 => 1개
2) 기본 행간 비율(1.5) ÷ 글자 크기 비율(1.24) × 행의 개수
`line-height / 글자 크기 = 기본행간 * 행 개수`
   1.5/1.24 = 1.209677419 * 1


Use Metric Prefix + role="Heading" to extend 6 levels of headings
[여기](http://www.gridlover.net/try)에서 더 쉽게 할 수 있다.

###Position
- display가 자동으로 block으로 바뀐다.
- float와는 다르게, 부모가 감싸는 방법은 없고 width height를 지정해줘서 감싸는 것처럼 보이게만 할 수 있다.
- static을 제외하고 모두 z-index를 같이 써줘야 함. 모든 정수가 가능하지만 10이나 100단위로 써주는게 유지보수에 좋다. z-index 특징: 부모요소의 높이 근처에서만 날뛸 수 있다.
- 포지션을 부모요소 기준으로 바꿔주고 translate로 수정해주면 좋다. position에서의 %는 부모 기준이지만 translate의 %는 본요소 기준이다. 

###Webfont
button 안에 컨텐츠가 있을 때는 aria-hidden="true" 해줘서 아이콘이 따로 스크린리더에 읽히지 않게하지만,
컨텐츠가 없을 때는 aria-label="play" 등으로 어떤 버튼인지 알려줘야 한다. 

###[Radial Gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient)

### fixed position
bg를 여러개 불러오면 왼쪽에 있는게 가장 윗 레이어가 된다.
halftone - 구슬구슬
```css
body {
	background: 
		linear-gradient(45deg, hsla(0,50%,0%,0.3) 50%, transparent 50%), 
		linear-gradient(135deg, hsla(0,50%,0%,0.3) 50%, transparent 50%), 
		url(../images/Rain-City.jpg) no-repeat center;
	background-size: 
		30px 30px, 
		30px 30px, 
		cover;
}
```
bgsz 는 background를 불러온 순서대로 적용된다. 그래디언트에서 width height 값은 각각의 사각형 블럭에 대한 것이다.

```css
::selection {
	/* text-shadow: x-offset y-offset blur color */
	text-shadow: 0 0 2px rgba(0,0,0,0,7);
	}
```

### 브라우저에서 직접 코드 수정하기
개발자 도구의 Resources 탭에서 폴더를 끌어서 넣어주고 파일에 오른쪽 클릭, map to network resources 하면 elements 탭에서 +를 꾹 눌렀을 때 파일에 직접 수정을 할 수 있다. 다른 수정사항도 그냥 저장된다. HTML 수정은 Sources 탭에서 하면 되는데, add attribute 정도는 elements 탭에서 할 수 있다. 