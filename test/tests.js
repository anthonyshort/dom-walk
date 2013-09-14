var walk = require('dom-walk');
var assert = require('assert');

describe('dom-walk', function(){
  var i;

  beforeEach(function(){
    i = 0;
  });

  function increment(el, next) {
    i++;
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
      assert(i === 3, i);
      done();
    });
  })

  it('should walk an element with many nested children', function(done){
    var el = document.getElementById('walk4');
    walk(el, increment, function(){
      assert(i === 7, i);
      done();
    });
  })

})