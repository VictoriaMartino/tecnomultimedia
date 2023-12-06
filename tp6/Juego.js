class Juego {

  constructor (img, player, enemigo) {

    this.Personaje = new Player (player);


    this.Enemigo = [];
    this.cantEne = 10;
    for (let i = 0; i < this.cantEne; i++) {
      this.Enemigo.push(new Enemigo (enemigo));
    }
    
  }


  actualizar () {

      this.colision();
      for (let i = 0; i < this.cantEne; i++) {
        this.Enemigo[i].actualizar();
      }



  }

  interaccionPersonaje() {
    if ( this.pantalla == 10) {
      this.Personaje.actualizar(keyCode);
    }
  }

  dibujar () {

      //dibujo Personaje
      this.Personaje.dibujar();

      //dibujo Enemigos
      for (let i = 0; i < this.cantEne; i++) {
        this.Enemigo[i].dibujar();
      }
    }

  colision () {

    if (this.pantalla == 10) {

      for (let i = 0; i < this.cantEne; i++) {

        if ( this.Enemigo[i].getY() > (this.Personaje.getY()-80) & this.Enemigo[i].getY() < this.Personaje.getY()
          & this.Enemigo[i].getX() > (this.Personaje.getX()-70) & this.Enemigo[i].getX() < (this.Personaje.getX()+70)) {
          push();
          this.Enemigo[i].reinicio();
          this.cantVidas-=1;
          pop();
        }
      }
    }
  }

  reset () {
    this.contador = 1200;
    this.cantVidas = 3;
    
    //Enemigos
    for (let i = 0; i < this.cantEne; i++) {
    this.Enemigo[i].reinicio();
    }
  }
}
