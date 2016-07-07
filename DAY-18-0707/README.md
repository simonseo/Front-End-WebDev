###### Front End Web Development School

##TIL

###[Grid-System](https://github.com/yamoo9/PSD2HTML-CSS/wiki/%EC%9B%B9-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C)

Very useful. In CSS, float is used to immitate the grid-system. There are also position and flex-box which are not very convenient for Grid-system. Now CSS is making a grid layout module. At the moment, it is not standard and not supported at all, but it will be. So we should learn it.

960px grid system became very popular in designing websites. They use 3~4 columns. Frameworks usually only support one style of grid. So if designers and frontend devs can make grids, they can be more creative.

Grid is used everywhere from print to web, epub, apps, etc. 

The outline algorithm was introduced in html. It means using sections and headings to structure a document. Before, it was not allowed to use h1 and h2 together. If they were, then h2 was put into a new section implicitly. But some people wanted to use h1 and h2 together. So they made the hgroup, which is now obsolete. So now it's back to the original. 

Making a grid frame for your own can be part of your portfolio.

![3columns](https://github.com/yamoo9/PSD2HTML-CSS/raw/master/__assets__/Thinking_with_Type_Grid_11.gif)
In the above image, 3 columns are used for 

### Terms used in grid system
- baseline
- units: each unit column. Also called 'column'
- columns: units are combined to form columns
- gutters: space between units/columns. Not necessary, but goood to see
	- you can put gutters before, after, or both(split)
- margins
	- this is not the margin that you see on webpages. these are tiny margins inside the content area
- row
- flowline
- module
- spatial zone

###### Types of Grids
- Manuscript Grid - 1단형
- Column Grid - 우리가 지향해야할 것.
- Modular Grid - 주로 이미지 레이아웃
- Hierarchy Grid - 옛날에 테이블로 했던 것.

###### Popular Grids
- 12 Column: LCM of 3 and 4.
- 16 Column: Nate, Naver, Daum
- 24 Column etc etc

### Let's make our own
Photoshop > new > web > most common (1366x768)
* In Korea, 1920x1080 is the most common
grid margin should not be controlled with the body tag it should be controlled with a wrapper/container that wraps the content + `margin: 0 auto`
if you use outline in photoshop, you might be 1px off

###How to create color palette
because desingners don't do it for you, they can't simply share it either
in photoshop, sample your colors and add to your swatch list
make a .sass file
import adobe swatches from brackets
this adds the colors into sass
	you can use zeplin (ps plugin available) or avocode to do this

######Normalize.css
Another reset code, but less brute and more geared towards fixing browser errors
	> "A modern, HTML5-ready alternative to CSS Resets"
######Ress.css
Inherited from Normalize.css
Basically `box-sizing: border-box`

##Questions
- diff. btwn cover, contain
- border-radius em vs %?

##과제
- 문제 만들기 (객관식 7개, 주관식 3개)