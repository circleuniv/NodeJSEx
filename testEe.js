// get the reference of EventEmitter class of events module
var events=require('events');
//create an object of EventEmitter class by using above reference.
var em=new events.EventEmitter();

em.on('FirstEvent',function(data){
	console.log('First subscriber:'+data);
});

em.emit('FirstEvent','我已經進入了第一事件的監聽函式!');