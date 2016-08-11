// get current size, if none, initialize to 16px
// removes unit and sets new size
// if new size is too big or too low, set it to the boundary
// add a unit and return
function changeFontSize(context, target, delta, floor, ceiling) {
	var current_fsz = (!!target.style.fontSize ? target.style.fontSize : '16px');
	var unit = getUnit(current_fsz);
	var new_fsz = parseFloat(current_fsz) * (context.firstChild.nodeValue == '+' ? delta : 1/delta);
	new_fsz = (new_fsz > ceiling ? ceiling : (new_fsz < floor ? floor : new_fsz));
	new_fsz += unit;
	target.style.fontSize = new_fsz;
} 

function getUnit(str) {
	var unit = "";
	for (var i = 0; i < str.length; i++) {
		if (isAlpha(str[i])) {
			unit += str[i];
		}
	}
	return unit;
}

function isAlpha(xStr) {
    // var regEx = /^[a-zA-Z0-9\-]+$/;
    var regEx = /^[a-zA-Z]+$/;
    return xStr.match(regEx);
}  

var container = document.getElementsByClassName('container')[0];
var btn_incr = document.getElementsByClassName('font-increase')[0];
var btn_decr = document.getElementsByClassName('font-decrease')[0];

btn_decr.onclick = btn_incr.onclick = function(){changeFontSize(this, container, 1.5, 16, 56)};
