// 返回请求对象
// req.url
// http.createServer(function(req,res){
// })
module.exports = {
    get url () {
        return this.req.url()
    },
    get method() {
        return this.req.method;
    }
}