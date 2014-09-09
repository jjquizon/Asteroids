(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  Util = Asteroids.Util = {};
  
  Util.inherits = function (subclass, superclass) {
    var Surrogate = function () {}
    Surrogate.prototype = superclass.prototype;
    subclass.prototype = new Surrogate();
  };
  
  Util.randomVec = function() {
    var dx = Math.floor(((Math.random() + 1)* 2));
    var dy = Math.floor(((Math.random() + 1) * 2));
    return [ dx, dy ];
  };

  
})();