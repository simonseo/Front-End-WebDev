###### Front End Web Development School

#Day 14 (07.01) TIL




##Using Photoshop for Front End

######Setting up
- 현재는 메모리가 풍족하기 때문에 90% 이상 쓰게 해줘도 괜찮다. 32비트는 50%까지밖에 못 씀. 64비트는 이론적으로 더 많이 할 수 있음
- History States: takes up memory. Try to use only a little.
- cache levels: What is this??
- cache tile size: 애니메이션 작업하면 커야됨. 면의 크기?
- photoshop > info panel > efficiency shows how efficient your setting is?
- text tool > strong/none/windows lcd / windows(crt) 해당 환경 에뮬레이트
- view > proof to check how things look in different environments
- (gamma 2.2 (window, now standard, currnet mac) / 1.8 (legacy mac) gamma의 차이

######Why do we use 96ppi (marked screen resolution in photoshop preferences)?
- pxvalue=ptvalue*(96/72)
- 디자이너는 환경을 고려해야한다. CSS를 설계할 당시 96ㅔㅔㅑ를 기준으로 했다. 마치 인쇄환경에서는 RGB가 아닌 CMYK. 웹과 앱도 환경이 다르다. 
- 인쇄에서 12pt가 많이 쓰였는데 그걸 스크린에서 사람이 보기에 같은 사이즈를 12px로 구현하고자 했다. Xerox사의 마우스를 ㅁ애플2에 가져가고 gUI에 도달함. 여튼 애플이 구현한건 1 인치 안에 72 픽셀이 있으면 같은 크기라고 생각을 했다. 당시 모니터는 16px=16pt가 맞았을 것. 하지만 MS에서는 "아니다, 사람들은 모니터를 더 멀게 보기 때문에 96ppi가 더 같아 보인다."라고 해서 현재는 웹에서는 96ppi를 쓰고 있다. 그렇기 때문에 현재에 16pt는 16px보다 크다.

######png로 내보내기 / 웹용으로 내보내기
- png는 w3c가 gif 대체용으로 만든것으로, 8, 24, 32비트 있는데 윈도우?포토샵?는 32비트를 지원 안함. 색이 많으면 24비트로 내보내셈 (섀도우 등 톤이 다양한 걸 내보낼 때)
- 스마트폰 & 보통 노트북은 srgb를 사용하고, DSLR이나 고급 모니터등은 AdobeRGB 이상도 가능하다.
- 그래서 내보낼 때는 convert to sRGB를 눌러주면 색을 최대한 가깝게 표현 가능
- 모니터/프린터/시간대/조량 등등 색 표현력이 다르기 대문에 [표준에 맞춰주는게 좋다](http://www.slideshare.net/jeehoon/consistent-color-management). 따라서 주기적으로 스파이더 등으로 캘리브레이션 해줘야함.

###Typography
- 90% of the web is text-based. it is important to design body text and headings.
- 읽기 편하게 하려면 이미지 하나당 글 5줄 정도 하면 환기가 된다. 
- font: typeface(font-family), weight, color, size(font-size), decoration(del, ins 등)
- typography: alignment(left, middle, right, justified)
	- CSS3에 마지막 줄만 left-align하는 기능이 추가됨
- font-size는 정수인게 좋다. 포토샵은 기본이 pt라서 px로 바꿔주는게 좋다.
- 자간 속성
	- 트래킹 tracking - 글자와 상관없이 똑같게 하는 것
	- 커닝 kerning - 글자에 따라서 자간을 다르게 하는 것.

hyphenate 긴 단어를 하이픈 처리해 떨구는 것
- 인덴트
	- indent margin-  `padding`
	- indent first line - `text-indent`

글을 아무 데나 놓으면 위치 계산하기가 힘듬 ruler (ctrl+r) + 가이드라인 사용
행간>어간>자간


line height의 기본값은 (웹, 포토샵) 120%=1.2이다.
line height에 퍼센트를 안 쓰는 이유는? 버그가 있다.


######font-size:
xx-large
x-large
medium
small
x-small
xx-small

######font-style:
normal, italic, oblique, inherit
http://creativepro.com/typetalk-italic-vs-oblique/

######font-variant:
small-caps (small capitals) lowercase uppercase capitalize etc

######font shorthand
font: size/line-height family; 필수
font: style weight size/line-height family; 선택적으로 style이나 weight를 각각 넣거나 안 넣을 수 있다.
font: weight style size/line-height family; 선택
'font'
	> Value:  	[ [ <'font-style'> || <'font-variant'> || <'font-weight'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar | inherit

자간의 단위: 대략 em 한 글자를 1000개로 나눈 것과 비슷함. . 
######word-spacing: 0.05rem;

######white-space values:
nowrap 줄바꿈 안함
pre whitespace 유지 pre요소랑 비슷함
pre-wrap

######vertical-align
px em %도 사용 간으

######text-decoration
none underline overline strikethrough

######display:
none, block, inline, inline-block, list-element, table-cell etc., etc.
none || width height 0 은 스크린 리더가 안 읽어줌

display: none vs visibility: hidden :visibility just makes it invisible, not erase.

######overflow:
visible 넘치는 것도 다 보임
hidden 넘치는 건 안 보이게 함
scroll 넘치든 안 넘친든 스크롤 있음
auto 넘치면 스크롤해서 볼 수 있음

######float
left, right, none
float가 있으면 한 단계 뒤로 흘러가는 것. box1,2,3가 순서대로 있을 때 box1에 float:left를 주면 2,3가 위로 올라오고 2는 1 뒤로 숨는 것처럼 보인다. 하지만 텍스트의 경우 숨지 않고 옆을 감싼다. 전부 float:right를 주면 왼쪽부터 3,2,1이 된다. 
box 1 height > 2=3 이면 box3은 1 바로 밑이 아니라 2 밑으로 떨어진다.


###IR Technique (image replacement)
중요한 건 text-indent를 안드로메다로 보내버리는 거


##Questions
- cache levels: What is this??
- cache tile size: 애니메이션 작업하면 커야됨. 면의 크기?
- how do you interpret this syntax from W3C? 
	- Value:  	[ [ <'font-style'> || <'font-variant'> || <'font-weight'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar | inherit

##과제
background-size
box-shadow
border-color
float
이용해서 사진 프레임 만들기