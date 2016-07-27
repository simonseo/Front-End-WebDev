##pizzeria

layout


bg image

workflow

##TIL


###Operations

- 사칙연산의 원리를 따른다(`+`,`-`,`*`,`/`, `%[나머지 연산자]`)
- 폰트 속기형을 쓸 때 생각처럼 작동하지 않는다
- 비교연산( `==`, `!=`, `<`, `>`, `<=`, `>=` )
- 문자열도 연산할 수 있다

	```sass
	'foo' + 'bar' // 'foobar'
	'foo ' + 'bar' // 'foo bar'
	```
- boolean 연산 (and, or, not)

###interpolation 보간법
JavaScript ES6 (ECMAscript) `${}`
Sass `#{}` String을 뭘로 바꿔주는걸까?

###Directives (지시문) for feedback
You can use `@debug`, `@error`, `@warn` to output messages in the console while compiling sass files. 

@debug <anything>
@debug <boolean statement>
@debug type-of(<object>)

#####@error
> Sass’s @error directive stops the Sass compiler completely and sends its string of text to the compiler’s output as a fatal error. The @error directive is ideal for validating arguments within a mixin or function. As an example, if you’ve written a function that relies on a certain input format for its calculations.

#####@warn
> It sends its message to the compiler for the developer to read, but it allows the compiler to finish its job and write all the CSS. While @error is good for correcting an error that breaks a function or mixin entirely, @warn is better suited for deprecation notices, or suggesting a developer follow certain best practices.

> Note: Sass developers who use the --quiet flag when they compile will not see @warn output. If the developer absolutely needs to see the feedback your Sass is sending, rely on @error. It’s rare for @warn to be turned off, but it is possible.

#####@debug
> Sass’s @debug directive is the least intrusive of all three feedback directives. It prints the value of whatever Sass expression it contains (variable, math, etc.) to the console for the developer. It’s not entirely useful in open source or team libraries. Rather, @debug is ideal for personal debugging work. If you’re in a complex bit of math and need to know what one of your variables contains at the moment, use @debug to find out.


###Directive `@mixin` vs placeholder `%` 
- mixin is used with `@include`, placeholder is used with `@extend`
- mixin copy pastes a bunch of code, so this can slow down the process
- placeholder takes up less space because it copy pastes only selectors.
- mixin can be used for a wider range of purpose that requires variables. (eg. vendor prefix mixins)

```sass
//Mixin: Mixins can receive (multiple) parameters. You can set default values.
//In SCSS, you can break lines. 
@mixin <mixin_name> (
	$parameter1: default_value, 
	$parameter2: $parameter1,
	$parameter3: null,
	$parameter4
	) {
	property: value;
}
```

###Sass shortform mixin
In Sass, you can write shortforms. But you can't break lines.
```sass
=<mixin_name> ($parameter: default_value)
	$property: value

main
	+<mixin_name>($argument)

```
//It seems that "Required parameters must precede optional parameters"

###Multi Mixins (or Variable Arguments 가변전달인자)
Mixins can receive several (unlimited) arguments by summarizing the list of arguments as `$args...`. Add `...` after your first argument. These are to be treated the same. You don't need dots 

###@content
`+mixin {<content>}` 에서 컨텐츠가 믹스인 안에 `@content`로 지정해준 위치에 옮겨짐. 미디어쿼리처럼 믹스인 내부에 코드가 아주 많이 있어야 할 때, 혹은 reset-list처럼 블럭 내부의 요소에 추가적인 내용을 적어야 할 때 특히 좋을 것으로 예상된다.
질문?@content를 여러개 쓸 수 있을까?

###Extend vs Mixin vs Placeholder (by Woobin)
> Extend: 반복되는 속성을 묶어준다는 강력한 기능 // 소스를 묶기 때문에 에러가 많다 
> Mixin: 고정값 설정이 엄밀하고, 변수를 주어 확장성이 좋다 // 반복에 따른 소스 비대화를 피하기 어렵다
> Placeholder: 설정하는 고정값이 최종 CSS에서 라인을 잡아먹지 않는다 // 기능이 약하다
> 
> 만일 소스를 본인이 모두 통제할 수 있어서 깔끔하고 엄밀하게 작성/수정이 가능하다면 Extend가 아주 강력해질 것이지만, 예상치 못한 부분에서는 멘붕을 > 초래하지 않을까 싶네요!
> 링크의 저자는 그 부분의 리스크를 과대평가해서, 그럴 바에는 믹스인이 항상 옳다고까지 주장하는 것 같아요

###List Functions: Sass list starts from 1
 	- length($list)
 	- nth($list, $n)
	- set-nth($list, $n, $value) makes a new list with replaced value
	- join($list1, $list2, [$separator])
	- append($list1, $value, [$separator])
	- index($list, $value) = .indexOf(list, value)


###`background-origin` vs `background-clip`
수업 도중 야무선생님의 설명이 이해가 안가서 스펙을 찾아봤더니 선생님이 말씀하신 것과 다른 내용 있어서 정리해봅니다. 4줄 요약:

1. clip과 origin 둘 다 background image, background color에 사용이 가능합니다.
2. clip은 배경을 어디서 크롭하는지를 지정해주고,
3. origin은 배경의 위치의 기준을 지정해줍니다. (color를 사용한 경우에는 필요가 없다.)
배경이미지 [예시](http://codepen.io/anon/pen/RNVKvj)를 보면 이해하기 더 쉬울 것 같습니다.

#####공통점
- 둘 다 기본값은 `border-box`이며 `padding-box`와 `content-box`도 사용 가능하다.
- 특정 경우에는 시각적으로 비슷해보일 수 있다.

#####[background-clip](https://drafts.csswg.org/css-backgrounds-3/#the-background-clip)
배경이미지 혹은 배경색이 지정해준 박스까지만 보인다. 그 공간 안에 이미지가 다 못 들어가면 크롭/클립 된다.

#####[background-origin](https://drafts.csswg.org/css-backgrounds-3/#the-background-origin)
`background-position`과 함께 사용된다. 지정해준 박스가 포지션의 기준이 된다. 예를 들어, `background-origin: padding-box`라고 설정해줬을 경우에는 `background-position`에서 '0 0'은 패딩박스의 왼쪽 위 구석이고, '100% 100%'는 패딩박스의 오른쪽 아래 구석이다.

배경색은 위치를 지정해준다는게 좀 웃기다. W3C도 그렇게 생각했는지 origin은 배경색에 아무 영향이 없게 해놨다. 따라서 origin은 배경이미지에만 사용된다.

#####[예시](http://codepen.io/anon/pen/RNVKvj)
`background-position: top left`, `background-origin: border-box`, `background-clip: border-box`를 지정해주면 이미지가 보더의 왼쪽 위에 붙어버린다. 

1. 이때, `background-clip: padding-box`라고 바꿔주면 이미지 위치는 그대로 있지만 보더 공간에 있는 이미지가 안 보이게 된다.
1. `background-clip: border-box`로 돌려놓고, `background-origin: padding-box`로 바꿔주면 배경이미지가 패딩박스 왼쪽 위로 옮겨진다.






