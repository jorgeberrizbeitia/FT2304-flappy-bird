class Tubo {

  constructor() {
    // propiedades de cada tubo

    this.img = new Image()
    this.img.src = "images/obstacle_top.png" 
    //? es la de arriba o la de abajo?

    this.x = canvas.width
    this.y = 0
    // ? esto deberia ser aleatorio
    this.w = 60
    this.h = 200
    this.speed = 2
  }

  // metodos (acciones) de los tubos

  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  // los tubos se mueven hacia el pollito
  move = () => {
    this.x -= this.speed
  }


}