// CommonJS 模块化规范
// Emitter是什么?  对事件的订阅发布的方法
// JS 事件机制(事件发生的时候挂上钩子) events 事件队列
// 事件触发与事件监听功能的封装
const Emitter = require('events')
const http = require('http')
const debug = require('debug')

module.exports = class Application extends Emitter{
    constructor () {
        super()
        this.middleware = [] //[]里是函数的集合
    }
    // 启用中间件
    use (fn) {
        console.log(fn)
        this.middleware.push(fn)
        // chain 链式调用
        return this 
    }
    // reset运算符    
    listen (...args) {
        // 将http的server封装一下
        debug('listen')
        const server = http.createServer(this.callback())
        return server.listen(...args)
    }
    callback(){
        const handleRequest = (req,res) => {
            res.end('hello world')
        }
        return handleRequest 
    }
}