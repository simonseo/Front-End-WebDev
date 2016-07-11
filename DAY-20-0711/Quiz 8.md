###### Front End Web Development School

# Quiz 8 (2016.07.11)
1. **가상 요소(Pseudo Element)를 추가 시, 반드시 필요한 속성은?**
	- [ ] position
	- [ ] float
	- [X] content
	- [ ] display
	- [ ] 답이 없다.

1. **top: 50%; 속성과 transform: translateY(-50%) 속성의 % 기준은 각각 어떻게 다른지 기술하세요.**

	```
	top의 퍼센트는 부모의 크기에 상대적이고, translate의 퍼센트는 본요소의 크기에 상대적이다.
	```

1. **다음 중 Grid System 용어가 아닌 것은?**
	- [ ] row
	- [ ] column
	- [ ] gutter
	- [ ] module
	- [X] 답이 없다.

1. **다음 중 「타이포그래피 em 기준 행간 구하는 공식」은?** `[ floor() 내림 ] / [ round() 반올림 ] / [ ceil() 올림 ]`
	- [ ] floor( 글자크기비율 × 기준행간비율 ) × ( 기준행간비율 ÷ 글자크기비율 )
	- [X] ceil( 기준행간비율 ÷ 글자크기비율 ) × ( 기준행간비율 ÷ 글자크기비율 )
	- [ ] round( 글자크기비율 ÷ 기준행간비율 ) × ( 기준행간비율 ÷ 글자크기비율 )
	- [ ] ceil( 글자크기비율 ÷ 기준행간비율 ) × ( 기준행간비율 ÷ 글자크기비율 )
	- [ ] 답이 없다. 

1. **다음 중 「타이포그래피 em 기준 하단 마진 구하는 공식」은?**
	- [X] 기준행간비율 ÷ 글자크기비율
	- [ ] 글자크기비율 ÷ 기준행간비율
	- [ ] 기준행간비율 × 글자크기비율
	- [ ] 글자크기비율 × 기준행간비율
	- [ ] 답이 없다. 

1. **웹 타이포그래피 구현 시, 제목에 사용된 「Type Scale」 이란?**
	
	```
	여러 단계의 heading 및 본문의 폰트크기의 비율로, 보기 좋은 타입스케일을 먼저 정하고 디자인을 시작하면 더 효율적으로 	디자인/개발할 수 있다.
	```

1. **다음 중 Grid System을 사용하는 목적이 아닌 것은?**
	- [ ] 팀 커뮤니케이션 향상
	- [ ] 생산성 향상
	- [X] 접근성 향상
	- [ ] 유지보수 향상
	- [ ] 답이 없다.

1. **CSS 구현 후에 Code Review 과정과 Code Refectoring 과정이 필요한 이유를 기술 하세요.**
	```
	1. 한 요소에 똑같은 속성을 여러번 부여하거나
	2. 여러 요소를 하나로 묶어줄 수 있는데 안했을 경우
	3. 주석처리를 하고 지워주지 않았을 경우
	등의 이유로 CSS파일의 크기는 조금씩 커진다. 
	그런데 티끌 모아 태산이라고, 이렇게 한줄한줄 늘어나는게 웹사이트 로딩이 느려지는 결과가 나올 수 있다. 
	(오타 났어요! refactoring)
	```

1. **다음 중 box-shadow의 속성 값에 사용할 수 있는 것이 아닌 것은?**
사용 예) box-shadow: 3px 3px 6px rgba(0,0,0,0.3);
	- [ ] x
	- [ ] y
	- [ ] blur
	- [ ] spread
	- [X] 답이 없다.
	
1. **CSS 삼각형(▲) 모양을 그리기 위한 코드를 작성해보세요.**
.css-triangle-to-top { ... }

	```css
	.css-triangle-to-top {
	  border-bottom: 2em solid black;
	  border-left: 3em solid transparent;
	  border-right: 3em solid transparent;
	}
	```