// * GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn")
const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");

let gameObj;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  console.log("intentando iniciar el juego");

  // 1. Cambiar las pantallas de juego
  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";

  // 2. Crear los elementos del juego
  // vamos a crear una clase
  gameObj = new Game();
  console.log(gameObj);

  // 3. Iniciar el bucle del juego (recursion)
  gameObj.gameLoop()
};

const restartGame = () => {

  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop()
  

}

// * ADD EVENT LISTENERS
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame)
window.addEventListener("keydown", (event) => {
  // Pollito.jump() // no funciona accediendo a la clase
  if (gameObj !== undefined && event.code === "Space") {
    // gameObj.pollito.jump()
    gameObj.pollito.jump2()
  }
})

//* bonus
const pauseBtn = document.querySelector("#pause")
pauseBtn.addEventListener("click", () => {
  if (gameObj !== undefined && gameObj.isGameOn === true) {
    gameObj.isGameOn = false;
  } else {
    gameObj.isGameOn = true;
    gameObj.gameLoop()
  }
})


