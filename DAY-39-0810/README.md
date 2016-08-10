######Front End Web Development School

#TIL

```javascript
parent_node.replaceChild(with_this, replace_this); //replaces a node, and returns the replaced node
NODE.cloneNode() //clones a node to depth 0
NODE.cloneNode(true) //deep clonse
NODE.removeChild(child_node)

```
```javascript
function changeNodePosition(a, b) {
	var temp = document.createElement('div');
	a = a.parentNode.replaceChild(temp, a);
	b = b.parentNode.replaceChild(a, b);
	temp = temp.parentNode.replaceChild(b, temp);
};
```