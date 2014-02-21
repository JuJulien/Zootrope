(function() {
  var ImgAList,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  ImgAList = (function(_super) {
    __extends(ImgAList, _super);

    function ImgAList() {
      return this;
    }

    ImgAList.prototype.method = function() {
      return 4;
    };

    return ImgAList;

  })(ImgAController);

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    exports.ImgAList = ImgAList;
  } else {
    window.ImgAList = ImgAList;
  }

}).call(this);

//# sourceMappingURL=imgalist.js.map
