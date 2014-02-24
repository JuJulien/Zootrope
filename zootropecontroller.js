(function() {
  var ZootropeController;

  ZootropeController = (function() {
    ZootropeController.prototype._current = 0;

    function ZootropeController(_parent) {
      this._parent = _parent;
      return this;
    }

    ZootropeController.prototype.play = function() {
      return this;
    };

    ZootropeController.prototype.stop = function() {
      return this;
    };

    ZootropeController.prototype.goTo = function(frame) {
      var _ref;
      if (!frame) {
        frame = 0;
      }
      this._current = (_ref = this._parent) != null ? _ref._current = frame : void 0;
      return this;
    };

    return ZootropeController;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ZootropeController = ZootropeController;
  } else {
    window.ZootropeController = ZootropeController;
  }

}).call(this);

//# sourceMappingURL=zootropecontroller.js.map
