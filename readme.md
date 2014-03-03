# Zootrope
When gif aren't enought!

## Warning !
  This script is in its early days, while the list controller is working, the code isn't well tested and documented.
  Use with care.

## Usage
```html

<div id="zootropeList">
    List Alternate content
</div>

<script src="jquery.js"></script>
<script src="../zootropecontroller.js"></script>
<script src="../zootropesprite.js"></script>
<script src="../zootropelist.js"></script>
<script src="../zootrope.js"></script>
```

```JavaScript
var listSrc = ["img/braid/braid_greeter_1.png", "img/braid/braid_greeter_2.png", "img/braid/braid_greeter_3.png", "img/braid/braid_greeter_4.png", "img/braid/braid_greeter_5.png", "img/braid/braid_greeter_6.png", "img/braid/braid_greeter_7.png", "img/braid/braid_greeter_8.png", "img/braid/braid_greeter_9.png", "img/braid/braid_greeter_10.png", "img/braid/braid_greeter_11.png", "img/braid/braid_greeter_12.png"]
var list = new Zootrope(new ZootropeList(), {"el": "#zootropeList", "src": listSrc, "duration": 12, "fps": 6, "autoplay": true});
```