(function() {
  var ZootropeSprite,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ZootropeSprite = (function(_super) {
    __extends(ZootropeSprite, _super);

    function ZootropeSprite() {
      ZootropeSprite.__super__.constructor.apply(this, arguments);
      return this;
    }

    return ZootropeSprite;

  })(ZootropeController);

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ZootropeSprite = ZootropeSprite;
  } else {
    window.ZootropeSprite = ZootropeSprite;
  }

}).call(this);

//# sourceMappingURL=zootropesprite.js.map
