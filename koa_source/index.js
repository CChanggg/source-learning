

const Koa=require('./application.js')
const app=new Koa()
const fs = require('fs');
const func = ctx => {
    console.log('aaaaaa');
    next();
}
//函数后面有一个*的就是链式调用

const func2 = function *(ctx, next) {
    console.log('bbbb')
    next();
}
const main = async (ctx, next) => {
    let str = await fs.readFile('./template.html', 'utf-8')
    console.log('dddd'+ str)
    ctx.response.body = await fs.readFile('./template.html', 'utf8');
    // ctx.response.body = 'Hello World'
}
// app.use(func);
// app.use(func2)
app.use(main);
app.listen(3000);
