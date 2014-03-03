class ZootropeList extends ZootropeController
  constructor: ->
    super
    @delta = .1
    @controls = true
    return @

  goTo: (frame) ->
    if 0 > frame || frame > @_duration-1
      if !@_parent.autoloop
        @.stop()
        return @
      else if frame < 0
        frame = @_duration-1
      else
        frame = 0
    @frames[@getCurrent()].hide()
    super frame
    @frames[frame].show()
    return @

  initialize: () ->
    @clean()
    @build()
    if @controls
      @bind()
      return @

  bind: () ->
    @$el.on "click", (e) =>
      e.preventDefault()
      e.stopPropagation()
      @_parent.toggle()

    @$el.on "paused stopped", (e) =>
      @$el.on "mousemove", (e) =>
        if @_parent.paused
          @goTo(parseInt(parseInt(e.offsetX)*@_duration/parseInt(@$el.width())))
    @$el.on "playing", (e) =>
      @$el.off "mousemove"

    @$el.on "playing", (e) =>
      @$el.on "mousewheel", (e) =>
        if e.originalEvent.wheelDeltaY
          e.preventDefault()
          if e.originalEvent.wheelDeltaY < 0
            delta = @delta
          else
            delta = -1*@delta
          @_parent.setFps(@fps+delta)
    @$el.on "paused stopped", (e) =>
      @$el.off "mousewheel"

  build: () ->
    if (@src instanceof Array)
      for frame in @src
        img = $('<img/>').attr
          'src': frame
          'class': "zootrope-frame"
        @$el
          .addClass("zootrope-element")
          .append(img)

        @frames.push(img)
    else throw new TypeError("options.src expected to be an array: "+typeof(options.src)+" given")
    return @

if module?.exports
  exports.ZootropeList = ZootropeList
else
  window.ZootropeList = ZootropeList
