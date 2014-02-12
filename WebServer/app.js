//모듈 설정
var http = require('http');
var express = require('express');

//연결 
var app = express();

//응답요청
app.use(function (request, response){
	var num1 = request.param('num1');
	var num2 = request.param('num2');
	
	//받은 데이터를 십진수 정수형으로 덧셈
	var sum = parseInt(num1,10) + parseInt(num2,10);
	
	//덧셈 결과 응답
	response.send('<result>'+sum+'</result>');
});

//서버 실행
http.createServer(app).listen(1717, function() {
  console.log('서버 실핼 중 http://220.149.217.111:1717');
});