/**
 * http://usejsdoc.org/
 */
//외부 함수
//add, sub, multi, divide 함수를 생성해서
//그 함수를 불러와서 실행하는 소스 구현
//(인자는 두개씩)
//외부함수의 이름 calc.js
//실행하는 함수는 이름 calcTest.js


exports.add = function(a, b){
	
	return a + b;
};

exports.sub = function(a, b){
	
	return a - b;
};

exports.multi = function(a, b){
	
	return a * b;
};

exports.divide = function(a, b){
	
	return a / b;
};

