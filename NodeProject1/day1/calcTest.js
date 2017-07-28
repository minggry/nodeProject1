/**
 * http://usejsdoc.org/
 */
//외부 함수
//add, sub, multi, divide 함수를 생성해서
//그 함수를 불러와서 실행하는 소스 구현
//(인자는 두개씩)
//외부함수의 이름 calc.js
//실행하는 함수는 이름 calcTest.js




var calcTest = require('./calc.js');

console.log(calcTest.add(3,4));
console.log(calcTest.sub(8,4));
console.log(calcTest.multi(7,7));
console.log(calcTest.divide(12,4));

