class Zootrope
  # Animation properties
  _current: 0 # The current playback position in the animation (in frame)
  _duration: 0 # The duration of the entire animation (in frame)
  _ended: false # The playback of the animation has not ended
  _paused: true # The animation is paused
  _readyState: false # The current ready state of the Animation
  _reverse: false # switch video playback backward

  # Options
  _el: "#zootrope" # The animation container (dom selector)
  _src: '/img/zootrope.jpg' # The source files path
  _autoplay: true # The animation should start playing as soon as it is loaded
  _fps: 30 # The current frame rate
  _autoloop: true # The animation should start over again when finished

  # Events
  # loadstart: Fires when the browser starts looking for the src files
  # pause: Fires when the animation has been paused
  # play: Fires when the animation has been started or is no longer paused
  # progress: Fires when the browser is downloading the animation
  # frameupdate: Fires when the current playback position has changed

  constructor: ( controller, options) ->
    if options && typeof options != "object"
      throw  new Error "the Options argument must be a valid object"
    if !controller
      throw new Error "A valid controller must be provided"

    # Initialize controller
    @controller = controller
    # Check if the controller has a valid interface
    @isValidController(@controller)
    @controller._parent = @

    if options
      # Initialize configuration
      _el = options.el if options.el
      if options.src
        if (typeof(options.src) == "string" || options.src instanceof Array)
          _src = options.src
        else throw new TypeError("options.src expected to be a string or an array: "+typeof(options.src)+" given")
      _autoplay = options.autoplay if typeof options.autoplay == "boolean"
      @setFps(options.fps) if options.fps
      @setAutoloop(options.autoloop) if options.autoloop

    return @

  # Load sources
  load: ->
    return @

  getCurrent: () ->
    @_current

  setCurrent: (current) ->
    current = parseInt(current)
    unless typeof current == "number" && !isNaN(current)
      throw new TypeError "ZootropeController.setFps() argument expected to be a number: "+typeof(current)+" given (" + current+")"
    @_current = current
    return @

  getFps: () ->
    @_fps

  setFps: (fps) ->
    fps = parseInt(fps)
    unless typeof fps == "number" && !isNaN(fps)
      throw new TypeError "ZootropeController.setFps() argument expected to be a number: "+typeof(fps)+" given (" + fps+")"
    @_fps = fps
    return @

  getAutoloop: () ->
    @_autoloop

  setAutoloop: (autoloop) ->
    unless typeof autoloop =="boolean"
      throw new TypeError("ZootropeController.setAutoloop() argument expected to be a boolean: "+typeof(autoloop)+" given")
    @_autoloop = autoloop
    return @

  # start playback
  play: ->
    @controller.play()
    return @

  # stop playback
  stop: ->
    @controller.stop()
    return @

  # Go to previous frame
  previous: ->
    @controller.goTo(@_current-1)
    return @

  # Go to next frame
  next: ->
    @controller.goTo(@_current+1)
    return @

  # Go to frame
  goTo: (frame)->
    @controller.goTo(frame)
    return @

  isValidController: (controller) ->
    unless controller?.play?() instanceof ZootropeController
      throw new TypeError("You must provide a valid controller: it must implement a method `play()` which return the controller instance; " + (typeof controller?.play?()) + " given")

    unless controller?.stop?() instanceof ZootropeController
      throw new TypeError("You must provide a valid controller: it must implement a method `stop()` which return the controller instance; " + (typeof controller?.stop?()) + " given")

    unless controller?.goTo?(0) instanceof ZootropeController
      throw new TypeError("You must provide a valid controller: it must implement a method `goTo()` which return the controller instance; " + (typeof controller?.goTo?(0)) + " given")

if module?.exports
  exports.Zootrope = Zootrope
else
  window.Zootrope = Zootrope
