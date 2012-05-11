jQuery Save State
=================

Save State is a jQuery plugin for saving the state of a DOM element and recalling it later

Ever wished to change an element's properties, style and behavior and instantly restore to what it was before the mess ?
That's what Save State enables you to do. You make a copy before changes, change it, and then, eventually, recall the original.

This is based on [Arthur Corenzan's](https://github.com/haggen) [Double plugin](https://github.com/haggen/double)

### Usage:

```
var box = $( '#box' );

box.css( 'background', 'black' ); // We set its background to black
box.saveState().css( 'background', 'red' ); // Now it has a red background
box.recallState(); // Here we recall the original, restoring its background to black
```

Whatever changes you've done will be undone when you recall the original. All styles and bindings, everything back to what it was before the first time you called `saveState()`.
