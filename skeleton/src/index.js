const View = require('./ttt-view.js'); // require appropriate file
const Game = require('./../ttt_node/game.js'); // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  console.log("DOM Loaded.");
  let el = document.querySelector(".ttt");
  let view = new View(new Game(), el);
});
