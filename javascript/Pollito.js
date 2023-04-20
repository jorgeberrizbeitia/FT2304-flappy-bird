class Pollito {

  constructor() {
    // propiedades del pollito
    // constructor es todos los valores iniciales del pollito
    this.img = new Image()
    this.img.src = "images/flappy.png"
    this.x = 50; // la posición en el eje X
    this.y = canvas.height / 2; // la posición en el eje Y
    this.w = 40; // ancho del pollito
    this.h = 35; // alto del pollito
    this.gravitySpeed = 2; // velocidad de la caida
    this.jumpSpeed = 40;
  }

  // metodos (acciones) del pollito   

  draw = () => {
    // dibujar el pollito
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  gravity = () => {
    // que el pollito caiga
    this.y += this.gravitySpeed
    // todo por ejemplo, cambiar la imagen hacia abajo
    // todo no pueda caer más del piso
  }

  // que el pollito lo tengamos que hacer saltar
  jump = () => {
    this.y -= this.jumpSpeed
    // todo opr ejemplo cambiar la imagen hacia arriba por los proximos 1 segundo.
    // todo no pueda saltar más de el techo
    // todo que solo pueda saltar cada segundo.
    // todo que el salto sea fluido, (que no salte de golpe los 40px)
  }

}