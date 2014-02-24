class ImgASprite extends ImgAController
  constructor: ->
    super
    return @

if module?.exports
  exports.ImgASprite = ImgASprite
else
  window.ImgASprite = ImgASprite
