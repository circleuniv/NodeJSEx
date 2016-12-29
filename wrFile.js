var fs=require('fs');
fs.writeFile('test.txt',"您好嗎?",function(err){
	if(err) throw err;

	console.log("資料已經被寫入");

});