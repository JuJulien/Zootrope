(function() {
  var ImgAController;

  ImgAController = (function() {
    ImgAController.prototype._current = 0;

    function ImgAController(_parent) {
      this._parent = _parent;
      return this;
    }

    ImgAController.prototype.play = function() {
      return this;
    };

    ImgAController.prototype.stop = function() {
      return this;
    };

    ImgAController.prototype.goTo = function(frame) {
      var _ref;
      if (!frame) {
        frame = 0;
      }
      this._current++;
      if ((_ref = this._parent) != null) {
        _ref._current = frame;
      }
      return this;
    };

    return ImgAController;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ImgAController = ImgAController;
  } else {
    window.ImgAController = ImgAController;
  }

}).call(this);

//# sourceMappingURL=imgacontroller.js.map
