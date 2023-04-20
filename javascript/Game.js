class Game {
 
  constructor() {
    // propiedades de Game => todos los elementos que existe en el juego

    // el fondo
    this.background = new Image()
    this.background.src = "images/bg.png"

    // pollito
    this.pollito = new Pollito()
    console.log(this.pollito)

    // tubos
    //* probar haciendo un solo tubo.
    this.tubo = new Tubo()

    // contador
    // boton de pausa

  }

  // metodos de Game => todas las acciones que se realizan en el juego
  

  // aparecen los tubos en diferentes distancias (Math.random)
  // colissiones del pollito contra los tubos
  
  // el contador aumente
  // se termina el juego
  // podemos pausar el juego

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
  }

  gameLoop = () => {
    console.log("Ejecutando recursion del juego")

    // 1. Limpieza del canvas
    // todo

    // 2. Acciones y movimientos de los elementos
    this.pollito.gravity()
    this.tubo.move()

    // 3. Dibujado de los elementos
    this.drawBackground()
    this.pollito.draw()
    this.tubo.draw()

    // 4. Recursion (requestAnimationFrame)
    requestAnimationFrame(this.gameLoop) // 60ps hace gameLoop()

  }

}