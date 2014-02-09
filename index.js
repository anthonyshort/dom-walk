var array = require('to-array');

function walk(el, process, done) {
  var end = done || function(){};
  var nodes = array(el.childNodes);

  function next(){
    if(nodes.length === 0) return end();
    var nextNode = nodes.shift();
    if(!el.contains(nextNode)) return next();
    walk(nextNode, process, next);
  }

  process(el, next);
}

module.exports = walk;