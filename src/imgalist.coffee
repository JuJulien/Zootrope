class ImgAList extends ImgAController
  constructor: ->
    super
    return @

if module?.exports
  exports.ImgAList = ImgAList
else
  window.ImgAList = ImgAList
