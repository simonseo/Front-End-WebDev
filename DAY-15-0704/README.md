###### Front End Web Development School

#Day 15 (lecture 10)

##float
- Made to set position of images/texts, and now used for grid system/ multi-column layout design.
- `float: none | left | right`
- elements to the bottom of the floated element are affected.

- position과 float의 차이는 float는 상자는 뒤로 가지만 텍스트는 자유롭다.
- overflow:hidden하면 아래 사진처럼 정리가 됨. 단, 사진 뒤에 글 요소가 하나만 있어야 함.

![](http://i.imgur.com/g7OMJO3.png)

1. 어떤 element를 float하면, 그 요소의 display 값은 자동으로 block이 됩니다.
2. element를 float할 때, width값을 명시적으로 언급해줘야 합니다! 아니면 예측할 수 없는 결과가 발생할 수도 있다고 하네요! 단, <img> 같이 그 자체적으로 암묵적인 width가 정해져있는 경우는 width를 굳이 선언할 필요는 없습니다.
3. “float”의 기원 자체가 해당 요소를 왼쪽이나 오른쪽으로 보내고 싶어서 만들어진 것이기 때문에 float로 가운데 배치하는 것은 (거의) 불가능합니다! 즉, 가운데에 배치할 때 주로 이용되는 margin-left/right: auto;가 먹지 않는다는 것이죠.
/* float를 포함하고 있는 부모의 width가 정해져있다면, margin-left/right을 계산해서 적용할 수는 있지만, 그렇지 않는 경우에는 float된 요소를 자동으로 가운데에 배치할 수는 없다는 말입니다! */
4. float된 요소는 margin collapsing이 적용되지 않습니다!


#####how do you make following elements not be affected by the floating element?
- `clear: left | right | both | none`
- none is almost only used in desktop environment

#####자식요소가 모두 float 하면 부모는 높이가 없어진다 해결방법은?
	1. 부모 요소에게도 float를 적용하면 부모에게도 자식의 높이를 가지게 된다. 모두 감싸게 됨. 이 방법을 쓰면 상위요소에 반복적으로 float를 적용하게 되서 안 좋다. 수평 가운데 정렬도 안된다.
	1. `<div class="clear"></div>`를 부모 요소의 마지막에 넣고, `.clear { clear: both; }` 를 적용시켜준다. 안 좋은 이유는 무의미한 코드이기 때문.
	1. 부모요소에 `overflow: hidden | auto;` 간단하지만 나중에 자식요소를 부모요소 바깥에 배치시키고 싶을 때 안 보여져버림.
	1. .clearfix 두번째 방법을 의미적으로 사용하기! 가상요소 `.clearfix::after`에 `clear: both;`를 적용시켜주면 문제 없음!
