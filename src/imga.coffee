class ImgA
  _controller: new ImgASprite()
  constructor: (controller) ->
    if controller?
      @_controller = controller

    try
      @isValidController(@_controller)
    catch e
      console.error e
      return
    @

  play: ->
    @_controller.play()
    @

  stop: ->
    @_controller.stop()
    @

  previous: ->
    @_controller.previous()
    @

  next: ->
    @_controller.next()
    @

  isValidController: (controller) ->
    unless controller?.play?() instanceof ImgAController
      throw "You must provide a valid controller: it must implement a method `play()` which return the controller instance: " + (typeof controller?.play?())

    unless controller?.stop?() instanceof ImgAController
      throw "You must provide a valid controller: it must implement a method `stop()` which return the controller instance: " + (typeof controller?.stop?())

    unless controller?.previous?() instanceof ImgAController
      throw "You must provide a valid controller: it must implement a method `previous()` which return the controller instance: " + (typeof controller?.previous?())

    unless controller?.next?() instanceof ImgAController
      throw "You must provide a valid controller: it must implement a method `next()` which return the controller instance: " + (typeof controller?.next?())

if module?.exports
  exports.ImgA = ImgA
else
  window.ImgA = ImgA
