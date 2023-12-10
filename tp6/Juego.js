class Juego {

  constructor (player, enemigo) {

    this.Personaje = new Player (player);


    this.Enemigo = [];
    this.cantEne = 10;
    this.cantVidas = 5
    this.contador = 1200

    
    for (let i = 0; i < this.cantEne; i++) {
      this.Enemigo.push(new Enemigo (enemigo));
      
      
    }
    
  }


  actualizar () {

      this.colision();
      for (let i = 0; i < this.cantEne; i++) {
        this.Enemigo[i].actualizar();
      }
      
      this.contador -=1;
      push();
      fill (255);
      textSize (25);
      text ( round(this.contador/60), 70, 65);
      pop();
      
      if(this.cantVidas <= 0){
        app.cambiarPantalla("Derrota")
      } 
      if(this.contador <= 0){
        app.cambiarPantalla("Victoria")
      }


  }

  interaccionPersonaje(keyCode) {
    
               
    if ( app.pantalla == 17) {
             

      this.Personaje.actualizar(keyCode)
    }
  }

  dibujar () {
      
      //dibujo Personaje
      this.Personaje.dibujar();

      //dibujo Enemigos
      for (let i = 0; i < this.cantEne; i++) {
        this.Enemigo[i].dibujar();
      }
      push()
       fill(255)
      text(this.cantVidas, 50,50)
      pop()
    }

  colision () {

    if (app.pantalla == 17) {

      for (let i = 0; i < this.Enemigo.length; i++) {
        
               
        
        if (this.Enemigo[i].y + this.Enemigo[i].alto >= this.Personaje.y &&
          this.Enemigo[i].x + this.Enemigo[i].ancho   >= this.Personaje.x &&
           this.Enemigo[i].x < this.Personaje.x + this.Personaje.ancho    
        ){
             
          this.cantVidas-=1;
          this.Enemigo[i].reinicio();

        }
      }
    }
  }

  reset () {
    
    this.contador = 1200;
    this.cantVidas = 5;
    
    //Enemigos
    for (let i = 0; i < this.cantEne; i++) {
    this.Enemigo[i].reinicio();
    }
  }
}
