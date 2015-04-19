import mua.game.gamecontroller as GameController;
import mua.tether.datastore as DataStore;
import src.states.gamestate as GameState;


exports = Class(GameController, function (supr) {

  this.createGameStates = function () {
    var gamestate = new GameState({
      gameView: this.gameView,
      stores: this.stores
    });

    return {
      game: gamestate
    };
  };

  this.setup = function () {
    logger.log("GAME CONTROLLER SETUP");
  };

  this.createDataStores = function () {
    var gameStore = new DataStore({
      data: {
        score: 0
      }
    });

    return {
      game: gameStore
    };
  };

  this.ready = function () {
    logger.log("GAME CONTROLLER IS READY!");
  };

  this.reset = function () {
    logger.log("GAME CONTROLLER RESET - SETTING STATE GAME");
    this.stores.game.set({score: 0});
    this.setState({state: 'game'});
  };
});
