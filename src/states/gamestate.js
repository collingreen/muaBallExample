import ui.View as View;
import animate;

import mua.game.gamestate as GameState;
import src.views.scoreview as ScoreView;
import src.views.ballview as BallView;


exports = Class(GameState, function (supr) {

  this.setup = function () {
    // create the score and ball
    this.score = new ScoreView({
      superview: this.gameView,
      width: this.gameView.style.width,
      height: 100,
      stores: {game: this.stores.game}
    });

    this.ball = new BallView({
      superview: this.gameView,
      width: 200,
      height: 200,
      x: (this.gameView.style.width - 200) / 2,
      y: (this.gameView.style.height - 200) / 2
    });

    // ballVelocity
    this.ballVelocity = {
      x: 0,
      y: 0
    };
  };

  // every frame
  this.tick = function (dt) {
    var dtSeconds = dt / 1000;

    // calculate new ball position
    var newX = this.ball.style.x + (this.ballVelocity.x * dtSeconds);
    var newY = this.ball.style.y + (this.ballVelocity.y * dtSeconds);

    // if new position is off screen, flip velocity, otherwise move
    if (newX < 0 || newX + this.ball.style.width > this.gameView.style.width) {
      this.ballVelocity.x *= -1;
    } else {
      this.ball.style.x = newX;
    }

    if (newY < 0 || newY + this.ball.style.height > this.gameView.style.height) {
      this.ballVelocity.y *= -1;
    } else {
      this.ball.style.y = newY;
    }

    // dampen velocity
    this.ballVelocity.x *= .99;
    this.ballVelocity.y *= .99;
  };

  /**
   * Handle user actions
   */
  this.handleAction = function (opts) {
    if (opts.name === 'ballHit') {
      // update score
      this.stores.game.set({
        score: this.stores.game.get('score') + 1
      });

      // random ball velocity
      var angle = Math.random() * 2 * Math.PI;
      this.ballVelocity.x += Math.cos(angle) * 1000;
      this.ballVelocity.y += Math.sin(angle) * 1000;
    }
  };

});
