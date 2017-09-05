//events node.js里的事件模块
const Emitter = require('events')
const EventEmitter = Emitter.EventEmitter;
const event = new EventEmitter()
// 订阅
event.on('some_event',function() {
    console.log('some_event事件触发');
})
setTimeout(function() {
    event.emit('some_event')
},1000)
