(function() {
  var ImgA;

  ImgA = (function() {
    ImgA.prototype._current = 0;

    ImgA.prototype._duration = 0;

    ImgA.prototype._ended = false;

    ImgA.prototype._paused = true;

    ImgA.prototype._readyState = false;

    ImgA.prototype._reverse = false;

    ImgA.prototype._el = "#imga";

    ImgA.prototype._src = '/img/imga.jpg';

    ImgA.prototype._autoplay = true;

    ImgA.prototype._fps = 30;

    ImgA.prototype._autoloop = true;

    function ImgA(controller, options) {
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

    ImgA.prototype.load = function() {
      return this;
    };

    ImgA.prototype.getCurrent = function() {
      return this._current;
    };

    ImgA.prototype.setCurrent = function(current) {
      current = parseInt(current);
      if (!(typeof current === "number" && !isNaN(current))) {
        throw new TypeError("ImgAController.setFps() argument expected to be a number: " + typeof current + " given (" + current + ")");
      }
      this._current = current;
      return this;
    };

    ImgA.prototype.getFps = function() {
      return this._fps;
    };

    ImgA.prototype.setFps = function(fps) {
      fps = parseInt(fps);
      if (!(typeof fps === "number" && !isNaN(fps))) {
        throw new TypeError("ImgAController.setFps() argument expected to be a number: " + typeof fps + " given (" + fps + ")");
      }
      this._fps = fps;
      return this;
    };

    ImgA.prototype.getAutoloop = function() {
      return this._autoloop;
    };

    ImgA.prototype.setAutoloop = function(autoloop) {
      if (typeof autoloop !== "boolean") {
        throw new TypeError("ImgAController.setAutoloop() argument expected to be a boolean: " + typeof autoloop + " given");
      }
      this._autoloop = autoloop;
      return this;
    };

    ImgA.prototype.play = function() {
      this.controller.play();
      return this;
    };

    ImgA.prototype.stop = function() {
      this.controller.stop();
      return this;
    };

    ImgA.prototype.previous = function() {
      this.controller.goTo(this._current - 1);
      return this;
    };

    ImgA.prototype.next = function() {
      this.controller.goTo(this._current + 1);
      return this;
    };

    ImgA.prototype.goTo = function(frame) {
      this.controller.goTo(frame);
      return this;
    };

    ImgA.prototype.isValidController = function(controller) {
      if (!((controller != null ? typeof controller.play === "function" ? controller.play() : void 0 : void 0) instanceof ImgAController)) {
        throw new TypeError("You must provide a valid controller: it must implement a method `play()` which return the controller instance; " + (typeof (controller != null ? typeof controller.play === "function" ? controller.play() : void 0 : void 0)) + " given");
      }
      if (!((controller != null ? typeof controller.stop === "function" ? controller.stop() : void 0 : void 0) instanceof ImgAController)) {
        throw new TypeError("You must provide a valid controller: it must implement a method `stop()` which return the controller instance; " + (typeof (controller != null ? typeof controller.stop === "function" ? controller.stop() : void 0 : void 0)) + " given");
      }
      if (!((controller != null ? typeof controller.goTo === "function" ? controller.goTo(0) : void 0 : void 0) instanceof ImgAController)) {
        throw new TypeError("You must provide a valid controller: it must implement a method `goTo()` which return the controller instance; " + (typeof (controller != null ? typeof controller.goTo === "function" ? controller.goTo(0) : void 0 : void 0)) + " given");
      }
    };

    return ImgA;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ImgA = ImgA;
  } else {
    window.ImgA = ImgA;
  }

}).call(this);

//# sourceMappingURL=imga.js.map
