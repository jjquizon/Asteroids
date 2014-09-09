(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function (params) {
    this.posX = params.pos[0];
    this.posY = params.pos[1];
    this.velX = params.vel[0];
    this.velY = params.vel[1];
    this.radius = params.radius;
    this.color = params.color;
    this.game = params.game;
  };
  
  // var mo = new MovingObject(
  //   { pos: [30, 30], vel: 10, radius: 5, color: "#00FF00"}
  // );
  
  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    
    ctx.arc(
      this.posX,
      this.posY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    
    ctx.fill();
    
  };
  
  MovingObject.prototype.move = function () {
    // velocity = [speed, direction]
    if (this instanceof Asteroids.Bullet) {
      this.posX = this.posX + this.velX;
      this.posY = this.posY + this.velY;
    } else {
    this.posX = this.posX + this.velX;
    this.posY = this.posY + this.velY;
    var tempPos = this.game.wrap(this.posX, this.posY);
    this.posX = tempPos[0];
    this.posY = tempPos[1];
    }
    
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    // check if distance b/n ctr pts is < sum of radii;
    var xDiff = this.posX - otherObject.posX;
    var yDiff = this.posY - otherObject.posY;
    var distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    var rSum = this.radius + otherObject.radius;
    if (distance < rSum) {
      return true;
    } else {
      return false;
    }
  };
  
  MovingObject.prototype.collideWith = function(otherObject) {
    // this.game.remove(otherObject);
    // this.game.remove(this);
  };

  
})();

