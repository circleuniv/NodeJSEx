var emitter=require('events').EventEmitter;
var em=new emitter();

em.addListener('FirstEvent',function(data){
	console.log('First Scriber: '+data);
});

em.on('SecondEvent',function(data){
	console.log('Second Scriber:'+data);
});

em.emit('FirstEvent',"這是第一個監聽式!");
em.emit('SecondEvent',"這是第二個監聽式!");