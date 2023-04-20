class Game {
 
  constructor() {
    // propiedades de Game => todos los elementos que existe en el juego
    // el constructor es TODOS los elementos y valores iniciales del juego.

    // el fondo
    this.background = new Image()
    this.background.src = "images/bg.png"

    // pollito
    this.pollito = new Pollito()
    console.log(this.pollito)

    // tubos
    //* probar haciendo un solo tubo.
    // this.tubo = new Tubo()
    // como controlamos muchos elementos de tubos
    // como contralamos cuando se agregan más tubos al juego
    this.tubosArr = [];
    this.tuboSeparation = 350;

    // contador
    // boton de pausa

  }

  // metodos de Game => todas las acciones que se realizan en el juego
  
  // aparecen los tubos en diferentes distancias (Math.random)
  tubosAparecen = () => {
    // metodo que determina cuando deberia aparecer un tubo
    if (
      this.tubosArr.length === 0 || 
      this.tubosArr[this.tubosArr.length - 1].x < 400 ) 
    {
      // cuando empieza el juego (el array está vacio)
      // o cuando el ultimo tubo haya pasado la mitad de l canvas

      let randomPositionY = Math.random() * -150 // 0 y -200

      let nuevoTuboArriba = new Tubo(randomPositionY, true)
      this.tubosArr.push(nuevoTuboArriba) // añade un tubo

      // que con cada tubo, venga otro más abajo
      let nuevoTuboAbajo = new Tubo(randomPositionY + this.tuboSeparation, false)
      this.tubosArr.push(nuevoTuboAbajo)
      console.log(this.tubosArr.length)
    }
  }



  // colissiones del pollito contra los tubos
  
  // el contador aumente
  // se termina el juego
  // podemos pausar el juego

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
  }

  gameLoop = () => {
    // console.log("Ejecutando recursion del juego")

    // 1. Limpieza del canvas
    // todo

    // 2. Acciones y movimientos de los elementos
    this.pollito.gravity()
    // this.tubo.move() // test
    // mover TODOS los tubos que haya en el array
    this.tubosArr.forEach((eachTubo) => {
      eachTubo.move()
    })
    this.tubosAparecen()
    
    // 3. Dibujado de los elementos
    this.drawBackground()
    this.pollito.draw()
    // this.tubo.draw() // test
    // dibujar TODOS los tubos que haya en el array
    this.tubosArr.forEach((eachTubo) => {
      eachTubo.draw()
    })

    // 4. Recursion (requestAnimationFrame)
    requestAnimationFrame(this.gameLoop) // 60ps hace gameLoop()

  }

}