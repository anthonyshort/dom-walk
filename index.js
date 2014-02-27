var array = require('to-array');
var contains = require('dom-contains');

function walk(el, process, done) {
  var end = done || function(){};
  var nodes = array(el.childNodes);

  function next(){
    if(nodes.length === 0) return end();
    var nextNode = nodes.shift();
    if(!contains(el, nextNode)) return next();
    walk(nextNode, process, next);
  }

  process(el, next);
}

module.exports = walk;