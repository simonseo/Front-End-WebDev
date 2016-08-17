
function countDown(target_number) {
	var count = target_number;
	console.log(count);
	function countDownInner() {
		console.log(count--);
	}
	return countDownInner;
}
var countdown = countDown(10);


var nav = document.getElementsByClassName('demo-nav')[0];
var list = nav.getElementsByTagName('a');
function fn(index) {
	return function() {
		console.log(index);
	}
}

for (index in list) {
	list[index].onclick = fn(index); //실행할 때는 index값을 전해줄 수 있다. 
	                                 //순환할 당시의 index값을 탈출 시켜야함.
	                                 //클로져를 사용하지 않으면 index가 undefined이건, 
	                                 //루프의 마지막 값이 나온다. 
}