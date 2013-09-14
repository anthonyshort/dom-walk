var array = require('to-array');
var tick = require('next-tick');

function walk(el, fn, done) {
  var nodes;

  // Only use the root element at the top level
  // This prevents recursion and allows `fn` to be
  // called on `el` as well.
  if(fn.depth == null) {
    fn.depth = 0;
    nodes = [el];
  }
  else {
    fn.depth += 1;
    nodes = array(el.childNodes);
  }

  function next(stop){

    // No more nodes left
    if(stop === false || nodes.length === 0) {
      fn.depth = null;
      if(done) done();
      return;
    }

    var child = nodes.shift();

    // If there are child nodes, we should work
    // inside the element
    if(child.childNodes.length) {
      walk(child, fn, next);
    }
    else {
      fn(child, next);
    }
  }

  tick(next);
}

module.exports = walk;