###### Front End Web Development School

#Day 12
####Team Activity 2
#####홈페이지 특징 - [삼성서울병원 홈페이지](http://www.samsunghospital.com/home/main/index.do)
- 네비게이션 메뉴가 엄청 복잡하다
- 글로벌 네비는 3중 목록, 추가적인 링크도 많다.
- 유틸메뉴도 3중 목록
- Quick Menu라는 이름으로 따라다니는 네비가 있다
- 배너에는 이미지 몇 개에 글이 적혀있고 바로 밑에 작은 기능 6개가 있다.
- 알림판 4가지는 각각 글제목을 2개씩 프리뷰시켜준다. “+” 모양의 더보기 버튼이 있다.
- 로그인/회원가입 유도 섹션이 있다. 
- 컨텐츠는 카드 모양으로 정리가 되어있는데, 3개의 단으로 나누어져있다. 화면 크기에 따라 셋 모두 디자인이 다를 때도 - 있고, 두번째 세번째 단의 디자인이 같을 때도 있다.
- 푸터에는 특징적으로 부서홈페이지, 패밀리사이트, Language 메뉴가 있는데 공통적으로 클릭하면 더 큰 목록이 펼쳐진다.

#####논의 내용 - [삼성서울병원 홈페이지 마크업 리뷰 로그](https://docs.google.com/document/d/1scLdJOZ2OWT_CU7WezqFqRUPDPKwr0Ryc_U72UjUhCw/edit)
- Header가 무엇이며 어디까지가 헤더인지. `header>img.logo+nav*2`
- Table은 데이터를 쓸 때 사용.
- <nav>는 한 문서에 세 개정도면 적당하다고 판단 :  gnb, lnb, utility menu
- quick menu는 header 바로 밑 nav로 놓는 것도 좋을 것
- 배경색 기준으로 section을 나누나
- 3단의 카드는 각각을 서로 다른 섹션으로 나누나? div로 나누나? 3개의 단은 의미적으로 뭐가 다른가?
- 팝업은 어떻게 마크업 하는가? 자바스크립트인가? 



===

####CSS Box Model
> margin>border>padding>content

- margin: transparent, can be negative, used for spacing between element and another. background color is not applied. Collapsing top and bottom margin. left and right margins adds up. Only the greater top and bottom margin survives. 
- border: top, right, bottom, left all can be stylized separately. Each meet at a diagonal. 
- padding: only 0 and above, used for spacing before element and border

===

####rem: why use it? 
- 개발자메뉴에서 CSS style을 봤을 때 회색 처리 된 속성은 상속이 안된 속성이고, 검정색이지만 줄 쳐진 건 상속되었지만 트럼프된 걸 말한다. font-size는 상속받는다. 따라서 em 기준은 부모의 font-size가 된다. 그래서 바로 /16만 하면 원하는 대로 안 나온다. 부모 속성을 일일이 따져야 하는 것.
- 그러면 어떻게 해야할까? rem (root em)단위를 사용해보자. 이건 루트 요소에만 상대적이다. 루트가 16px이 기준이라면 나머지도 모두 16px가 기준이 된다. 위에서 하려 했던 건 rem 단위에 쓰는 것이다. responsive하기 때문에 px을 일일이 고쳐줄 필요도 없고, 귀찮은 계산을 많이 할 필요도 없다. 

> IE 9, 10에서는 rem을 font 속기형(shorthand)로 쓸 때는 적용되지 않는다. 만약 그렇게 하고 싶으면 px로도 적어줘야 한다. 

===

####media query
그냥 @media screen과는 다르다!
syntax:
```css
@media 환경 and 조건1 and 조건2
```
중단점 설계 Breakpoint design
--- 1번 시안 --- 600 breakpoint --- 2번 시안 --- 1000 breakpoint ---
mobile first 추천: mobile이 시장 더 큼, 더 쉬움.

===

####width/margin
- `width: auto/inherit/<num>em/<num>px/<num>%/rem/vw/vh/vmin/vmax` auto가 default. 퍼센트%는 부모요소가 100%기준
- IE6 standard 와 IE6는 다르게 작동한다. 표준에서는 width는 content에만 영향을 미침. 비표준에서는 border까지가 width임.
- inherit는 국내에서는, width에는 특히 잘 안 쓰임. input등은 자동적으로 폰트를 상속받지 않음. 강제로 상속받게 할 때 많이 씀.
- auto는 남는걸 알아서 계산해줌
- 파폭에서는 rem이 오류가 조금 있음. 파폭 고려하려면 em 써주는게 좋음.
- IE quirksmode에서는 margin이 잘 안될 수 있음. text-align 써야 함.
- max/min- width (ie6 doesn't recognize min-width)
- 부모 요소가 padding/border가 없을 경우에는 자식의 margin이 뛰쳐나가서 마치 부모의 margin인 듯이 행동한다. padding/border가 있으면 자식 요소의 margin을 속박한다. border: transparent하면 아무도 모르게 자식을 구속할 수 있음.
- inline은 양옆으로만 margin 설정 가능하다. inline-block은 상하좌우 다 되고, collapse가 일어나지 않는다. 

===

####Align
- li>img 에서는 li 블록 안에 img 요소 밑에 괴상한 공간이 있음. img 요소에 vertical-align: middle/bottom 주면 고쳐짐.

===

####border
- style: solid, dshed, dotted, double, inset, outset...
- width
- color

===

####Font/Text
Font: character (font designer)

Text: paragraph (typography designer)

#####CSS color system
- keyword: red, gold...
- hexcode: #rrggbb
- RGB: rgb(rr%, gg%, bb%) 잘 안 씀. 색 유추하기 어려움.
- RGBA: rgba(rr%, gg%, bb%, 0.aa) opacity alpha value
- HSL: 색상환(hue in degrees), saturation, lightness. a bit different from HSB(brightness)
- HSR
- CMYK: 감산 혼합에서는 이론적으로는 삼원색을 합치면 검정색이 나와야 하지만 현실에서는 검정색이 안 나오고 회색이 나옴.

#####font
- `font-family: "Times New Roman", Times, serif`
- 앞에 있는게 있으면 사용하고 , 없으면 다음 것이 있는지 봄. 웹폰트를 넣어도 됨. 띄어쓰기가 있으면 쌍따옴표

##TIL
- div에 내용이 있는 것과 없는 것이 공존하는 경우 배치가 이상해질 수 있다. 이것은 `vertical-align = baseline` 이 기본이기 때문에. 다른 값을 주면 괜찮아진다.
- 신기술
	- flexbox
	- grid
	- and...smth?


##QnA
- only: 이 형식으로 쓰면 only를 해석 가능한 최신 브라우저에서만 적용됨? ㅇㅇ 애플이 처음 씀. 왜냐하면 구형 브라우저는 뒤에 있는 조건을 그냥 무시하고 screen이기만 하면 적용을 해버리기 때문에.
- media, type, query 합쳐져서 media query!


##To Do
- make cmt snippet
- make new file relative to current view key binding
- vertical align 읽어보기
- horizontal & vertical align 코드 짜보기
- 리팩토링
- 시험문제 20문항 출제
- 웹서비스 와이어프레임 제작
- learngitbranching.js.org 공부하기