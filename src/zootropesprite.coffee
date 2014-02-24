class ZootropeSprite extends ZootropeController
  constructor: ->
    super
    return @

if module?.exports
  exports.ZootropeSprite = ZootropeSprite
else
  window.ZootropeSprite = ZootropeSprite
