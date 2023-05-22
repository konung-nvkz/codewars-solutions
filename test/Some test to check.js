const path = require('path');
let name ="";

function prepareName(name) {
    return `git add ${__dirname},"\",${name.replace(/\u0020/g, "*")}.js`
}
test test test 