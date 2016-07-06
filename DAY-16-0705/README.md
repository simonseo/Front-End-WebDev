###### Front End Web Development School

#Day 16 TIL

### 어제 과제 리뷰 (Team list / speaker list)
- sectioning 요소 내부에는 제목이 없으면 경고가 뜬다. 하지만 div 안에 제목이 있어도 된다.
- 트위터 아이콘 등에 탭네비게이션이 올라가면 go to 누구누구 twitter이라고 명시적으로 말해줘야 한다.
- 구글 웹폰트는 한번에 여러개를 불러올 수 있음. `family=Montserrat|Open+Sans` 웹폰트 사용할 때 파이프라인 "|"를 사용하면 오류가 나온다. 특수문자는 사용하면 안되고 엔티티 코드로 바꿔줘야 함. 파이프라인은 "%7C"이다.
- Sublime Snippet을 CSS에서 사용하면 오류남. 따라서 탭트리거 끝에 슬래쉬를 붙여줘야 됨. 
- 나중에 ARIA를 배울 때는 div에도 role="group"을 주면 좋음.
- 이름을 대문자 주기 위해선 text-transform 하면 됨
- .ir image replacement 테크닉은 접근성 문제가 있기 때문에 나중엔 .ir-look 도 추가. 트위터 아이콘에 아리아를 사용하면 go to 도 일일이 적어주지 않아도 됨.
- svg sprite는 그냥 svg 코드 2개이다. fill="blue" 하면 간단하게 색 변경 할 수 있음.
- rem 단위는 IE 9 이상 되지만 font shorthand 는 IE 11 이상만 가능하다.
- 템플렛을 만들어두면 나중에 JSON + Javscript로 관리하기가 쉬워짐.
- background: transparent url() repeat 0 0 scroll;` 기본값


###box-sizing (01-css-box-sizing.html)
사람들이 계산하기 힘들고 레이아웃 무너지는게 무서워서 만들었다.
- `box-sizing: content-box;` 가 표준의 기본으로, `width`와 `height`는 컨텐트의 그것을 말한다. 
- `box-sizing: border-box`를 적용시키게 되면 `padding` 과 `border`까지의 영역을 포함한 값을 일컫게 된다. `margin`과 `outline` `box-shadow`등은 너비높이에 포함되지 않는다.

###Vertical Rhythm (02-vertical-rhythm.html)

포토샵의 adjustment tool의 gradient fill 에 가면 여러 스타일이 있다. CSS에는 linear, radial 만 지원된다. (각도는 포토샵은 기하학적 0도, CSS는 시계 0도를 사용) 0도라고 설정하면 `0도를 향해서`라는 뜻이다. Stop을 추가해서 opacity/colour 늘릴 수 있음. bgi는 svg로도 되고 함수로도 된다. 이 중 그래디언트 함수는 IE10 이상 지원된다.

```css
/* background-image: linear-gradient(angle, color-stop 0%, color-stop 40%, color-stop 60%, color-stop 100%)
컬러는 transparent도 가능함
angle 은 to top, to top left 등도 가능함.  */
body {
	background-image: linear-gradient(180deg, skyblue, blue); /* 위에서부터 아래로 하늘색~파란색 */
	background-image: linear-gradient(180deg, skyblue 50%, blue 50%); /* 가운데에서 뚝 바뀜 */
	background-image: linear-gradient(180deg, transparent 96%, skyblue 96%); /* 그리드라인이 생김 */
}
```

###Position
- 박스의 안쪽이 양수, 바깥쪽이 음수이다. (ex. top은 윗쪽이 음수, 아랬족이 양수)
- display가 자동으로 block으로 바뀐다.
- float와는 다르게, 부모가 감싸는 방법은 없고 width height를 지정해줘서 감싸는 것처럼 보이게만 할 수 있다.
- static을 제외하고 모두 z-index를 같이 써줘야 함. 모든 정수가 가능하지만 10이나 100단위로 써주는게 유지보수에 좋다. z-index 특징: 부모요소의 높이 근처에서만 날뛸 수 있다.
- static (기본값)
- relative: 본인의 Normal Flow에 의한 원래 위치에 상대적인 위치. 이동 하더라도 Normal flow를 깨지 않기 때문에 다른 속성에 영향을 주지 않는다.
- absolute: 가장 가까운 static이 아닌 부모요소에 상대적임. 보통 부모요소는 normal flow를 깨고 싶지 않기 때문에 쓰고 싶은 요소에 relative를 쓴다. (자바스크립트에서는 offset parent라고 부름. 옛날 조건으로 절대적임 - 전부 static이면 화면이 기준이 되기 때문) z축을 지정하면 (모든 정수) 어떤 레이어가 위에 오는지 지정할 수 있음.
- fixed: 스크롤해도 같은 위치에 있음. 스크린 (viewport, screen) 에 상대적임. 기본적으로는 absolute와 비슷함

###과제1 (03-momentum-theme-layout.html)
Google Chrome의 Momentum Theme의 레이아웃을 Position을 사용해서 만들어라.

###과제2 (04-ui-kit-typography.html)
UI Kit.psd  


##Questions
- Difference between outline and border?