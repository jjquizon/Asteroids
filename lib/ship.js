(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Ship = Asteroids.Ship = function (game) {
    this.color = Ship.COLOR;
    this.radius = Ship.RADIUS;
    this.velX = 0;
    this.velY = 0;
    this.posX = game.randomPosition()[0];
    this.posY = game.randomPosition()[1];
    this.game = game;
  };
  
    Asteroids.Util.inherits(Ship, Asteroids.MovingObject);
    Ship.RADIUS = 10;
    Ship.COLOR = "#0000FF";
    Ship.vel = 0;

    Ship.prototype.relocate = function () {
      var new_pos = this.game.randomPosition();
      this.posX = new_pos[0];
      this.posY = new_pos[1];
      this.vel = 0;
    };
    
    Ship.prototype.power = function(impulse){
      if (this.velX < 5) { 
        this.velX += impulse[0];
      }
      if (this.velY < 5){
        this.velY += impulse[1];
      }
    };
    
    Ship.prototype.fireBullet = function() {
      var bullet = new Asteroids.Bullet([this.posX, this.posY]);
      this.game.add(this.bullet);
    };
})();