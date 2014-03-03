class Zootrope
  # Animation properties
  _readyState: false # The current ready state of the Animation

  # Playback properties
  ended: false # The playback of the animation has not ended
  paused: true # The animation is paused
  reverse: false # switch video playback backward

  # Options
  el: "#zootrope" # The animation container (dom selector)
  autoplay: false # The animation should start playing as soon as it is loaded
  fps: 30 # The current frame rate
  autoloop: true # The animation should start over again when finished

  # Events
  # loadstart: Fires when the browser starts looking for the src files
  # progress: Fires when the browser is downloading the animation
  # play: Fires when the animation has been started or is no longer paused
  # frameupdate: Fires when the current playback position has changed
  # pause: Fires when the animation has been paused

  # The Controller must be a valid controller (extends ZootropeController)
  # options:
  #   el: A jQuery dom selector
  #   src: A path or an array of paths to the files
  #   autoplay: A boolean
  #   fps: A number
  #   autoloop: A boolean
  constructor: ( controller, options) ->
    if options && typeof options != "object"
      throw  new Error "The options argument must be a valid object"
    if !controller
      throw new Error "A valid controller must be provided"

    # Initialize controller
    @controller = controller
    @controller.setParent(@)
    if options
      # Initialize configuration
      @el = options.el if options.el


      if options.src
        if (typeof(options.src) == "string" || options.src instanceof Array)
          @controller.src = options.src
        else throw new TypeError("options.src expected to be a string or an array: "+typeof(options.src)+" given")
      @autoplay = options.autoplay if typeof options.autoplay == "boolean"
      @setFps(options.fps) if options.fps
      @setAutoloop(options.autoloop) if options.autoloop

      if options.duration
        if (typeof(options.duration) == "number")
          @controller._duration = options.duration
        else throw new TypeError("options.duration expected to be a number: "+typeof(options.duration)+" given")

    @controller.$el = $(@el)
    unless @controller.$el.length
      throw new TypeError("Couldn't find container: "+@el)
    @controller.initialize(@autoplay)

    return @

  # Load sources
  load: ->
    return @

  getCurrent: () ->
    @controller.getCurrent()

  getDuration: () ->
    @controller.getDuration()

  getFps: () ->
    @fps

  setFps: (fps) ->
    fps = parseInt(fps)
    unless typeof fps == "number" && !isNaN(fps)
      throw new TypeError "ZootropeController.setFps() argument expected to be a number: "+typeof(fps)+" given (" + fps+")"
    @fps = fps
    @controller.fps = fps
    unless @paused
      @pause()
      @play()
    return @

  getAutoloop: () ->
    @autoloop

  setAutoloop: (autoloop) ->
    unless typeof autoloop =="boolean"
      throw new TypeError("ZootropeController.setAutoloop() argument expected to be a boolean: "+typeof(autoloop)+" given")
    @autoloop = autoloop
    return @

  # toggle playback
  toggle: () =>
    if @paused
      @.play()
    else
      @.pause()
    return @

  # start playback
  play: ->
    if @paused
      @controller.play()
      @paused = false
      @controller.$el.trigger("playing")
    return @


  # stop playback
  stop: ->
    @controller.stop()
    @paused = true
    @controller.$el.trigger("stopped")
    return @

  # pause playback
  pause: ->
    if !@paused
      @controller.pause()
      @paused = true
      @controller.$el.trigger("paused")
    return @

  # Go to previous frame
  previous: ->
    @controller.previous()
    return @

  # Go to previous frame
  next: ->
    @controller.next()
    return @

  # Go to frame
  goTo: (frame)->
    @controller.goTo(frame)
    return @


  # Check if the controller has a valid interface
  doctor: () ->
    # Check if the controller has a valid interface
    unless @controller?.play?() instanceof ZootropeController
      throw new Error("You must provide a valid controller: it must implement a method `play()` which return the controller instance; " + (typeof @controller?.play?()) + " given")

    unless @controller?.stop?() instanceof ZootropeController
      throw new Error("You must provide a valid controller: it must implement a method `stop()` which return the controller instance; " + (typeof @controller?.stop?()) + " given")

    unless @controller?.pause?() instanceof ZootropeController
      throw new Error("You must provide a valid controller: it must implement a method `pause()` which return the controller instance; " + (typeof @controller?.pause?()) + " given")

    unless @controller?.previous?() instanceof ZootropeController
      throw new Error("You must provide a valid controller: it must implement a method `previous()` which return the controller instance; " + (typeof @controller?.previous?()) + " given")

    unless @controller?.next?() instanceof ZootropeController
      throw new Error("You must provide a valid controller: it must implement a method `next()` which return the controller instance; " + (typeof @controller?.next?()) + " given")

    unless @controller?.goTo?(0) instanceof ZootropeController
      throw new Error("You must provide a valid controller: it must implement a method `goTo()` which return the controller instance; " + (typeof @controller?.goTo?(0)) + " given")

    unless typeof @controller?.getCurrent?() == "number"
      throw new Error("You must provide a valid controller: it must implement a method `getCurrent()` which return the frame current index (number); " + (typeof @controller?.getCurrent?()) + " given")

    unless typeof @controller?.getDuration?() == "number"
      throw new Error("You must provide a valid controller: it must implement a method `getDuration()` which return the frame current index (number); " + (typeof @controller?.getDuration?()) + " given")
    return true

if module?.exports
  exports.Zootrope = Zootrope
else
  window.Zootrope = Zootrope
