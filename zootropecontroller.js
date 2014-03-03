(function() {
  var ZootropeController;

  ZootropeController = (function() {
    ZootropeController.prototype._current = 0;

    ZootropeController.prototype._duration = 0;

    ZootropeController.prototype.$el = $({});

    ZootropeController.prototype.src = '/img/zootrop.jpg';

    ZootropeController.prototype.frames = new Array();

    ZootropeController.prototype.autoplay = true;

    ZootropeController.prototype.fps = 30;

    ZootropeController.prototype.autoloop = true;

    ZootropeController.prototype.interval = void 0;

    function ZootropeController() {
      return this;
    }

    ZootropeController.prototype.initialize = function() {
      return this;
    };

    ZootropeController.prototype.play = function() {
      this.interval = setInterval((function(_this) {
        return function() {
          return _this.next();
        };
      })(this), 1000 / this.fps);
      return this;
    };

    ZootropeController.prototype.stop = function() {
      clearInterval(this.interval);
      this.goTo(0);
      return this;
    };

    ZootropeController.prototype.pause = function() {
      clearInterval(this.interval);
      return this;
    };

    ZootropeController.prototype.previous = function() {
      return this.goTo(this._current - 1);
    };

    ZootropeController.prototype.next = function() {
      return this.goTo(this._current + 1);
    };

    ZootropeController.prototype.setCurrent = function(current) {
      return this.goTo(current);
    };

    ZootropeController.prototype.goTo = function(frame) {
      frame = parseInt(frame);
      if (!(typeof frame === "number" && !isNaN(frame))) {
        throw new TypeError("ZootropeController.goTo() argument expected to be a number: " + typeof frame + " given (" + frame + ")");
      }
      if (!frame) {
        frame = 0;
      }
      this._current = frame;
      this.$el.trigger("frameupdate", [frame]);
      return this;
    };

    ZootropeController.prototype.getCurrent = function() {
      return this._current;
    };

    ZootropeController.prototype.getDuration = function() {
      return this._duration;
    };

    ZootropeController.prototype.setParent = function(_parent) {
      if (_parent instanceof Zootrope) {
        return this._parent = _parent;
      } else {
        throw new TypeError("ZootropeController constructor expected A Zootrop as parent: " + typeof _parent + " given");
      }
    };

    ZootropeController.prototype.clean = function() {
      return this.$el.empty();
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
