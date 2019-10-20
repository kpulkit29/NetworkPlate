# NetworkPlate
A Development Phase tool to bring network information to your screen

![dependencies](https://david-dm.org/kpulkit29/NetworkPlate.svg)
[![Node version](https://img.shields.io/node/v/network-plate.svg?style=flat)](http://nodejs.org/download/)

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/20151526/67163415-2730ee80-f38c-11e9-99cd-fe6eb1e00599.gif)

# What is NetworkPlate?
**NetworkPlate** brings network tab information (XHR & Js) to your screen providing you with a convenient interface to have look at the different network entries and there corresponding durations. With NetworkPlate you can watch out for different network requests being made on your website and analyze the duration. Thus providing you with the information to optimize the current performance while your developing.

**NetworkPlate** polls for the network entries and depicts the gathered information on the screen. The polling will stop as and when the NetworkPlate is closed. Instead of appending entries on the fly entries are added in a batch.

**Find it** [Here](https://www.npmjs.com/package/network-plate)

# How to use ?

Do ``` npm i network-plate ``` in your project

**Note:** Place the below mentioned code in body tag (preferably just before the </body> tag)

For minified code add this
```javascript
<script src='[YOUR_PATH_TO_NODE_MODULES]/network-plate/scripts/main.min.js'></script>
```

For unminified code add this
```javascript
<script src='[YOUR_PATH_TO_NODE_MODULES]/network-plate/scripts/main.js'></script>
```

# Todos
  - Make NetworkPlate draggable
  - Sorting w.r.t duration

