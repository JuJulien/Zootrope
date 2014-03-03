(function() {
  var Zootrope,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Zootrope = (function() {
    Zootrope.prototype._readyState = false;

    Zootrope.prototype.ended = false;

    Zootrope.prototype.paused = true;

    Zootrope.prototype.reverse = false;

    Zootrope.prototype.el = "#zootrope";

    Zootrope.prototype.autoplay = false;

    Zootrope.prototype.fps = 30;

    Zootrope.prototype.autoloop = true;

    function Zootrope(controller, options) {
      this.toggle = __bind(this.toggle, this);
      if (options && typeof options !== "object") {
        throw new Error("The options argument must be a valid object");
      }
      if (!controller) {
        throw new Error("A valid controller must be provided");
      }
      this.controller = controller;
      this.controller.setParent(this);
      if (options) {
        if (options.el) {
          this.el = options.el;
        }
        if (options.src) {
          if (typeof options.src === "string" || options.src instanceof Array) {
            this.controller.src = options.src;
          } else {
            throw new TypeError("options.src expected to be a string or an array: " + typeof options.src + " given");
          }
        }
        if (typeof options.autoplay === "boolean") {
          this.autoplay = options.autoplay;
        }
        if (options.fps) {
          this.setFps(options.fps);
        }
        if (options.autoloop) {
          this.setAutoloop(options.autoloop);
        }
        if (options.duration) {
          if (typeof options.duration === "number") {
            this.controller._duration = options.duration;
          } else {
            throw new TypeError("options.duration expected to be a number: " + typeof options.duration + " given");
          }
        }
      }
      this.controller.$el = $(this.el);
      if (!this.controller.$el.length) {
        throw new TypeError("Couldn't find container: " + this.el);
      }
      this.controller.initialize(this.autoplay);
      return this;
    }

    Zootrope.prototype.load = function() {
      return this;
    };

    Zootrope.prototype.getCurrent = function() {
      return this.controller.getCurrent();
    };

    Zootrope.prototype.getDuration = function() {
      return this.controller.getDuration();
    };

    Zootrope.prototype.getFps = function() {
      return this.fps;
    };

    Zootrope.prototype.setFps = function(fps) {
      fps = parseInt(fps);
      if (!(typeof fps === "number" && !isNaN(fps))) {
        throw new TypeError("ZootropeController.setFps() argument expected to be a number: " + typeof fps + " given (" + fps + ")");
      }
      this.fps = fps;
      this.controller.fps = fps;
      if (!this.paused) {
        this.pause();
        this.play();
      }
      return this;
    };

    Zootrope.prototype.getAutoloop = function() {
      return this.autoloop;
    };

    Zootrope.prototype.setAutoloop = function(autoloop) {
      if (typeof autoloop !== "boolean") {
        throw new TypeError("ZootropeController.setAutoloop() argument expected to be a boolean: " + typeof autoloop + " given");
      }
      this.autoloop = autoloop;
      return this;
    };

    Zootrope.prototype.toggle = function() {
      if (this.paused) {
        this.play();
      } else {
        this.pause();
      }
      return this;
    };

    Zootrope.prototype.play = function() {
      if (this.paused) {
        this.controller.play();
        this.paused = false;
        this.controller.$el.trigger("playing");
      }
      return this;
    };

    Zootrope.prototype.stop = function() {
      this.controller.stop();
      this.paused = true;
      this.controller.$el.trigger("stopped");
      return this;
    };

    Zootrope.prototype.pause = function() {
      if (!this.paused) {
        this.controller.pause();
        this.paused = true;
        this.controller.$el.trigger("paused");
      }
      return this;
    };

    Zootrope.prototype.previous = function() {
      this.controller.previous();
      return this;
    };

    Zootrope.prototype.next = function() {
      this.controller.next();
      return this;
    };

    Zootrope.prototype.goTo = function(frame) {
      this.controller.goTo(frame);
      return this;
    };

    Zootrope.prototype.doctor = function() {
      var _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      if (!(((_ref = this.controller) != null ? typeof _ref.play === "function" ? _ref.play() : void 0 : void 0) instanceof ZootropeController)) {
        throw new Error("You must provide a valid controller: it must implement a method `play()` which return the controller instance; " + (typeof ((_ref1 = this.controller) != null ? typeof _ref1.play === "function" ? _ref1.play() : void 0 : void 0)) + " given");
      }
      if (!(((_ref2 = this.controller) != null ? typeof _ref2.stop === "function" ? _ref2.stop() : void 0 : void 0) instanceof ZootropeController)) {
        throw new Error("You must provide a valid controller: it must implement a method `stop()` which return the controller instance; " + (typeof ((_ref3 = this.controller) != null ? typeof _ref3.stop === "function" ? _ref3.stop() : void 0 : void 0)) + " given");
      }
      if (!(((_ref4 = this.controller) != null ? typeof _ref4.pause === "function" ? _ref4.pause() : void 0 : void 0) instanceof ZootropeController)) {
        throw new Error("You must provide a valid controller: it must implement a method `pause()` which return the controller instance; " + (typeof ((_ref5 = this.controller) != null ? typeof _ref5.pause === "function" ? _ref5.pause() : void 0 : void 0)) + " given");
      }
      if (!(((_ref6 = this.controller) != null ? typeof _ref6.previous === "function" ? _ref6.previous() : void 0 : void 0) instanceof ZootropeController)) {
        throw new Error("You must provide a valid controller: it must implement a method `previous()` which return the controller instance; " + (typeof ((_ref7 = this.controller) != null ? typeof _ref7.previous === "function" ? _ref7.previous() : void 0 : void 0)) + " given");
      }
      if (!(((_ref8 = this.controller) != null ? typeof _ref8.next === "function" ? _ref8.next() : void 0 : void 0) instanceof ZootropeController)) {
        throw new Error("You must provide a valid controller: it must implement a method `next()` which return the controller instance; " + (typeof ((_ref9 = this.controller) != null ? typeof _ref9.next === "function" ? _ref9.next() : void 0 : void 0)) + " given");
      }
      if (!(((_ref10 = this.controller) != null ? typeof _ref10.goTo === "function" ? _ref10.goTo(0) : void 0 : void 0) instanceof ZootropeController)) {
        throw new Error("You must provide a valid controller: it must implement a method `goTo()` which return the controller instance; " + (typeof ((_ref11 = this.controller) != null ? typeof _ref11.goTo === "function" ? _ref11.goTo(0) : void 0 : void 0)) + " given");
      }
      if (typeof ((_ref12 = this.controller) != null ? typeof _ref12.getCurrent === "function" ? _ref12.getCurrent() : void 0 : void 0) !== "number") {
        throw new Error("You must provide a valid controller: it must implement a method `getCurrent()` which return the frame current index (number); " + (typeof ((_ref13 = this.controller) != null ? typeof _ref13.getCurrent === "function" ? _ref13.getCurrent() : void 0 : void 0)) + " given");
      }
      if (typeof ((_ref14 = this.controller) != null ? typeof _ref14.getDuration === "function" ? _ref14.getDuration() : void 0 : void 0) !== "number") {
        throw new Error("You must provide a valid controller: it must implement a method `getDuration()` which return the frame current index (number); " + (typeof ((_ref15 = this.controller) != null ? typeof _ref15.getDuration === "function" ? _ref15.getDuration() : void 0 : void 0)) + " given");
      }
      return true;
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
