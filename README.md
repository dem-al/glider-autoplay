# glider-autoplay
### Autoplay utility for <a href="https://github.com/NickPiscitelli/Glider.js">Glider.js</a>
See <a href="https://alexanderdemidenko.github.io/glider-autoplay">example</a> in index.html 
---
Copy file ***glider-autoplay.min.js*** and include to your html
```html
<script src="glider-autoplay.min.js"></script>
```
Or install with npm
```js
npm i glider-autoplay
```
```js
import { gliderAutoplay } from "glider-autoplay";
```
---
### Usage
```js
gliderAutoplay(
  new Glider(/* see glider-js docs*/),
  {
    interval, // int, required
    pausable, // boolean, default true
    onPause,
    onRestart,
    startItem // default 0
  }
);
```
***interval*** - interval between slides in milliseconds; <br/>
***pausable*** - autoplay will be stopped onMouseEnter and rerun onMouseLeave when true <br/>
***onPause*** - callback function to be called when autoplay stopped <br/>
***onRestart*** - callback function to be called when autoplay rerun <br/>
***startItem*** - glider item with which autoplay will start <br/>
