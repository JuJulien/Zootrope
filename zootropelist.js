(function() {
  var ZootropeList,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ZootropeList = (function(_super) {
    __extends(ZootropeList, _super);

    function ZootropeList() {
      ZootropeList.__super__.constructor.apply(this, arguments);
      return this;
    }

    return ZootropeList;

  })(ZootropeController);

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ZootropeList = ZootropeList;
  } else {
    window.ZootropeList = ZootropeList;
  }

}).call(this);

//# sourceMappingURL=zootropelist.js.map
