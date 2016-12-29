var fs=require('fs');
fs.unlink('TestFile.txt',function (err) {
	// body...
	if(err) throw err;
	console.log("已經刪除檔案!");
});