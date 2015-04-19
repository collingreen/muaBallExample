import ui.TextView as TextView;
import mua.tether.tetherview as TetherView;


exports = Class(TetherView, function (supr) {
  this.create = function () {
    // textview
    this.text = new TextView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      horizontalAlign: 'center',
      color: 'white'
    });
  };

  this.update = function (opts) {
    this.text.setText(opts.store.score);
  };
});
