######Front End Development School

#Team Activity: Indulge Website using transitions, responsive grid.

#TIL

##Isolate-Float Layout
**Problem** Browsers have "subpixel rendering" bugs. It is when widths are coded in percentages and browsers fail to make half-or-less-pixel (subpixel) width objects.

**How do we solve this?**
	1. apply `margin-right: -100%;` and on all elements
	2. position them with `margin-left`.
	3. if you want to change line, apply `clearfix: left` on your to-be-first-element-on-the-new-line.

This method doesn't mess up the normal flow; The code compared to position/float is much shorter and simpler.

##Flexbox (Flexible Boxes) ~ modern like region, grid, template layout.
Recommended Candidate module. It has been developed over a long time. Its older syntax is still used for IE 10/11. 
This can solve a lot of problems like vertical middle align. 

###Some advantages
Easily change flow from ltr to rtl (row reverse), 
or from horizontal to vertical, 
or from top2bottom to bottom2top (column reverse), 
or change orders. 
the default height of flex-item is its parent's height
you can vertically align it anywhere

###Flexbox anatomy
- Main axis: ltr.
	- Main Start
	- Main End
	- Main Size = main start - end
- Cross axis: top2bottom.
	- Cross start
	- Cross End
	- Cross Size

###Flexbox Properties
- `flex-container (display:flex) > flex-item`
	- flex is displayed as a block
	- inline-flex is displayed as an inline-block.
	- if you give flex to any element, all of its children automatically becomes flex-items.
- `flex-direction`
	- row
	- row-reverse
	- column
	- column-reverse
- `flex-wrap` (Line Wrapping)
	- nowrap
	- wrap
	- wrap-reverse
