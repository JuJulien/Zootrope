(function() {
  var Zootrope;

  Zootrope = (function() {
    Zootrope.prototype._current = 0;

    Zootrope.prototype._duration = 0;

    Zootrope.prototype._ended = false;

    Zootrope.prototype._paused = true;

    Zootrope.prototype._readyState = false;

    Zootrope.prototype._reverse = false;

    Zootrope.prototype._el = "#zootrope";

    Zootrope.prototype._src = '/img/zootrope.jpg';

    Zootrope.prototype._autoplay = true;

    Zootrope.prototype._fps = 30;

    Zootrope.prototype._autoloop = true;

    function Zootrope(controller, options) {
      var _autoplay, _el, _src;
      if (options && typeof options !== "object") {
        throw new Error("the Options argument must be a valid object");
      }
      if (!controller) {
        throw new Error("A valid controller must be provided");
      }
      this.controller = controller;
      this.isValidController(this.controller);
      this.controller._parent = this;
      if (options) {
        if (options.el) {
          _el = options.el;
        }
        if (options.src) {
          if (typeof options.src === "string" || options.src instanceof Array) {
            _src = options.src;
          } else {
            throw new TypeError("options.src expected to be a string or an array: " + typeof options.src + " given");
          }
        }
        if (typeof options.autoplay === "boolean") {
          _autoplay = options.autoplay;
        }
        if (options.fps) {
          this.setFps(options.fps);
        }
        if (options.autoloop) {
          this.setAutoloop(options.autoloop);
        }
      }
      return this;
    }

    Zootrope.prototype.load = function() {
      return this;
    };

    Zootrope.prototype.getCurrent = function() {
      return this._current;
    };

    Zootrope.prototype.setCurrent = function(current) {
      current = parseInt(current);
      if (!(typeof current === "number" && !isNaN(current))) {
        throw new TypeError("ZootropeController.setFps() argument expected to be a number: " + typeof current + " given (" + current + ")");
      }
      this._current = current;
      return this;
    };

    Zootrope.prototype.getFps = function() {
      return this._fps;
    };

    Zootrope.prototype.setFps = function(fps) {
      fps = parseInt(fps);
      if (!(typeof fps === "number" && !isNaN(fps))) {
        throw new TypeError("ZootropeController.setFps() argument expected to be a number: " + typeof fps + " given (" + fps + ")");
      }
      this._fps = fps;
      return this;
    };

    Zootrope.prototype.getAutoloop = function() {
      return this._autoloop;
    };

    Zootrope.prototype.setAutoloop = function(autoloop) {
      if (typeof autoloop !== "boolean") {
        throw new TypeError("ZootropeController.setAutoloop() argument expected to be a boolean: " + typeof autoloop + " given");
      }
      this._autoloop = autoloop;
      return this;
    };

    Zootrope.prototype.play = function() {
      this.controller.play();
      return this;
    };

    Zootrope.prototype.stop = function() {
      this.controller.stop();
      return this;
    };

    Zootrope.prototype.previous = function() {
      this.controller.goTo(this._current - 1);
      return this;
    };

    Zootrope.prototype.next = function() {
      this.controller.goTo(this._current + 1);
      return this;
    };

    Zootrope.prototype.goTo = function(frame) {
      this.controller.goTo(frame);
      return this;
    };

    Zootrope.prototype.isValidController = function(controller) {
      if (!((controller != null ? typeof controller.play === "function" ? controller.play() : void 0 : void 0) instanceof ZootropeController)) {
        throw new TypeError("You must provide a valid controller: it must implement a method `play()` which return the controller instance; " + (typeof (controller != null ? typeof controller.play === "function" ? controller.play() : void 0 : void 0)) + " given");
      }
      if (!((controller != null ? typeof controller.stop === "function" ? controller.stop() : void 0 : void 0) instanceof ZootropeController)) {
        throw new TypeError("You must provide a valid controller: it must implement a method `stop()` which return the controller instance; " + (typeof (controller != null ? typeof controller.stop === "function" ? controller.stop() : void 0 : void 0)) + " given");
      }
      if (!((controller != null ? typeof controller.goTo === "function" ? controller.goTo(0) : void 0 : void 0) instanceof ZootropeController)) {
        throw new TypeError("You must provide a valid controller: it must implement a method `goTo()` which return the controller instance; " + (typeof (controller != null ? typeof controller.goTo === "function" ? controller.goTo(0) : void 0 : void 0)) + " given");
      }
    };

    return Zootrope;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.Zootrope = Zootrope;
  } else {
    window.Zootrope = Zootrope;
  }

}).call(this);

//# sourceMappingURL=zootrope.js.map
