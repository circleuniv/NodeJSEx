var fs = require('fs');

fs.open('TestFile.txt', 'r', function (err, fd) {
    
    if (err) throw err;
    console.log("檔案開啟成功!");
});