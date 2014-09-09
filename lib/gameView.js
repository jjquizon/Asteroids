(function() {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  
  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.ship = this.game.ship;
  };
  
  GameView.prototype.start = function() {
    var gv = this;
    gv.bindKeyHandlers();
    setInterval(function() {
      gv.game.step();
      gv.game.draw(gv.ctx);
    }, 20);
  };
  
  GameView.prototype.bindKeyHandlers = function(){
    var game = this.game;
    key('up', function() { game.ship.power([0.5, 0.5]); });
    key('down', function() { game.ship.power([-1, -1]); });
    key('space', function() { game.ship.fireBullet(); });
  };
  
})();