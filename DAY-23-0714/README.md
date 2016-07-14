###### Front End Web Devleopment School

#TIL

###`counter(var_name)` and `counter-increment: var_name;`
`counter()` is a function that outputs the number of times that `counter-increment` has been called for a given variable. What is its scope? The entire document. The given counter value is incremented every time, until `counter-reset: var_name;` is called. Ideally, some should be reset every section (like line numbers on code snippets or for every new lists/sublists). reset must be called to a specifice value, or by default 0, at the first instance of incrementing too.

###Position
- If both top and bottom are specified (technically, not auto), top wins.
- If both left and right are specified, left wins when direction is ltr (English, horizontal Japanese, etc.) and right wins when direction is rtl (Persian, Arabic, Hebrew, etc.).

###Filter
```css
.img-container {
	filter: url(resources.svg);
	filter: blur(5px);
	filter: brightness(0.4);
	filter: contrast(200%);
	filter: drop-shadow(16px 16px 20px blue);
	filter: grayscale(50%);
	filter: hue-rotate(90deg);
	filter: invert(75%);
	filter: opacity(25%);
	filter: saturate(30%);
	filter: sepia(60%);

	/* Apply multiple filters */
	filter: contrast(175%) brightness(3%);

	/* Global values */
	filter: inherit;
	filter: initial;
	filter: unset;
}
```

##[Navigation Menu](http://ui-patterns.com/patterns/navigation/list)

### Design

### Accessibility
tab navigation - 가능해야 하며 상태 디자인도 있어야 함
링크 선택 크기가 크면 좋음. 

### Video background
a>video
autoplay, loop
poster
controls
[xstockvideo.com](xstockvideo.com)

### Example 1 Squarespace.com

### Example 2 70percentpure.be

### Example 3 Holzweiler.no
the fill color of svgs can be controlled both directly onto the svg code and from css. In the svg attribute, add `fill="color_name"` or in css properties, add `fill: color_name;`