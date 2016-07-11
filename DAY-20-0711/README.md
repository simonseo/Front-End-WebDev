###### Front End Web Development School

#TIL

과제 리뷰
검색봇에 좋으려면 메인이 사이드바보다 위에 있으면 좋다
배운 거 계속 써라
과제로 하라고 준 거 말고도 해라


#lecture

###gutter direction
no margin
or margin on one side or split  - need to be together with omega, last, first, etc.
split

###first=alpha, last=omega: remove margin
그리드에서 각 줄의 마지막 요소는 오른쪽에 마진을 주면 안된다. 주면 다음 줄로 넘어가게 될 수 있다. 그래서 그런 요소에 .omega 등을 붙여서 마진을 없애주면 된다.

###push, pull: using position
`position: relative`로 원래 위치에서 오른쪽으로 push 혹은 반대쪽으로 pull 해준다. 여러 유닛을 통째로 건너뛰고 싶을 때 사용할 수 있다.

###prefix, suffix: using margin, padding
다같이 움직여주는 거니까 여러개를 한번에 한칸 이동할 때 첫번째 것에만 적용을 해주면 좋다.

##CSS3 하이퍼링크(<a href>) 이펙트 스타일링

1. 기본 스타일
1. 배경 색상 페이드(Fade In/Out)
	- `.fade-bg`	
1. 전 방위 슬라이드(← → ↑ ↓)
	- `.slide-from-left`
	- `.slide-from-right`
	- `.slide-from-top`
	- `.slide-from-bottom`
	overflow hidden does not apply to inline. So set it to `ib`. Then you have to set `va-b` because `ib` changes `va`.
	transition doesn't work on border:solid to border:none.
	Getting rid of a border always only takes 0.00001s. 
	how about transitioning the color to transparent? it works!
	then I don't even need a pseudo element for that.
1. 언더라인 페이드
	- `.fade-underline`
1. 언더라인 슬라이드(← → ↔)
	- `.underline-from-left`
	- `.underline-from-right`
	- `.underline-from-center`

###difference between transition and animation
transition has only initial and final state
animation can have a lot of steps, infinite loops, bolder highlights