(function() {
  var ImgA;

  ImgA = (function() {
    ImgA.prototype._controller = new ImgASprite();

    function ImgA(controller) {
      var e;
      if (controller != null) {
        this._controller = controller;
      }
      try {
        this.isValidController(this._controller);
      } catch (_error) {
        e = _error;
        console.error(e);
        return;
      }
      this;
    }

    ImgA.prototype.play = function() {
      this._controller.play();
      return this;
    };

    ImgA.prototype.stop = function() {
      this._controller.stop();
      return this;
    };

    ImgA.prototype.previous = function() {
      this._controller.previous();
      return this;
    };

    ImgA.prototype.next = function() {
      this._controller.next();
      return this;
    };

    ImgA.prototype.isValidController = function(controller) {
      if (!((controller != null ? typeof controller.play === "function" ? controller.play() : void 0 : void 0) instanceof ImgAController)) {
        throw "You must provide a valid controller: it must implement a method `play()` which return the controller instance: " + (typeof (controller != null ? typeof controller.play === "function" ? controller.play() : void 0 : void 0));
      }
      if (!((controller != null ? typeof controller.stop === "function" ? controller.stop() : void 0 : void 0) instanceof ImgAController)) {
        throw "You must provide a valid controller: it must implement a method `stop()` which return the controller instance: " + (typeof (controller != null ? typeof controller.stop === "function" ? controller.stop() : void 0 : void 0));
      }
      if (!((controller != null ? typeof controller.previous === "function" ? controller.previous() : void 0 : void 0) instanceof ImgAController)) {
        throw "You must provide a valid controller: it must implement a method `previous()` which return the controller instance: " + (typeof (controller != null ? typeof controller.previous === "function" ? controller.previous() : void 0 : void 0));
      }
      if (!((controller != null ? typeof controller.next === "function" ? controller.next() : void 0 : void 0) instanceof ImgAController)) {
        throw "You must provide a valid controller: it must implement a method `next()` which return the controller instance: " + (typeof (controller != null ? typeof controller.next === "function" ? controller.next() : void 0 : void 0));
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
