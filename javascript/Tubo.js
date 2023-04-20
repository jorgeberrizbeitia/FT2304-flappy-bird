class Tubo {

  constructor( positionY, isImageUp ) {
    // propiedades de cada tubo

    this.img = new Image()
    if (isImageUp === true) {
      this.img.src = "images/obstacle_top.png" 
    } else {
      this.img.src = "images/obstacle_bottom.png" 
    }
    //? es la de arriba o la de abajo?

    this.x = canvas.width
    this.y = positionY // esto define el valor inicial de la posición Y
    // ? esto deberia ser aleatorio
    this.w = 60
    this.h = 230
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