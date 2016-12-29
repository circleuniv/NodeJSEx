var fs = require('fs');

fs.open('TestFile.txt', 'r', function (err, fd) {
    debugger;
    if (err) {
        return console.error(err);
    }
    
    var buffr = new Buffer(1024);
    debugger;
    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
       
        if (err) throw err;
    debugger;       
        // Print only read bytes to avoid junk.
        if (bytes > 0) {
        	console.log(bytes+" 字元被讀取");
            console.log(buffr.slice(0, bytes).toString());
        }
        
        // Close the opened file.
        fs.close(fd, function (err) {
            if (err) throw err;
        });
    });
});
