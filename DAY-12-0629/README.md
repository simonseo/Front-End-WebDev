###### Web Dev

####Team Activity

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