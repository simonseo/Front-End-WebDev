// var dp = window.devicePixelRatio;
// console.log('Device pixel density',dp);

// if (dp > 1) {
// 	console.log('고해상도 디스플레이의 픽셀 농도를 가집니다.');
// } else if (dp > 0) {
// 	console.log('저해상도 디스플레이의 픽셀 농도을 가집니다.');
// } else {
// 	console.log('디스플레이의 픽셀 농도가 이상합니다');
// }

// console.log('window_w',window.innerWidth);
// console.log('window_h',window.innerHeight);

// // 선언할 때 값을 대입하지 않으면 undefined 값을 갖는다. null 과 다르다.
// var scrolly;
// if (window.scrollTop) {
// 	console.log('scrolltop exists');
// 	scrolly = window.scrollTop;
// }
// else {
// 	console.log('scrolltop does not exist');
// 	console.log('window.scrollY', window.scrollY);
// 	scrolly = window.scrollY;
// }
// console.log('scrollY', scrolly);

// window.alert('빽백뺘애애애애액뺑ㄱㅇ뱅개뻉ㄱㄱ얘ㅃㅇ뺴걥얘뻅얘ㅃ꺱ㄷ얘뻉뺴뱨얘뺴ㅃ갭꺠뱪뺴ㅃ꺠ㅒㅃ얘뺴ㅒ뻉얘얘얘얘얘얘뺶ㄲ');

// var is_youngman = window.confirm('당신은 청년입니까?');
// if (is_youngman) {
// 	console.log('젋어서 좋겠다.');
// }
// else {
// 	console.log('당신은 아직 젊습니다.');
// }

// var user_name = window.prompt('what\'s your name?', 'placeholder');
// window.alert(user_name+'님 반갑습ㄴ디ㅏ');
// window.scrollBy(400, 300);

var count = 10;
function countDown() {
	console.log(count);
	count = count - 1;
	return count;
}

window.setInterval(function() {
	count -= 1;
	console.log(count);
}, 100);
