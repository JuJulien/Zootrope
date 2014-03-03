class ZootropeList extends ZootropeController
  constructor: ->
    super
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
    @bind()
    return @

  bind: () ->
    @$el.on "click", () =>
      @_parent.toggle()
    @$el.on "mousemove", (e) =>
      if @_parent.paused
        @goTo(parseInt(parseInt(e.offsetX)*@_duration/parseInt(@$el.width())))

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
