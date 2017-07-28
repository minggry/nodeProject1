/**
 * 		require()
 */


////calc라는 객채
//var calc = {};
////얘를 객체의 메소드 프로퍼티에 넣을수 있겠지
////var add = function(a, b){
////	return a + b;
////};
//
////calc.add = add;			//calc에다가 add합니다 누구를? add를
//console.log(add(3,4));
////console.log(calc.add(3,4));	//함수가 객체의 뭐가 됐다????


//c2로 기능 함수를 뺴자
//c2의 함수를 c1에서 갖다 쓰고싶다!	=> require() 함수 사용하자

//var calc = require('./c2.js');	//require하려면 앞에 변수를 써라! 쩜 찍어 쓰기위해	
var calc = require('./c2');			//2.확장자를 빼보자 => 확장자 생략 가능

console.log(calc.add(3,4));

console.log(calc.MAX);
//undefined 나오는 이유? 
//calc.MAX; 라고 인식해서 (c1의)


//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ








