class Juego {

  constructor (img, player, enemigo) {

    //carga de Personaje
    this.Personaje = new Player (player);


    //carga de Enemigos
    this.Enemigo = [];
    this.cantEne = 10;
    for (let i = 0; i < this.cantEne; i++) {
      this.Enemigo.push(new Enemigo (enemigo));
    }


    //carga de vidas 
    this.vida = [] ;
    this.cantVidas = 3;
    for (let i = 0; i < 3; i++) {
      this.vida[i] = img;
    }

    this.estado = 'home';

    //contador y reloj
    this.contador = 1200;
    
  }


  actualizar () {

    if ( this.estado == 'home') {
      this.boton ('JUGAR', 'juego', 0.85);
    } else if (this.estado == 'juego') {

      this.colision();

      //actualizacion de Enemigoses
      for (let i = 0; i < this.cantEne; i++) {
        this.Enemigo[i].actualizar();
      }


      //actualizacion contador y tiempo
      this.contador -=1;
      push();
      fill (255);
      textSize (25);
      text ( round(this.contador/60), 70, 65);
      pop();
      
     


      //finales
      if (this.cantVidas <= 0) {
        this.estado = 'derrota';

        //reseteo de variables
        this.reset();
      } else if (this.cantVidas > 0 & this.contador < 0) {

        if (this.cantVidas == 3) {
          this.estado = 'victoria';

          //reseteo de variables
          this.reset();
        } else if (this.cantVidas > 0 & this.cantVidas < 3 ) {
          this.estado = 'empate';

          //reseteo de variables
          this.reset();
        }
      }
    } else if (this.estado == 'derrota') {
      //boton
      this.boton ('VOLVER', 'home', 0.6);
    } else if (this.estado == 'empate') {
      //boton
      this.boton ('VOLVER', 'home', 0.65);
    } else if (this.estado == 'victoria') {
      //boton
      this.boton ('VOLVER', 'home', 0.6);
    }
  }

  interaccionPersonaje() {
    if ( this.estado == 'juego') {
      this.Personaje.actualizar(keyCode);
    }
  }

  dibujar () {


    if (this.estado == 'home') {

      background (200,100,0);

      push();
      fill(0);
      textSize(14);
      text('Llega al final sin que los circulos te toquen', width/2, height*0.4);
      text('Movete con ← y →\n¡ATENCION! Tene solo 3 vidas', width/2, height*0.5);
      pop();
    } else if (this.estado == 'juego') {
      background (0, 0, 10, 150);
      

      //dibujo Personaje
      this.Personaje.dibujar();

      //dibujo Enemigos
      for (let i = 0; i < this.cantEne; i++) {
        this.Enemigo[i].dibujar();
      }

      //dibujo vidas
      push();
      imageMode (CENTER);
      for (let i = 0; i < this.cantVidas; i++) {
        image (this.vida[i], (width*0.7)+(i*50), 50, 50, 50);
      }
      pop();

      
    } else if (this.estado == 'derrota') {

      background (0, 0, 10, 150);

      push();
      fill(255);
      textSize(14);
      text('No lograste llegar al final', width/2, height*0.4);
      pop();
    } else if (this.estado == 'empate') {


      background (0, 0, 10, 150);

      push();
      fill(255);
      textSize(14);
      text('Llegaste pero no con todas las vidas', width/2, height*0.35);
      pop();
    } else if (this.estado == 'victoria') {

      background (0, 0, 10, 150);

      push();
      fill(255);
      textSize(14);
      text('Lograste llegar con todas las vidas', width/2, height*0.4);
      pop();
    }
  }

  colision () {

    if (this.estado == 'juego') {

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

  boton (texto, direccion, pos) {

    push();
    textSize(20);

    if ( mouseX > width/2-(textWidth(texto)/2) & mouseX < width/2+(textWidth(texto)/2)
      & mouseY > (height*pos)-30 & mouseY < height*pos ) {
      fill(255, 200, 0);

      if (mouseIsPressed) {
        this.estado = direccion;
      }
    } else {
      fill (0,255,0);
    }

    let boton = text ( texto, width/2, height*pos);
    pop();
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
