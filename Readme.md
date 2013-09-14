
# dom-walk

  Walk down a DOM tree

## Installation

  Install with [component(1)](http://component.io):

    $ component install anthonyshort/dom-walk

## API

    var walk = require('walk');

    walk(document.body, function(el, attrs, next){
      // Process the node
      next(); // Next node
    }, function(){
      // Walked all nodes
    });

## License

  MIT
