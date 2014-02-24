class ImgAController
  _current: 0

  constructor: (_parent) ->
    @_parent = _parent
    return @

  play: ->
    return @

  stop: ->
    return @

  goTo: (frame)->
    frame = 0 unless frame
    @_current++
    @_parent?._current = frame
    return @

if module?.exports
  exports.ImgAController = ImgAController
else
  window.ImgAController = ImgAController
