var walk = require('dom-walk');
var assert = require('assert');

describe('dom-walk', function(){
  var i;

  beforeEach(function(){
    i = 0;
  });

  function increment(el, next) {
    if(el.nodeType === 1) {
      i++;
    }
    next();
  }

  it('should walk an element', function(done){
    var el = document.getElementById('walk');
    walk(el, increment, function(){
      assert(i === 1, i);
      done();
    });
  })

  it('should walk an element with children', function(done){
    var el = document.getElementById('walk2');
    walk(el, increment, function(){
      assert(i === 2);
      done();
    });
  })

  it('should walk an element with many nested children', function(done){
    var parent = document.getElementById('walk4');
    walk(parent, increment, function(el){
      assert(i === 4);
      done();
    });
  })

})