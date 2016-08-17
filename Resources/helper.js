function prevEl(current_node) {
	if (current_node.nodeType !== 1) {//given node is not an element
		throw new Error('Given node is not an element node');
	}
	do {
		current_node = current_node.previousSibling;
	} while(current_node && current_node.nodeType !== 1)
	return current_node;;
}

function nextEl(current_node) {
	if (current_node.nodeType !== 1) {//given node is not an element
		throw new Error('Given node is not an element node');
	}
	do {
		current_node = current_node.nextSibling;
	} while(current_node && current_node.nodeType !== 1)

	// current_node = current_node.nextSibling;
	// while(current_node && current_node.nodeType !== 1) {
	// 	current_node = current_node.nextSibling;
	// }


	return current_node;;
}



function isElName(node, name) {
	if (node.nodeType !== 1 || typeof(name) !== 'string') {
		throw new Error('뷁뷀구벩 isElName input type wrong');
	}
	return (node.localName === name);
}

function getUnit(value) {
	var unitString = "px rem em % vw vh vmin vmax";
	getUnit.unitList = unitString.split(' ');
	for (var i = 0, o = getUnit.unitList.length; i < o; i++) {
		var unit = getUnit.unitList[i];
		if (value.indexOf(unit) !== -1) { //-1 means not in string/array
			console.log(unit);
			return unit;
		}
	}
}

function isType(data) {
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}