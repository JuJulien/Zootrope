class ZootropeController
  _current: 0 # The current playback position in the animation (in frame)
  _duration: 0 # The current playback position in the animation (in frame)
  $el: $({}) # The animation container (jQuery object)
  src: '/img/zootrop.jpg' # The source files path
  frames: new Array() # The array of jQuery object (images)
  autoplay: true # The animation should start playing as soon as it is loaded
  fps: 30 # The current frame rate
  autoloop: true # The animation should start over again when finished
  interval: undefined
  constructor: () ->
    return @

  initialize: () ->
    return @

  play: ->
    @interval = setInterval () =>
      @next()
    , 1000/@fps

    return @

  stop: ->
    clearInterval @interval
    @goTo(0)
    return @

  pause: ->
    clearInterval @interval
    return @

  previous: ->
    @goTo @_current-1

  next: ->
    @goTo @_current+1

  setCurrent: (current) ->
    @goTo(current)

  goTo: (frame)->
    frame = parseInt(frame)
    unless typeof frame == "number" && !isNaN(frame)
      throw new TypeError "ZootropeController.goTo() argument expected to be a number: "+typeof(frame)+" given (" + frame+")"
    frame = 0 unless frame
    @_current = frame
    @$el.trigger("frameupdate",[frame])
    return @

  getCurrent: () ->
    return @_current

  getDuration: () ->
    return @_duration

  setParent: (_parent) ->
    if _parent instanceof Zootrope
      @_parent = _parent
    else throw new TypeError "ZootropeController constructor expected A Zootrop as parent: "+typeof(_parent)+" given"

  clean: () ->
    @$el.empty()

if module?.exports
  exports.ZootropeController = ZootropeController
else
  window.ZootropeController = ZootropeController
