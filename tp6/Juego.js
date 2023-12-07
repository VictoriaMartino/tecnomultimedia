class Juego {

  constructor (player, enemigo) {

    this.Personaje = new Player (player);


    this.Enemigo = [];
    this.cantEne = 10;
    this.cantVidas = 5
    for (let i = 0; i < this.cantEne; i++) {
      this.Enemigo.push(new Enemigo (enemigo));
      
      
      this.contador = 1200;
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
        app.pantalla = "Derrota"
        this.reset()
      }
      
      else if(this.cantador <= 0){
        app.pantalla = "Victoria"
        this.reset()
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
                console.log("pantalla: " , app.pantalla)

    if (app.pantalla == 17) {

      for (let i = 0; i < this.Enemigo.length; i++) {
        
                console.log("Enemigo" , this.Enemigo[i].y)
                console.log("Personaje", this.Personaje.y)

        
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
