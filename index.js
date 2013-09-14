var array = require('to-array');

function walk(el, process, done) {
  var end = done || function(){};
  var nodes = array(el.childNodes);

  function next(){
    if(nodes.length === 0) return end();
    walk(nodes.shift(), process, next);
  }

  process(el, next);
}

module.exports = walk;