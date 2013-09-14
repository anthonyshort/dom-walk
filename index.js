var array = require('to-array');
var attributes = require('attributes');
var tick = require('next-tick');

function walk(el, fn, done) {
  var nodes = array(el.children);

  // Only use the root element at the top level
  // This prevents recursion and allows `fn` to be
  // called on `el` as well.
  if(fn.depth == null) {
    fn.depth = 0;
    nodes.unshift(el);
  }
  else {
    fn.depth += 1;
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
    if(child.children.length) {
      walk(child, fn, next);
    }
    else {
      fn(child, attributes(el), next);
    }
  }

  tick(next);
}

module.exports = walk;