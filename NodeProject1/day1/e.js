/**
 * http://usejsdoc.org/
 */

//var os = require('os');
//console.log(os.cpus());

//var hostname = os.hostname();
//console.log(hostname);				//DESKTOP-V6STGEL

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ동기, 비동기 방식의 차이점ㅡ노드는 비동기가 기본임!없는게 기본!ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//fs.writeFile(file, data[, options], callback)
var fs = require('fs');	//require는 첫줄에 쓴다
var data = 'korea test 티아카데미';
var fname = 'sam.txt';

////	비동기 방식의 파일 쓰기
//fs.writeFile(fname, data, function(err) {	//1,2채우고 함수 실행해라	//1.파일이름 2.쓰고자 하는 내용3.function()저 함수가 콜백함수같은거야
//	if(err){	//err이 null이 아니라면 에러가 났다는거다
//		console.log('쓰기 실패 :'+ err);
//		return;
//	}
//	console.log('쓰기 성공');
//});
//
//console.log('tacademy');


//	동기 방식의 파일 쓰기
//fs.writeFileSync(file, data[, options])		//싱크로나이즈줄임말
fs.writeFile(fname, data);
console.log('tacademy');


//	비동기 방식의 파일 읽기
var newData = 'korea';
//fs.readFile(fname,function(err, data){	
fs.readFile(fname,(err, data) => {	//다 읽으면 이 함수가 실행된다	//첫번째 인자는 err 두번째 인자는 data로!!
	if(err){
		console.log('read err:' + err)
		return;
	}
	newData = data;
	console.log('1' + newData);
});
//console.log(newData);	
console.log('2' + newData);

//readFile했다고 다 읽혀진게 아니다 자바랑 다르게 순차적으로 x 콜백함수가 돌아올 수 도 있다





