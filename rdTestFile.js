var fs=require('fs');
fs.readFile('TestFile.txt',function(err,data){
	debugger;
	if(err) throw err;

	console.log(data.toString());

});