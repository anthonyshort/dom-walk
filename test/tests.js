var walk = require('dom-walk');
var assert = require('assert');

describe('dom-walk', function(){
  var i;

  beforeEach(function(){
    i = 0;
  });

  function increment(el, attrs, next) {
    i++;
    next();
  }

  it('should walk an element', function(done){
    var el = document.getElementById('walk');
    walk(el, increment, function(){
      assert(i === 1, 'walked ' + i + ' elements');
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

  it('should walk an element and get attributes', function(done){
    var el = document.getElementById('walk3');
    walk(el, function(el, attrs, next){
      assert(attrs.id === "walk3");
      assert(attrs['data-text'] === "foo");
      next();
    }, done);
  })

  it('should walk an element with many nested children', function(done){
    var el = document.getElementById('walk4');
    walk(el, increment, function(){
      assert(i === 4, 'walked ' + i + ' elements');
      done();
    });
  })

})