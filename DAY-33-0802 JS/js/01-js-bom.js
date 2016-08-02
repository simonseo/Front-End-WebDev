dp = window.devicePixelRatio;
console.log('Device pixel density',dp);

if (dp > 1) {
	console.log('고해상도 디스플레이의 픽셀 농도를 가집니다.')
} else if (dp > 0) {
	console.log('저해상도 디스플레이의 픽셀 농도을 가집니다.')
} else {
	console.log('디스플레이의 픽셀 농도가 이상합니다')
}

console.log('window_w',window.innerWidth);
console.log('window_h',window.innerHeight);

// 선언할 때 값을 대입하지 않으면 undefined 값을 갖는다. null 과 다르다.
var scrollY;
if (window.scrollTop) {
	console.log('scrolltop exists');
	scrollY = window.scrollTop;
}
else {
	console.log('scrolltop does not exist');
	console.log('window.scrollY', window.scrollY);
	scrollY = window.scrollY;
}
console.log('scrollY', scrollY);
