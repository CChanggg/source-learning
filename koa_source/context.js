// context 对request , response 代理
const delegate = require('delegates');
const proto = module.exports = {
}
delegate(proto, 'response')
    .access('body')

delegate(proto, 'request')
    .access('url')
