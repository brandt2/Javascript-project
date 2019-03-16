const Ball = require("./ball");
const Game = require("./game");
const Paddle = require("./paddle");
const Brick = require("./brick");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  
  canvasEl.width = Game.width;
  canvasEl.height = Game.height;
  canvasEl.style = Game.style;

  // new paddle
  let paddle = new Paddle({
    color: "red",
    canvasEl: canvasEl
  });
  
  // new brick
  let brick = new Brick();
  brick.resetBricks();
 
  // new ball
  let ball = new Ball({ 
    pos: [400, 300],
    radius: 10,
    color: "aqua",
    paddle: paddle,
    brick: brick
  });

    
  let newGame = new Game(ctx, ball, paddle, brick);
  newGame.gameLoop();

  console.log("Webpack is working!")
})