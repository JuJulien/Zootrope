(function() {
  var ImgASprite,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ImgASprite = (function(_super) {
    __extends(ImgASprite, _super);

    function ImgASprite() {
      return this;
    }

    return ImgASprite;

  })(ImgAController);

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ImgASprite = ImgASprite;
  } else {
    window.ImgASprite = ImgASprite;
  }

}).call(this);

//# sourceMappingURL=imgasprite.js.map
