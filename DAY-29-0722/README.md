######Front End Web Developmnet School

#TIL
##CLI
Platform: Ruby and Node.js are available, but Ruby's compile speed is slow. We'll go with Node.js. There are 
Mac: terminal, iTerm
Win: cmder, git bash, cmd, powershell


| Win | Mac | Description |
| --- | --- | ----------- |
| `cls` | `clear` | clears text |
| `cd <directory>` || change directory (`~`, `..`, `../`, `./`, `.`, `/`, drag-n-drop) |
| `mkdir <directory>` || make directory |
| `rmdir <directory>` || remove directory if folder is empty  |
rmdir /q directory| `rmdir --force <directory>` || remove directory by force |
| `rmdir -f <directory>` || remove directory by force |
| `rmdir -r <directory>` || remove directory recursively |
| `rmdir -rf <directory>` || remove directory recursively by force |
| `dir` | `ls` | list view |
| `touch <file_name>.<file_extension>, <file_name>.<file_extension>` || make multiple file |
| `rm <file_name>.<file_extension>, <file_name>.<file_extension>` || remove multiple files |
| `mv <file_name>.<file_extension> <new_directory>/<new_file_name>.<file_extension>` || move and rename |
| `<command_line> && <command_line>` || execute multiple commands |
cat <file> check content
echo <content> >> <file> add content (make file if doesn't exist)
subl <file> open in sublime (customized)
[CLI basic Commands]


`sudo` in Mac: 관리자 권한을 줌

###Other options
```sh
--help                     도움말 정보 출력
-v, --version              버전 정보 출력

-w, --watch                폴더/파일 변경 관찰 변환
-r, --recursive            폴더 내부 하위 폴더 안의 파일까지 모두 변환
-o, --output               출력 폴더 설정

--output-style             CSS 출력 스타일 설정 (nested | expanded | compact | compressed)
--indent-type              CSS 출력 들여쓰기 설정 (space | tab)
--indent-width             들여쓰기(스페이스 또는 탭) 폭 개수 설정 (MAX: 10)
--precision                프로그래밍 처리 과정에서 출력될 소수점 자리 수 설정
-i, --indented-syntax      Sass 코드를 스트림(stdin) 데이터로 처리 (vs scss)

-q, --quiet                오류를 제외하고는 기록을 멈춤(억제)
--linefeed                 줄바꿈 스타일 설정 (cr | crlf | lf | lfcr)

-x, --omit-source-map-url  소스맵(Source Map) URL을 출력 파일 주석으로 설정 안함
--source-comments          디버그(Debug) 정보를 출력에 포함
--source-map               소스맵(Source Map) 방출
--source-map-contents      맵 파일 안에 콘텐츠를 포함
--source-map-embed         소스매핑 URL을 데이터 URI에 포함
--source-map-root          소스맵이 방출될 기본 경로 설정
```

##SASS
.sass is the next generation of .sass. Explanation of .SASS vs .SCSS on the sass-lang.com website:
> Sass has two syntaxes. The most commonly used syntax is known as “SCSS” (for “Sassy CSS”), and is a superset of CSS3’s syntax. This means that every valid CSS3 stylesheet is valid SCSS as well. SCSS files use the extension .scss.
>
>The second, older syntax is known as the indented syntax (or just “.sass”). Inspired by Haml’s terseness, it’s intended for people who prefer conciseness over similarity to CSS. Instead of brackets and semicolons, it uses the indentation of lines to specify blocks. Files in the indented syntax use the extension .sass.

Sass is the child of Ruby and it inherited a lot of awesome characteristics from Ruby.

1. 중첩: nested 
1. 변수
1. 믹스인 코드를 합쳐준다
1. 선택자 그루핑. OOCSS. 팀 단위로 쓸 때 정말 막강하다.

LibSass based on C/C++. LESS succeeded early because it ditched Ruby and moved on to Javascript. We're going to use nodesass. node 는 설치 위치가 글로벌이랑 로컬로 나눠짐. ruby는 글로벌만 있음. Let's install this.

```sh
$ npm install node-sass --global
$ npm i node-sass --g
$ node-sass -v //shows the versions of node-sass (wrapper, javascript) and libsass (sass compiler, C/C++)
$ sass -v //shows the version of sass 
```

###Compile Sass
Let's compile using Sass.

```sh
$ node-sass <file_name>.sass <file_name>.css //this compiles sass into css.
$ node-sass <directory> --output <new_directory> //this compiles everything n the file
$ node-sass --watch <directory> --output <new_directory> //this watches the files
$ sass-convert <directory>/<file> <new_directory>/<new_file> //rubysass. converts sass <=> scss
```

- Sass는 haml로 자동으로 설정되는데 잘 안됨. Sass syntax highlighter 설치함.
- **Sass is strict and clean, Scss is easier for beginners.**
- `--output-style <style>` expanded (끝 중괄호가 한줄 차지함. 내가 씀) | nested (끝 중괄호가 마지막 줄 끝에 붙음. 해외에서 가끔 씀) | compact (선택자당 한줄에 표현) | compressed (띄어쓰기도 없음 | 배포용)
- `--source-map <directory>` this option maps the css file to the sass file so that you can edit it in the browser developer tool.

###Sass Basic Syntax
- Variable `$variable_name: value`
- In sass, you can comment with `//` but this is not included in the compiled file. 
- For multi-line commnets in .sass, you need a space before the closing tag.
- Sass has no braces or semicolons. the indentation is super important, but don't mix tabs and spaces. You must use space between property and value `left: $gap`.
- `%` and `px` values are incompatible units. You can use `unquote("calc(100% - 5px)")`. 


###Nesting Property
- You can nest properties too. For example, if you want to nest several margins, try:

	```sass
	.page
		margin:
			left: 5px
			top: 5px
	```

- You can nest both shorthand and direct declarations together, because they're gonna be in the parent's namespace anyways. 
- You can also nest media queries inside other selectors. But then there's the problem of writing several media queries. The solution is "combined media query", which will be revisited later.


###Ampersand: Parent reference selector
- If you want to used `::before` or `:focus` in Sass, you should use the ampersand sign to mean the parent selector: `&::before`. Just like reference in C++!
- Interesting behavior of ampersand: the selector written right before `&` is compiled as the most outer parent.

	```sass
	.page
		a
			.woohoo &:hover
				color: #DDD
	```
	the above code in Sass becomes the one below in CSS:
	```css
	.woohoo .page a:hover {
		color: #6b141c;
	}
	```
- Another interesting behavior of ampersand: if it is used inside a name, it inherits the name of the parent.
	
	```sass
	.a
	.b
		&-c
			&:focus .d
				color: #fff
	```
	becomes
	```css
	.a .b-c:focus .d {
		color: #fff;
	}
	```
	
###OOSASS?
#####Selector Inheritance: `@extend` directive, placeholder selector`%`
If you `@extend .class#id[attr="smth"]`, the same properties that you applied to that selector will be copy-pasted. 

The @extend rule throws errors when the selector mentioned does not exist. add `!optional` flag to skip extension in case there's an error.

But there may be some properties that you only want them to exist as templates, not actual selectors. Then use the `%` selector.


#####Modularize
name modules as `_module-name.sass ` and import them with `@import path/module-name` (.sass), `@import "path/module-name.scss"` (.scss), `@import url("path/module-name.css")` (.css)

If you want to write an import rule to import .css files in sass, you can simply write `@import path/module-name.css` but the path must be relative to the created css file, not the sass file. Also, this will not combine the css file, just connect.

With Sass grobing? module, you can import everything at once with `@import path/*`

##Questions
- [ ] why didn't -f not work? why did -rf work? because there was at least one folder inside, not just files?
compass는 루비 기반이라는데 그래서 그게 뭐니 @@
- [X] what is a namespace? it appears in other OOP, and OOCSS too?
