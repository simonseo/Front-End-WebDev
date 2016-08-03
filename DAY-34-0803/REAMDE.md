######Front End Web Development School

#TIL - DOM

###Node Types
The numbers represent each node type. The most important are the first three. remember: `element > attribute > text`. If you selected a node, look at `.nodeType` property of the node.

01. `document.ELEMENT_NODE`
02. `document.ATTRIBUTE_NODE`
03. `document.TEXT_NODE`
04. `document.CDATA_SECTION_NODE`
05. `document.ENTITY_REFERENCE_NODE`
06. `document.ENTITY_NODE`
07. `document.PROCESSING_INSTRUCTION_NODE`
08. `document.COMMENT_NODE`
09. `document.DOCUMENT_NODE`
10. `document.DOCUMENT_TYPE_NODE`
11. `document.DOCUMENT_FRAGMENT_NODE`
12. `document.NOTATION_NODE`

===
###Selecting Nodes (노드 접근)
The following functions, with the exception of ID, return an array of all the elements that satisfy the criteria. Very costly. You can approach each elements by using the function `.item(n)` or the standard array approach `[n]`. The length of the array is stored in the property `array.length`. (SASS array.length() Python length(array))

- `document.getElementById()`
- `document.getElementsByClassName()`
- `document.getElementsByName()`
- `document.getElementsByTagName()`
- `document.getElementsByTagNameNS()`

===
###function
```javascript
function consolog(str) {
	console.log(str);
}
```

######small facts
- you don't need to say 'var' every time. You can use it once and list all the variables connected with commas. This is called a singleton pattern.