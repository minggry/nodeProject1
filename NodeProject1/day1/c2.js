/**
 * 		exports.
 */

//이 객체가 외부와 접근되기 위해 exports해야해
var pri = function(){	//먼저 선언해야 사용가능 add함수에서
	console.log('내부함수');
};

exports.add = function(a, b){
	pri();
	return a + b;
};

var num = 100; 			//	private
exports.MAX = 100;		//	public


//var add = function(a, b){
//	return a + b;
//};

//MAX = 100;


//exports에 넣은 애들만 외부에서 접근가능! (은닉했다)
//c1에서 add호출시 내부함수 나옴 하지만 pri함수 바로 접근 불가! exports 안 넣어서!


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ







