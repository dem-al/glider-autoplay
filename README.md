# glider-autoplay

---

##### English [Русский](#утилита-автовоспроизведения-для-gliderjs)

## Autoplay utility for <a href="https://github.com/NickPiscitelli/Glider.js">Glider.js</a>

## See <a href="https://dem-al.github.io/glider-autoplay">example</a> in index.html

Copy file **_glider-autoplay.min.js_** and include to your html

```html
<script src="glider-autoplay.min.js"></script>
```

Or install with npm

```bash
npm i glider-autoplay
```

```js
import { gliderAutoplay } from "glider-autoplay";
```

---

## Usage

```js
gliderAutoplay(new Glider(/* see glider-js docs*/), {
    interval, // int, required
    pausable, // boolean, default true
    onPause,
    onRestart,
    startItem, // default 0
});
```

**_interval_** - interval between slides in milliseconds; <br/>
**_pausable_** - autoplay will be stopped onMouseEnter and rerun onMouseLeave when true <br/>
**_onPause_** - callback function to be called when autoplay stopped <br/>
**_onRestart_** - callback function to be called when autoplay run <br/>
**_startItem_** - glider item with which autoplay will start <br/>

---

## Methods

pause()

```js
const gliderInstance = new Glider(/* see glider-js docs*/);
gliderAutoplay(gliderInstance, { interval: 3000 });
gliderInstance.pause();
```

run()

```js
const gliderInstance = new Glider(/* see glider-js docs*/);
gliderAutoplay(gliderInstance, { interval: 3000 });
gliderInstance.run();
```

---

## Properties

isRunning - _boolean_ readonly

```js
const gliderInstance = new Glider(/* see glider-js docs*/);
gliderAutoplay(gliderInstance, { interval: 3000 });
console.log(gliderInstance.isRunning); // true

gliderInstance.pause();
console.log(gliderInstance.isRunning); // false

gliderInstance.run();
console.log(gliderInstance.isRunning); // true
```

---

## Утилита автовоспроизведения для <a href="https://github.com/NickPiscitelli/Glider.js">Glider.js</a>

## Смотрите <a href="https://dem-al.github.io/glider-autoplay">пример</a> в index.html

Скопируйте файл **_glider-autoplay.min.js_** и подключите его к html

```html
<script src="glider-autoplay.min.js"></script>
```

Или установите в npm

```bash
npm i glider-autoplay
```

```js
import { gliderAutoplay } from "glider-autoplay";
```

---

## Использование

```js
gliderAutoplay(
  new Glider(/* смотрите документацию glider-js* /),
  {
    interval, // целое число, обязательное свойство
    pausable, // логический тип, по умолчанию true
    onPause,
    onRestart,
    startItem // по умолчанию 0
  }
);
```

**_interval_** - интервал между слайдами в милисекундах; <br/>
**_pausable_** - приостанавливать воспроизведение при наведении курсора мыши и возобновлять, когда мышь покидает область <br/>
**_onPause_** - колбэк, сработает когда воспроизведение будет приостановлено <br/>
**_onRestart_** - колбэк, сработает когда воспроизведение будет возобновлено <br/>
**_startItem_** - индекс слайда с которого будет начато воспроизведение <br/>

---

## Методы

pause()

```js
const gliderInstance = new Glider(/* see glider-js docs*/);
gliderAutoplay(gliderInstance, { interval: 3000 });
gliderInstance.pause();
```

run()

```js
const gliderInstance = new Glider(/* see glider-js docs*/);
gliderAutoplay(gliderInstance, { interval: 3000 });
gliderInstance.run();
```

---

## Свойства

isRunning - _логический тип_ только для чтения

```js
const gliderInstance = new Glider(/* see glider-js docs*/);
gliderAutoplay(gliderInstance, { interval: 3000 });
console.log(gliderInstance.isRunning); // true

gliderInstance.pause();
console.log(gliderInstance.isRunning); // false

gliderInstance.run();
console.log(gliderInstance.isRunning); // true
```
