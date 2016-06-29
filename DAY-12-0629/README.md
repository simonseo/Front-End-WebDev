###### Web Dev

####Team Activity
[Activity 2 : 삼성서울병원 홈페이지 마크업](http://www.samsunghospital.com/home/main/index.do)
[Activity 2 : 삼성서울병원 홈페이지 마크업 리뷰 로그](https://docs.google.com/document/d/1scLdJOZ2OWT_CU7WezqFqRUPDPKwr0Ryc_U72UjUhCw/edit)

####CSS Box Model
> margin>border>padding>content

- margin: transparent, can be negative, used for spacing between element and another. background color is not applied. Collapsing top and bottom margin. left and right margins adds up. Only the greater top and bottom margin survives. 
- border: top, right, bottom, left all can be stylized separately. Each meet at a diagonal. 
- padding: only 0 and above, used for spacing before element and border

#####rem: why use it? 
- 개발자메뉴에서 CSS style을 봤을 때 회색 처리 된 속성은 상속이 안된 속성이고, 검정색이지만 줄 쳐진 건 상속되었지만 트럼프된 걸 말한다. font-size는 상속받는다. 따라서 em 기준은 부모의 font-size가 된다. 그래서 바로 /16만 하면 원하는 대로 안 나온다. 부모 속성을 일일이 따져야 하는 것.
- 그러면 어떻게 해야할까? rem (root em)단위를 사용해보자. 이건 루트 요소에만 상대적이다. 루트가 16px이 기준이라면 나머지도 모두 16px가 기준이 된다. 위에서 하려 했던 건 rem 단위에 쓰는 것이다. responsive하기 때문에 px을 일일이 고쳐줄 필요도 없고, 귀찮은 계산을 많이 할 필요도 없다. 

> IE 9, 10에서는 rem을 font 속기형(shorthand)로 쓸 때는 적용되지 않는다. 만약 그렇게 하고 싶으면 px로도 적어줘야 한다. 

#####media query
그냥 @media screen과는 다르다!
syntax:
```css
@media 환경 and 조건1 and 조건2
```
중단점 설계 Breakpoint design
--- 1번 시안 --- 600 breakpoint --- 2번 시안 --- 1000 breakpoint ---
mobile first 추천: mobile이 시장 더 큼, 더 쉬움.


#####width/margin
- `width: auto/inherit/<num>em/<num>px/<num>%/rem/vw/vh/vmin/vmax` auto가 default. 퍼센트%는 부모요소가 100%기준
- IE6 standard 와 IE6는 다르게 작동한다. 표준에서는 width는 content에만 영향을 미침. 비표준에서는 border까지가 width임.
- inherit는 국내에서는, width에는 특히 잘 안 쓰임. input등은 자동적으로 폰트를 상속받지 않음. 강제로 상속받게 할 때 많이 씀.
- auto는 남는걸 알아서 계산해줌
- 파폭에서는 rem이 오류가 조금 있음. 파폭 고려하려면 em 써주는게 좋음.
- IE quirksmode에서는 margin이 잘 안될 수 있음. text-align 써야 함.
- max/min- width (ie6 doesn't recognize min-width)
- 부모 요소가 padding/border가 없을 경우에는 자식의 margin이 뛰쳐나가서 마치 부모의 margin인 듯이 행동한다. padding/border가 있으면 자식 요소의 margin을 속박한다. border: transparent하면 아무도 모르게 자식을 구속할 수 있음.


#####Align
- li>img 에서는 li 블록 안에 img 요소 밑에 괴상한 공간이 있음. img 요소에 vertical-align: middle/bottom 주면 고쳐짐.

#####border
- style: solid, dshed, dotted, double, inset, outset...
- width
- color

#####Font/Text
Font: character (font designer)
Text: paragraph (typography designer)

CSS color system
	- keyword: red, gold...
	- hexcode: #rrggbb
	- RGB: rgb(rr%, gg%, bb%) 잘 안 씀. 색 유추하기 어려움.
	- RGBA: rgba(rr%, gg%, bb%, 0.aa) opacity alpha value
	- HSL: 색상환(hue in degrees), saturation, lightness. a bit different from HSB(brightness)
	- HSR
	- CMYK: 감산 혼합에서는 이론적으로는 삼원색을 합치면 검정색이 나와야 하지만 현실에서는 검정색이 안 나오고 회색이 나옴.

font
	- `font-family: "Times New Roman", Times, serif`
	- 앞에 있는게 있으면 사용하고 , 없으면 다음 것이 있는지 봄. 웹폰트를 넣어도 됨. 띄어쓰기가 있으면 쌍따옴표


###신기술
flexbox
grid
and...smth?

##TIL
- div에 내용이 있는 것과 없는 것이 공존하는 경우 배치가 이상해질 수 있다. 이것은 `vertical-align = baseline` 이 기본이기 때문에 

##QnA
- only: 이 형식으로 쓰면 only를 해석 가능한 최신 브라우저에서만 적용됨? ㅇㅇ 애플이 처음 씀. 왜냐하면 구형 브라우저는 뒤에 있는 조건을 그냥 무시하고 screen이기만 하면 적용을 해버리기 때문에.
- media, type, query 합쳐져서 media query!

##To Do
make cmt snippet
make new file relative to current view key binding
vertical align 읽어보기
