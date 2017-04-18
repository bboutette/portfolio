var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8002);
console.log('serving barbara portfolio on  8002');
