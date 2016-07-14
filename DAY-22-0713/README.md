######Front End Web Development School

#TIL

###Team Activity
make a web-based poster that interacts with the user.
Use Animations/Transitions at your will.

###Text-align
`ta-j`
`tal-j`
```css
body {
	-ms-text-align-last: ;
	text-align-last: ;
}
```
The last line of a paragraph is not affected by text align. You need to use text-align-last.

###Animation - sprite
1. Photoshop > guidelines > draw frames
1. export png > change matte color if you want to get rid of background

If you use sprite images,
`animation: ken-kick steps(12) 2s infinite;`
steps and timing function can't coexist.


###stack order 
1. 쌓임 맥락의 뿌리(root) 요소.
1. position 값이 있고 z-index 값이 **음수**인 요소(와 자식들). (z-index 값이 높은 요소가 앞에 놓인다. 값이 같으면 HTML에 나타난 순서에 따라 나타난다.)
1. position 값이 **없는** 요소(HTML에서 나타나는 순서를 따른다).
1. position 값이 있고 z-index 값이 **auto**인 요소(와 그 자식들). (HTML에서 나타나는 순서에 따라)
1. position 값이 있고 z-index 값이 **양수**인 요소(와 그 자식들). (z-index 값이 높은 요소가 앞에 놓인다. 값이 같으면 HTML에 나타난 순서에 따라 나타난다.)
부모에 z-index가 없으면 부모 뒤로 갈 수 있다.

###Multi Columns
지원율이 낮기 때문에 -wm-붙여줘야 함.
(더블대쉬는 모든 브라우저)
#####묶음에 적용
column-count (count)
column-gap (length etc)
column-rule (same syntax as border)
#####헤딩 등 요소에 적용
column-span: all (spans all columns)

