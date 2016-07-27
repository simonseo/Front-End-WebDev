######Front End Web Development School

#TIL
#####CSS custom variables
Statement: `--var_name: value`
Call: `var(--var_name)`

#####HTML custom data
Statement: `data-<name>="<data_value>"` or `dataset="<data_value>"`

#####Using strings in Sass
Interpolation `#{$family}` or unquote `unquote("calc(100% - 10px)")`

#####Import in Sass
	```sass
	@import foo.css
	@import foo2
	@import http://foo.com/bar
	@import url(foo)
	```
compiles to

	```css
	@import url(foo.css);
	@import "http://foo.com/bar";
	@import url(foo);
	```

######주의사항
- foo2 has the extension `.sass` and foo `.css`. If you name the two with the same name, the compiler will probably throw an error.
- Extend does not copy & paste the code. It adds the target selector to the original snippet.


###SassScript
####Interactive Shell
You can use shell for SassScript that evaluates legal expressions.

```sh
$ sass -i
```

####Variables: `$`
1. State a variable with the syntax: `$var_name: value`. Sass allows hyphen `-` and underscore `_` to be treated the same in variable names. You can use `$my-nickname` and `$my_nickname` to mean the same thing.
1. Variables can be set with a global scope inside the namespace of a selector, by adding `!global` flag at the end of a statement.
If you modularize stylesheets and you want one file to set a default value, add the `!default` flag.
1. If there's an error with the automatic calculator, wrap the whole expression with parentheses.

####Datatypes
Sass supports 6 datatypes.

1. null
1. number
1. string&color - JavaScript only accepts quoted strings. Sass doesn't/
1. boolean - `true=yes`, `false=no`
1. list - (`[]` in JS, called array)
1. map - (`{}` in JS)

####Maps
Maps keys to values like so: `"key": value,`. In SCSS Syntax, 
```scss
$colors: (
  "primary": tomato,
  "secondary": hotpink
);
```

In Sass syntax,
```sass
$colors: ("primary": tomato, "secondary": hotpink)
```

##Windows에서 파일까지 다 나오는 tree 사용하기

1. 설치 http://downloads.sourceforge.net/gnuwin32/tree-1.5.2.2-setup.exe
1. 설치된 파일 tree (.exe)를 찾아서 명령어로 쓰고 싶은 이름으로 변경 (예: lstree)
2. '내 컴퓨터' 오른쪽 클릭 > 속성 > 'Advanced System Settings' 혹은 비슷한거 클릭 > 고급 탭 > '환경 변수' 클릭
2. PATH 변수에 설치경로 ( C:\Program Files (x86)\GnuWin32\bin ) 붙여넣기
3. 쉘/cmd에서 2에서 정한 이름 호출해보기

##Where "Sass" comes from
`Sassy` 라는 단어는 ​**쿨하다, 멋있다, 클래스 있다, 도도하다*​* 등의 의미를 가지고 있어요. 
멋있는 사람이 약간 건방진 느낌? 한번 쳐다보고 "흥!"하고 지나갈 것 같은 느낌?
Sass랑 자주 등장하는 핑크색, 커리어우먼 안경, 젠틀맨 수염 같은 것도 이런 느낌을 나타내려는 것

##TO Do
- Read about [interpolation](http://webdesign.tutsplus.com/tutorials/all-you-ever-need-to-know-about-sass-interpolation--cms-21375) &10003;
- Diff between Progressive enhancement and graceful degradation &10003;
- Quiz Review &10003;
- C++ Syntax review (Especially pointers and templates)
- Make my own quiz