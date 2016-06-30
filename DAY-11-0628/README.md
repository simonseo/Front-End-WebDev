###### Front End Web Development School

###Day 11 (7th lecture)
####CSS Selectors (continued from Day 9
#####selector by attribute
- `attr` attr가 있는 것
- `attr=` 일치하는 것
- `attr^=` 시작이 같은 것
- `attr$=` 끝이 같은 것`
- `attr|=` `하이픈으로 구분되는 단어가 일치할 때 (en-GB, en-US 에서의 en)`
- `attr~=` 공백으로 구분되는 단어가 일치할 때
- `attr*=` 단어가 포함될 때
- 배경색은 상속되지 않음. 글자색은 상속됨.


####colon in selector means pseudo class - 가상(유사, 의사)클래스
#####selector by state (state design)
1. cursor state design
	- Normal `p` - cursor is not there; nothing is happening
	- Hover `p:hover` - cursor is on top of the element
	- Active `p:active` - pressed cursor
1. hyperlink state design: 
	- 기본 ':link' href="#"
	- 방문한 상태 ':visited' href="" 
		- 컬러 등 속성만 가능함. 이미지는 안 됨.
	- 커서 올라간 상태 ':hover'
	- 커서로 누르고 있는 상태 ':active'
	- 키보드 포커싱 상태 ':focus' (tab navigation)
	- /*border와 outline의 차이점: border는 축이 움직인다.*/

#####other selectors
1. pseudo-class
	- `:root` HTML5에서는 <html>, XML등에서는 다른 거솓 가능. 
	- `:not(E)` 연속적으로 붙일 수 있음. 그러니까 괄호 안에 여러개 넣지 마셈!
	- `:empty` 
	- `:first-child`
	- `:last-child`
	- `:nth-child(f(n))`
	- nth-last-child(f_n)
	- only-child
	- first-of-type
	- last-of-type
	- nth-of-type
	- nth-last-of-type
	- `:lang(en)` ~ `[lang|="en"]` 전자는 정확히 'en'만, 후자는 'en-'으로 시작하는 것만

1. pseudo-element 
	- it was made double colon in CSS3. For the first four, you can use just one for compatibility
	- it makes a pseudo-element? not modify the described element?
		- before and after makes new weird pseudo elements. 
	- `::first-letter`	or `:first-letter`
		- useful for dropcap design
		- CSS 초기 공부할 때는 잡지를 보고 따라해보는 것도 좋다.
	- `::first-line`	or `:first-line`
	- `::before`		or `:before`
	- `::after`			or `:after`
		> E::before 하면 E의 가상의 first-child로, E::after하면 E의 가상의 last-child로 생긴다. CSS에서 content속성을 써줘야 한다. 배경으로 표현되기 때문에 접근성 제로. 얘들은 새로운 요소가 아니라 그냥 글내용이기 때문에 :first-child 이런 건 안 먹힘. 
	- 가상 요소를 사용하면 링크등 비표시 요소들이 인쇄할 때 나타나게 할 수 있다. 스고이!! "전근성 관점에서 링크의 주소를 출력하는 스타일" using `@media print` `a::after` and CSS function. (`@media screen` 등도 있다.)
	- `::selection` 드래그에서 박스 선택했을 때 적용되는 스타일. 모질라에서는 `::-moz-selection`. Vendor prefix는 [caniuse](caniuse.com)에서 확인해볼 수 있다. 아직 개발중이라 비표준. background, text-shadow, text-decoration 등이 가능하다

	쿼리를 통해 CSS파일을 캐시 대신 매번 다운받게 할 수 있다. ?<?time()?>

####Inheritance
- styles in CSS flows form higher levels to lower levels.
- Some are inherited, but not all - size
	>| inherited | not inherited |
	>| --- | --- |
	>| font | margin |
	>| border | area |
	>| color | display |

- Trump rule !important (absolute) > inline (1000) > ID (100) > class (10) > type (1) > universal selector * (0)
- there is a default style for browsers but they don't follow everything. Especially IE 6, 7, 8...
- Some people use "reset.css". We will use "normalize.css", though I don't know what's so different.
- OOP CSS / OOCSS: Object Oriented CSS? modularization. This becomes easier with preprocessors like Sass etc.





###TIL
difference between pt and px

	pt was used for printing & iOS?
	px is used for web
	android uses a weird something

###Git
I am learning Git CLI with [Learn Git Branching](http://learngitbranching.js.org/)!

1. commit
	```sh
	$ git commit
	```

1. checkout
	checking out a commit moves the HEAD location to that commit. ie. the checked out branch bugFix becomes our workspace. When you checkout using the hash value of a commit, you only need to type the hash until it is uniquely identifiable. Checking out a commit that does not have a branch name will detach the `HEAD` and make it point to that commit.
	```sh
	$ git checkout bugFix 
	//or
	$ git checkout fed2b 
	```
	Instead of typing in everything, you can also navigate through the history using Relative Refs (Parent `^` or Ancestor `~<num>`)
	```sh
	$ git checkout HEAD^
	$ git checkout master~4 //moves HEAD to specified location
	$ git branch -f master HEAD~3 //moves everything else except HEAD to specified location
	$ git branch -f bugFix bugFix~3 //but not "git branch -f HEAD HEAD~3" because HEAD is not a branch. it can't be relocated.
	```

1. merge
	```sh
	$ git checkout master
	$ git merge bugFix
	```
	the content of bugFix is copied into master. if master was the ancestor, copying bugFix into master would result in the same file as bugFix. So the master pointer would simply move to the bugFix location.

1. rebase
	> The second way of combining work between branches is rebasing. Rebasing essentially takes a set of commits, "copies" them, and plops them down somewhere else.

	if I have C2 (master) and C3 (bugFix) in separate branches, I can rebase bugFix to master, which will result in the bugFix commit to become a child of the master branch. The command is as follows:
	```sh
	$ git checkout bugFix
	$ git rebase master
	```

1. Reset/Revert
	reset is usually for local, revert is usually for remote (shared)
	reset simply moves the pointer to a previous commit, revert makes a new commit that is the opposite of the previous commit. 
	```sh
	$ git reset HEAD~1
	$ git revert HEAD
	```