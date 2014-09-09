(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this);
    this.allObjects();
    this.bullets = [];
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.NUM_ASTEROIDS = 8;
  
  Game.prototype.allObjects = function() {
    var objectsArray = [];
    objectsArray = objectsArray.concat(this.asteroids);
    objectsArray.push(this.ship);
    objectsArray = objectsArray.concat(this.bullets);
    return objectsArray;
  };
  
  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid (this.randomPosition(), this));
    }
  };
  
  Game.prototype.add = function (obj) {
    if (obj instanceof Asteroids.Asteroid){
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  };
  
  Game.prototype.randomPosition = function () {
    var x = Math.floor(Math.random() * Game.DIM_X);
    var y = Math.floor(Math.random() * Game.DIM_Y);
    return [ x, y ];
  };
  
  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach (function (asteroid) {
      asteroid.draw(ctx);
    });
  };
  
  Game.prototype.moveObjects = function () {
    this.allObjects().forEach (function (asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function (posX, posY) {
    if (posX > 800) {
      posX -= 800;
    } 
    
    if (posY > 600) {
      posY -= 600;
    }
    
    return [ posX, posY ];
  };
  
  Game.prototype.checkCollisions = function() {
    var game = this;
    game.allObjects().forEach(function(asteroid) {
      game.allObjects().forEach(function(otherAsteroid){
        if (asteroid.isCollidedWith(otherAsteroid)) {
          if (asteroid === otherAsteroid) {
            return;
          } else {
            asteroid.collideWith(otherAsteroid);
          }
        } 
      });
    });
  };
  
  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroid) {
      var index = this.asteroids.indexOf(obj);
      this.asteroids.splice(index, 1); 
    }
    if (obj instanceof Bullet){
      var index = this.bullets.indexOf(obj);
      this.bullets.splice(index, 1); 
    }
  };
  
  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };
  
  

})();