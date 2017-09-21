const Emitter = require('events');
const debug = require('debug')('koa:application');
const http = require('http');
const response = require('./response');
const request = require('./request');
const context = require('./context')
const isGeneratorFunction = require('is-generator-function');
const deprecate = require('depd')('koa');
const convert = require('koa-convert');
const compose = require('koa-compose');
const onFinished = require('on-finished');
module.exports=class Application extends Emitter{
    constructor () {
        super();
        this.proxy = false;
        //中间件函数数组是koa的属性
        this.middleware = [];
        this.env = process.env.NODE_ENV || 'development';
        // 从参数对象去生成新的对象
        // this.context = context;
        // this.ctx 本身就是koa的public的属性
        this.context = Object.create(context);
        this.request = Object.create(request);
        this.response = Object.create(response);
    }
    listen(...args) {
        // 启动服务器 server
        // 闭包，将server 一直得以引用
        // callback 在用户访问的每一次都会执行 在执行的时候得到req，res两个对象
        const server = http.createServer(
            //要得到一个回调，回调希望放在面向对象，回调要处理的东西躲着呢
            this.callback()
        );
        // listen 本身
        return server.listen(...args);
    }
    callback() {
        //把中间件打包起来 串联成一个中间件 每个中间件都有小事 await，函数是屏障
        //既可以确保顺序 又可以同步执行 大家庭
        const fn = compose(this.middleware);
        // console.log(fn.toString());
        // 处理用户请求的地方
        // 闭包让此处干净
        // if(!this.listeners)
        const handleRequest = (req, res) => {
            console.log(req)
            console.log(res)
            // 上下文环境 用户请求进来时
            const ctx = this.createContext(req, res);
            res.statusCode = 404;
            // // fn一定是异步中间件 then 返回结果
            // const onerror = err =>ctx.onerror(err);
            const handleResponse = () => respond(ctx);
            // onFinished(res,()=>{});
            return fn(ctx).then(handleResponse);
        }
        return handleRequest;
        // console.log('访问log');
    }

    // 中间件添加 函数
     use(fn){
            if(typeof fn !=='function'){throw new TypeError('Middleware must be a function')}
            //isGeneratorFunction判断是不是生成器函数
            // 向下兼容 要做提示
            // koa2特色   
            if(isGeneratorFunction(fn)){
                deprecate('Support for generators will be removed in v3. ' +
                'See the documentation for examples of how to convert old middleware ' +
                'https://github.com/koajs/koa/blob/master/docs/migration.md')
                fn=convert(fn);
                console.log(fn);
            }
            debug('use %s',fn._name||fn.name ||'-');
            this.middleware.push(fn);
            // 链式方法调用  把对象返回，对象有use方法
            return this;
    }
    createContext (req, res) {
        const context = Object.create(this.context);
        const request = context.request = 
            Object.create(this.request);
        const response = context.response =
            Object.create(this.response);
        context.app = request.app = response.app = this;
        context.req = request.req = response.req = req;
        context.res = request.res = response.res = res;
        request.ctx = response.ctx = context;
        // 长与短
        request.response = response;
        response.request = request;
        return context;
    }
    };
    function respond(ctx) {
        // if (false === ctx.respond) return;
        const res = ctx.res;
        // console.log(res);
        // let body = ctx.body;
        // body = JSON.stringify(body);
        res.end('hello world');
    }


