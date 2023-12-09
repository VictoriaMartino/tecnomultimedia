class Enemigo {

  constructor () {
    this.ancho = 100;
    this.alto = 30;
    this.x = random (-50, 600);
    this.y = random ( -0, -500);
    this.vel = 3;
  }

  actualizar () {
    this.y += this.vel;

 //reinicio de enemigos
    if (this.y >= windowHeight) {
      this.reinicio ();
    }
  }

  dibujar () {
    push ();
    rect ( this.x, this.y, this.ancho, this.alto );
    pop();
  }

  reinicio () {
    this.y = random (0, -500);
    this.x = random ( -50, 600);
  }
  
  getY() {
    return this.y;
  }

  getX() {
    return this.x;
  }
}
