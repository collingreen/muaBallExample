import mua;
import .gamecontroller as GameController;

import ui.View as View;


exports = Class(mua.game.Application, function () {

  this.initUI = function () {
    // create game view
    this.gameView = new View({superview: this.view});
    mua.ui.scale({
      view: this.gameView,
      orientation: 'portrait',
      center: true
    });

    // create game controller
    this.gameController = new GameController({
      gameView: this.gameView
    });
    this.gameController.start();
  };

  /*
   * handleAction
   *
   * Pass all tether actions on to `this.gameController` to handle instead.
   *
   */
  this.handleAction = function () {
    this.gameController.handleAction.apply(this.gameController, arguments);
  };

  this.launchUI = function () {};
});
