function moveBox(box, position, cb) {
	position = typeof positiion !== 'undefined' : {'x':0, 'y':0};
	cb = typeof cb === 'function' ? cb : function() {};

	cb();
}
var demoBox = document.getElementsByClassName('demo-box')[0];
demoBox.ondblclick = function(e) {
	console.log('clicked demo box');
	console.log(e);
	moveBox(this, {'x':e.clientX, 'y':e.clientY}, function() {
		console.log('callback called back.');
	})
};
