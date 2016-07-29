1. flags optional default global
2. pseudoclass
4. nesting - properties

3. ampersand
```sass
.page
	a
		.woohoo &:hover
			color: #DDD
```
```css
.woohoo .page a:hover {
	color: #6b141c;
}
```

5. ampersand
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

6. mixin placeholder difference

7. @import

8. precision

9. datatype

10. scope

11. cat, echo

12. 폴더를 지울 수 있는 명령어: mkdir rmdir mvdir rm

13. node.js를 사용하는 잉

14. directory: `~`, `..`, `../`, `./`, `.`, `/`, drag-n-drop

15. 
