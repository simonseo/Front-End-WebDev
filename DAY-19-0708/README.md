###### Front End Web Development School

# TIL

###Homework Review
유지보수 생각해서 px 사용은 적게
scale opacity transition 등을 사용해서 상태 디자인?
center box module?

###Lecture
Grid System.css에서 row, col 등 모듈을 설정해두면 매우 편리하게 그리드 시스템을 이용할 수 있다. 

Emmet 의 계산기가 좀 더 정확했으면 하시는 분들:
1. Resource Viewer 이라는 패키지를 설치한다
2. 이 패키지로 emmet-app.js 파일을 연다.
3. 아래 코드를 찾아서 현재 2로 되어있는 숫자를 4로 바꿔준다. (이 숫자는 소숫점 아래 몇자리까지 표현하는지 정해줍니다)

```javascript
prettifyNumber: function(num, fraction) {
	return num.toFixed(typeof fraction == 'undefined' ? 2 : fraction).replace(/\.?0+$/, '');
},
```

###Assignment
1. Design a grid system considering the user's environment. 
	- To do this, you need to decide on the width of the screen, number of columns, whether to use gutters, and the ratio of column to gutter.
1. Draw the grid system on photoshop
1. Realize the grid system on a browser using CSS
1. Merge the wireframe from the last assignment into the photoshop file
1. Use the CSS grid system (row, col) to make the website
1. Upload it on gh-pages

###Questions

#To Do
- vw에 대한 블로그 글 내용 검증
- UI Kit에서 HTML은 건드리지 않고, 이미지 파일도 사용하지 않고 목록 형식을 psd처럼 만들기