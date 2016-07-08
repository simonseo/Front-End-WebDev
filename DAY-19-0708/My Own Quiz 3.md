1. 브라우저에서 그리드를 볼 수 있는 방법은 여러가지가 있다. 다음 그리드를 만드는 방법이 아닌 것은?
	- 포토샵에서 원하는 모양의 그리드를 그리고 한 칸만 저장해서 배경이미지로 불러온다.
	- gridcalculator.dk 에서 다운을 받아 브라우저로 연다. &10003;
	- linear-gradient 함수로 작은 크기의 그래디언트를 만들고 페이지 전체에 반복시킨다.
	- radial-gradient 함수에 grid 값을 주고 행렬 갯수를 준다. &10003;
	- 답이 없다.

1. Reset.CSS와 Normalize.CSS의 차이점은 무엇인가?
	> reset은 거의 모든 스타일링을 없애버리는 반면, normalize는 요소를 알아볼 수 있을 정도로 남겨둔다. reset은 브라우저마다 다른 기본 스타일을 같게 해주는 역할이 더 크다.

1. 다음 중 2016년 기준 세계적으로 가장 흔한 크기의 브라우저 크기는?
	- 1920x1080
	- 1600x900
	- 1366x768 &10003;
	- 1280x720
	- 답이 없다

```html
<div></div>
<div></div>
```
```css
:first-child { width: 80%; height: 140px; background-color: red; }
:last-child { width: 80%; height: 30%; background-color: blue; }
```
1. HTML문서에 body 내부에 div만 2개가 있다. 거기에 아래 두줄의 CSS 코드를 적용시켰다. 두 개의 div는 얼마나 성공적으로 애국기의 태극을 이루는가?

1. 다음 중 line-height값이 나머지와 다르게 나오는 것은?
	- div { line-height: 1.2;   font-size: 10pt }
	- div { line-height: 1.2em; font-size: 10pt }
	- div { line-height: 120%;  font-size: 10pt }
	- div { line-height: 12pt;  font-size: 10pt }
	- div { font: 10pt/1.2  "Spoqa Han Sans", Sans-Serif }
	- 답이 없다 &10003;


1. aria-label="play" 라고 써주는 이유는?
button 안에 content가 없을 때는 aria-label="play" 등으로 어떤 버튼인지 알려주어야 한다. 레이블이 없고 아이콘만 있는 경우 스크린리더기에 제대로 읽히지 않기 때문이다.

```css
button:selection { color:red; }
button:focus { outline: 10px solid blue; }
button:active { border: 10px solid green; }
button:hover { background-color: yellow; }
```

1. HTML에서 버튼을 하나 만들어서 위와 같은 상태 디자인을 했다. 버튼을 마우스로 누르고 있는 상태에서 버튼의 형태는 어떤가?
	- 초록색의 outline이 생긴다. &10003;
	- 파란색의 border가 생긴다. &10003;
	- 버튼 내부가 노란색으로 변한다. &10003;
	- 버튼 내부의 글씨가 빨갛게 변한다.
	- 답이 없다.


1. 별도의 텍스트에디터 없이 크롬 브라우저에서 파일 디렉토리를 불러오면 코드를 직접 수정할 수 있다. 개발자 도구의 어느 탭에서 수정이 가능한가?
	- Elements &10003;
	- Styles &10003;
	- Console
	- Sources &10003;
	- Resources

1. 다음 중 box-sizing: border-box; 를 적용했을 때, width 와 height 의 값은 요소의 어느 부분을 포함하는가?
	- padding &10003;
	- border &10003;
	- margin
	- outline
	- box-shadow
	
1. 웹폰트를 불러오거나 이미지를 불러오는 등 href 속성에 URI를 적을 때 사용할 수 없는 기호는?
	- '|' (vertical bar) &10003;
	- '+'' (plus / cross)
	- ' ' (space) &10003;
	- '%' (percent)
	- 답이 없다