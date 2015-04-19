import ui.ImageView as ImageView;
import mua.tether.tetherview as TetherView;


exports = Class(TetherView, function (supr) {
  this.create = function () {
    // image for ball
    this.image = new ImageView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      image: 'resources/images/ball.png'
    });

    // listen for clicks
    var self = this;
    this.on('InputSelect', function () {
      self.action({name: 'ballHit'});
    });
  };
});
