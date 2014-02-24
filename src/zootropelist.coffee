class ZootropeList extends ZootropeController
  constructor: ->
    super
    return @

if module?.exports
  exports.ZootropeList = ZootropeList
else
  window.ZootropeList = ZootropeList
