(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Bullet = Asteroids.Bullet = function(pos) {
    this.color = Bullet.COLOR;
    this.radius = Bullet.RADIUS;
    this.velX = 1;
    this.velY = 1;
    this.posX = pos[0];
    this.posY = pos[1];
  };
  
  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
  
  Bullet.COLOR = "#000000";
  Bullet.RADIUS = 8;
  
  
  Bullet.prototype.collideWith = function(otherObject) {

    if (otherObject instanceof Asteroids.Asteroid){
      console.log("I destroyed an asteroid! Yay.")
      this.game.remove(otherObject);
    }
  };
})();