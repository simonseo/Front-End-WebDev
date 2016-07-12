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
	transition: background color, color
	속성1 시간, 속성2 시간 이런식으로만 가능?
	속성1 속성2 시간 이런 것도 가능?
1. 전 방위 슬라이드(← → ↑ ↓)
	- `.slide-from-left`
	- `.slide-from-right`
	- `.slide-from-top`
	- `.slide-from-bottom`
	overflow hidden does not apply to inline. So set it to `ib`. Then you have to set `va-b` because `ib` changes `va`. transition doesn't work on border:solid to border:none. Getting rid of a border, as opposed to slowly erasing it always only takes a frame. how about transitioning the color to transparent? it works! then I don't even need a pseudo element for that.
1. 언더라인 페이드
	- `.fade-underline`
	색상에 currentColor 키워드를 사용하면 다른 요소의 색깔이 글자의 색에 맞춰갈 수 있다. 그런데 어차피 보더 컬러는 글자 색을 따라가지 않는가? (아닐 듯) 
	
1. 언더라인 슬라이드(← → ↔)
	- `.underline-from-left`
	- `.underline-from-right`
	- `.underline-from-center`
	linear-gradient는 각도 말고도 to right 등의 키워드 사용이 가능하다.
	overflow-hidden으로 이미 있는 요소를 들어오게 하는 방법도 있고, left: 0, right: 100%에서 right:0 으로 바뀌게 하는 방법도 있다. 
	내가 찾은 방법으로는 left를 기준으로 width가 0에서 100%가 되어도 된다. 결국 같은 방법이군...

###difference between transition and animation
transition has only initial and final state
animation can have a lot of steps, infinite loops, bolder highlights
/*transition: A에서 B, 다시 B에서 A로 바뀌는 것*/
	/*0.2s 빠른 느낌 0.4s 평범 0.6s 좀 느림 1s 매우 느낌*/
	사용자 인터랙션 없이 처음부터 움직임을 제어하려면 animation
	keyframe 기반으로 무한정으로 애니메이션 제어 하려면 animation
	transtiion: property(color, bg, fsz, .. all) duration(ms, s단위) [timing function (linear/cubic-bezier(easy in/out/inout/back) 개발자도구의 stlye 탭에서도 볼 수있음)] [지연시간];
transition 이 

Questions
mircro clearfix: display table. uses 
why border style doesn't make transitions
보더 컬러가 글자 색을 따라가는지 확인해보기? (아닐 듯)
hover는 가상요소에는 먹히지 않는가?
