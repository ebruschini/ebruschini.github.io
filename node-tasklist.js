var fs = require('fs');

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

eval(fs.readFileSync('./tasklist.js', 'utf8'));

module.exports = taskList;