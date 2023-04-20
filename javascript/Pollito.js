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
    this.jumpSpeed = 60;

    //* Bonus
    this.canJump = true;
    this.isJumping = false;
  }

  // metodos (acciones) del pollito   

  draw = () => {
    // dibujar el pollito
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }

  gravity = () => {
    // que el pollito caiga
    if (this.y + this.h < canvas.height) {
      // todo no pueda caer más del piso
      this.y += this.gravitySpeed
    }
    // todo por ejemplo, cambiar la imagen hacia abajo
  }

  // que el pollito lo tengamos que hacer saltar
  jump = () => {
    if (this.y > 0 && this.canJump === true) {
      // todo no pueda saltar más de el techo
      this.y -= this.jumpSpeed
      // cuando salte, voy a desactivar el booleano canJump
      // todo que solo pueda saltar cada segundo.
      this.canJump = false;
      // pasa cierto tiempo real, luego es que yo vuelvo a cambiar canJump
      setTimeout(() => {
        this.canJump = true;
      }, 200)
    }
    // todo opr ejemplo cambiar la imagen hacia arriba por los proximos 1 segundo.
  }
  
  // todo que el salto sea fluido, (que no salte de golpe los 40px)
  jumpFlow = () => {
    if (this.isJumping === true) {
      this.y -= 10
    }
  }

  jump2 = () => {
    this.isJumping = true;
    this.img.src = "images/flappy-up.png"
    this.w = 45;
    this.h = 35;
    setTimeout(() => {
      this.isJumping = false;
      this.img.src = "images/flappy-down.png"
    }, 100)
  }

}