######Front End Web Development School


	/*transition: A에서 B, 다시 B에서 A로 바뀌는 것*/
	/*0.2s 빠른 느낌 0.4s 평범 0.6s 좀 느림 1s 매우 느낌*/
	사용자 인터랙션 없이 처음부터 움직임을 제어하려면 animation
	keyframe 기반으로 무한정으로 애니메이션 제어 하려면 animation
	transtiion: property(color, bg, fsz, .. all) duration(ms, s단위) [timing function (linear/cubic-bezier(easy in/out/inout/back) 개발자도구의 stlye 탭에서도 볼 수있음)] [지연시간];

###transform
#####skew

#####scale

#####translate

#####rotate

#####transform-origin: lengths, percentages, keywords: top left right bottom center


###[Animation](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
스프라이트를 사용함. 예전에 플래시에서는 쉬웠지만 CSS에서는 지원을 안했기 때문에 jsmovieclip이라는 라이브러리를 사용했음. CSS가 매우 빠르기 때문에 좋다. animate.css 라이브러리 있음.
```css
selector {
	animation: 애니메이션이름 duration 몇번 alternate|normal|reverse timing-function;
}

@keyframes 애니메이션이름 {
	from { }
	to { }
}
@keyframes 애니메이션이름 {
	0% { }
	.
	.
	.
	100% { }
}

```
mischief라는 툴로 그림 그리면 벡터이미지로 저장된다. 대박. 애니메이션에 사용하면 좋음.
펜마우스도 같이 사용하면 좋겠죵

### 사이드바를 화면 밑까지 내리고 싶다
어떻게 할까? height: 100%는 우리가 원하는대로 작동하지 않는다. 
사이드바와 본문을 포함하는 컨테이너에 linear gradient를 수평 방향으로 주면 시각적으로는 사이드바가 긴 것처럼 보일 수 있다.


###
background-position
background-origin 이미지: 
background-clip 색


mircro clearfix: display table. uses 
why border style doesn't make transitions
보더 컬러가 글자 색을 따라가는지 확인해보기? (아닐 듯)
hover는 가상요소에는 먹히지 않는가?
