FDS_TEST__2016/07/07
「프론트엔드 개발 스쿨」 강의 진행 결과를 확인하고, 수업 내용을 복습하기 위한 수강생 테스트입니다. 총 10문항으로 구성된 각 질문에 알고 있는 바를 기술하여 문제를 풀어보세요. ^ㅁ^

1. float이 적용된 자식 요소의 높이 만큼 부모 요소의 높이가 설정되게 하기 위한 방법을 무엇이라 부르며, 수업 시간에 다룬 4가지 방법을 각각 간단하게 기술 하세요. *

	```
	float 해제? 
	1. 부모 요소 (의 부모의 부모의 부모의 부모까지)에 float를 적용시킨다
	2. HTML에서 부모 요소의 마지막에 무의미한 요소를 넣는다
	3. 이게 뭐야
	<!-- 부모 요소에 overflow:hidden을 준다 -->
	4. CSS로 부모 요소에 ::after 요소를 넣는다 (clearfix?)
	```

1. float이 적용된 <img> 요소에 인접한 텍스트 블록이 완전히 <img>를 둘러싸지 않고 가지런히 정렬될 수 있도록 하려면 텍스트 블록을 감싼 요소에 어떤 속성을 설정해야 하는지 선택하세요. *
아래 이미지를 참고하세요.
	- display: none;
	- overflow: hidden; &10003;
		- 이미지에 인접한 텍스트 박스에 하는 것
	- visibility: hidden;
	- opacity: 0;
	- 답이 없다. 

1. REM 단위는 IE 9, 10 버전에서 다소 문제가 발생합니다. 어떤 문제가 발생하는지 선택하세요. *
	- em 단위와 별반 다르게 작동하지 않는다.
	- <html>이 아닌, <body> 요소를 Root로 설정하여 처리한다.
	- 속성을 단축하여 작성하는 속기형 작성법(Shorthand Properties)에서 작동이 안된다. &10003;
	- margin 요소에 설정할 경우, 좌/우 값과 상/하 값이 동일하게 계산되지 않는다.
	- 답이 없다. 

1. 아래 이미지를 참고하여 선형 그레디언트 코드를 작성해보세요. *

	```
	linear-gradient(90deg, #b7deed, #71ceef 49%, #21b5e2 51%, #b7deed)
	```

1. 다음 중 Position 속성이 아닌 것은 무엇인가요? *
	- static
	- relative
	- absolute
	- fixed
	- 답이 없다. &10003;

1. 다음 중 Background 속성이 아닌 것은? *
	- background-color
	- background-image
	- background-repeat
	- background-position
	- background-attachment
		- position:fixed와 비슷하다. 배경을 고정시키는 것
	- background-size
	- 답이 없다. &10003;

1. 다음 background-size 각각의 속성 값 차이점을 설명하세요. *
cover VS contain VS 100% 100%
	
	```
	contain은 상하로 모두 감싸고, cover은 좌우로 모두 감싼다. 이미지 비율은 유진된다. 
	100%100%는 상하 좌우를 모두 감싸고 이미지 비율은 유지가 안된다. 라고 찍어봅니다.
	```
	> 100%는 부모영역만큼 왜곡시킴. 
	> 커버는 이미자가 요소를 커버함.
	> 컨테인은 이미지가 요소에 포함됨

1. 다음 Position 속성 중 설정할 경우, display 값이 block으로 변경되는 것을 고르세요. *
(복수 선택 가능)
	- static
	- relative
		- normal flow를 흐트러뜨리지 않으려면 블럭으로 바뀌면 안된다.
	- absolute &10003;
	- fixed &10003;
	- 답이 없다. 

1. position: fixed 속성이 적용된 요소는 위치 설정 기준이 무엇인지 선택하세요. *
	- 원래 자신의 위치
	- position 속성(static 제외)이 설정된 가장 가까운 부모 요소
	- 브라우저 스크린 &10003;
	- 인접한 형제 요소
	- 답이 없다. 

1. 다음 Position 속성과 Float 속성의 차이점을 기술해보세요. *
position: absolute; VS float: left;
	
	```
	float는 normal flow에 포함된다. position은 offset parent의 위치에 상대적으로 내 맴대로 위치를 정해줄 수 있다.
	```
	> + float는 다른 요소에 영향을 주고 position은 안 준다. float는 z-index를 못 준다.