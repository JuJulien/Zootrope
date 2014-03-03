(function() {
  var ZootropeList,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ZootropeList = (function(_super) {
    __extends(ZootropeList, _super);

    function ZootropeList() {
      ZootropeList.__super__.constructor.apply(this, arguments);
      this.delta = .1;
      this.controls = true;
      return this;
    }

    ZootropeList.prototype.goTo = function(frame) {
      if (0 > frame || frame > this._duration - 1) {
        if (!this._parent.autoloop) {
          this.stop();
          return this;
        } else if (frame < 0) {
          frame = this._duration - 1;
        } else {
          frame = 0;
        }
      }
      this.frames[this.getCurrent()].hide();
      ZootropeList.__super__.goTo.call(this, frame);
      this.frames[frame].show();
      return this;
    };

    ZootropeList.prototype.initialize = function() {
      this.clean();
      this.build();
      if (this.controls) {
        this.bind();
        return this;
      }
    };

    ZootropeList.prototype.bind = function() {
      this.$el.on("click", (function(_this) {
        return function(e) {
          e.preventDefault();
          e.stopPropagation();
          return _this._parent.toggle();
        };
      })(this));
      this.$el.on("paused stopped", (function(_this) {
        return function(e) {
          return _this.$el.on("mousemove", function(e) {
            if (_this._parent.paused) {
              return _this.goTo(parseInt(parseInt(e.offsetX) * _this._duration / parseInt(_this.$el.width())));
            }
          });
        };
      })(this));
      this.$el.on("playing", (function(_this) {
        return function(e) {
          return _this.$el.off("mousemove");
        };
      })(this));
      this.$el.on("playing", (function(_this) {
        return function(e) {
          return _this.$el.on("mousewheel", function(e) {
            var delta;
            if (e.originalEvent.wheelDeltaY) {
              e.preventDefault();
              if (e.originalEvent.wheelDeltaY < 0) {
                delta = _this.delta;
              } else {
                delta = -1 * _this.delta;
              }
              return _this._parent.setFps(_this.fps + delta);
            }
          });
        };
      })(this));
      return this.$el.on("paused stopped", (function(_this) {
        return function(e) {
          return _this.$el.off("mousewheel");
        };
      })(this));
    };

    ZootropeList.prototype.build = function() {
      var frame, img, _i, _len, _ref;
      if (this.src instanceof Array) {
        _ref = this.src;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          frame = _ref[_i];
          img = $('<img/>').attr({
            'src': frame,
            'class': "zootrope-frame"
          });
          this.$el.addClass("zootrope-element").append(img);
          this.frames.push(img);
        }
      } else {
        throw new TypeError("options.src expected to be an array: " + typeof options.src + " given");
      }
      return this;
    };

    return ZootropeList;

  })(ZootropeController);

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ZootropeList = ZootropeList;
  } else {
    window.ZootropeList = ZootropeList;
  }

}).call(this);

//# sourceMappingURL=zootropelist.js.map
