(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
    this.velX = Asteroids.Util.randomVec()[0];
    this.velY = Asteroids.Util.randomVec()[1];
    this.posX = pos[0];
    this.posY = pos[1];
    this.game = game;
    
  };
  
  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
  
  Asteroid.COLOR = "#000000";
  Asteroid.RADIUS = 20;
  
  Asteroid.prototype.collideWith = function(otherObject) {

    if (otherObject instanceof Asteroids.Ship){
      console.log("I COLLIDED")
      otherObject.relocate();
    }
  };
  
})();
