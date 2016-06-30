######Front End Web Development School

##Quiz-4 (2016.06.30)
1. 다음 중 마진(Margin) 속성에 대한 설명 중 틀린 것은? *
	- margin 속성은 음수(-) 값을 사용할 수 있다.
	- margin 속성은 배경 색이 적용되지 않는다.
	- Block 요소의 경우 상/하 방향으로 나열된다면 margin 속성 값이 작은 쪽의 값으로 간격이 설정된다. &10003;
	- margin 속성의 상/하 값을 통해 공간을 설정할 수 없다면 Inline 요소이다.
	- 답이 없다.

1. em 단위 속성에 관한 설명 중 옳은 것은? *
	- em은 Emphasize(강조)의 의미를 가진다.
	- em은 `<html>` 요소의 font-size 크기에 상대적인 단위 값을 말한다.
	- px과 em 단위의 차이점은 다양한 기기(Device)마다 다르게 작동한다는 점이다. 
		- 이걸 골랐는데!!!!! 다르게 작동하는 건 그 단위가 아니라 내 코드겠구나.
	- px 단위를 em으로 변경하는 방법은 px 단위를 제곱한 다음 다시 px로 나누어 주면 된다.
	- 답이 없다. &10003;

1. em 단위의 사용이 어려워 새롭게 등장한 유용한 단위 이름은 무엇이며, 그 단위의 대표적 특성에 대해 기술 하시오. *
	
	> rem: `<html>` 요소의 font-size 크기에 상대적인 단위 값을 말한다.

1. normal 두께와 동등한 font-weight 속성 값은? *
	- 100
	- 200
	- 300
	- 400 &10003;
	- 500
	- 600
	- 700
	- 800
	- 답이 없다.

1. 다음 미디어쿼리 구문 중, IE6-8에서 처리 가능성이 있는 구문은? *
	- @media only screen { ... }
	- @media not print { ... }
	- @media only screen and (min-width: 640px) { ... }
	- @media print and (min-width: 25cm) { ... } &10003;
	- 답이 없다.

1. HTML 구조(↓ 이미지)를 참고하여 적절한 선택자를 작성하시오. *
item-3, content-1 내용을 포함한 `<a>` 요소들을 선택하려면?
	```
	.child > ul:nth-child(3) > a:nth-of-type(3), 
	.child > ul:nth-child(4) > a:first-of-type
	```

	>```
	>#parent > .child:first-child .reset-list li:last-child a, 
	>#parent > .child:nth-child(2) .reset-list li:first-child a
	>```

![image](https://lh6.googleusercontent.com/JkGLaWbQN0OTxfz1iaHx5fLeytoZN76n4cZ-JKAymsF8moR19d2-2RLjP5TJQb_6yg6WSXTOZw)

1. HTML 구조(↑ 이미지)를 참고하여 적절한 선택자를 작성하시오. *
id="parent"인 요소의 2번째 직계 자식을 찾은 후, 해당 자식의 자손들 중 `<li>` 요소를 제외한 나머지 요소를 모두 선택하려면?
	- `.parent > > * :not(li)`
		- 하아... 문제라도 제대로 읽을걸...

	> `#parent > :nth-child(2) :not(li)`

1. 다음 중 Viewport를 고려해 새롭게 추가된 단위가 아닌 것은? *
	- vw
	- vh
	- vmin
	- vnow &10003;
	- 답이 없다.

1. <body> 요소를 화면 가운데 배치하는 코드를 작성하시오. *
가운데 배치할 요소의 가로 폭은 기기 뷰포트(Device Viewport)의 가로/세로 길이 중 긴 쪽의 65% 가량이다.

	```
	html {
	  height: 100vh;
	  line-height: 100vh;
	}
	
	body {
	  display: inline;
	  width: 65vmax;
	  margin-left: auto;
	  margin-right: auto;
	}
	```

	>```
	>body { 
	>   width: 65vmax; 
	>   margin-left: auto; 
	>   margin-right: auto;
	>}
	>```

1. 다음과 같은 코드를 기술해야 하는 이유는 무엇인지 기술 하시오. *
input, select, textarea, button { font-family: inherit; }
	- 다른 요소들과 다르게, 해당 요소들은 부모 요소의 font-family 값을 자동적으로 상속받지 않는다. 따라서 폰트를 부모요소와 같게 만들어주려면 상속받으로 명시해줘야 한다.
	
	> 폼 요소는 부모로 부터 스타일을 상속받지 못하기 때문. 하여 따로 상속 받을 수 있게 inherit 속성 값을 사용한다