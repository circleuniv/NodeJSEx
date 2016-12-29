var fs=require('fs');
fs.appendFile('test.txt',"我很好！",function(err){
	if(err) throw err;

	console.log("資料已經被加入");

});