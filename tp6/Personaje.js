class Player { 
 
  constructor () {
    this.ancho = 70;
    this.alto = 150;
    this.x = width / 3;
    this.y = height - this.alto;
    
  }
  
  actualizar (tecla) {
     console.log(tecla)
     if( tecla == LEFT_ARROW & this.x > (this.ancho)/4){
      this.x -= 4;
    }else if( tecla == RIGHT_ARROW & this.x < width-(this.ancho)/4){
      this.x += 4;
      
    }
  }
  
  dibujar () {
    push(); 
    fill(255,0,0);
    rect ( this.x, this.y, this.ancho, this.alto );
    pop();
  }
  
  
  getY() {
    return this.y;
  }
  
  getX() {
    return this.x;
  }
  
  getAncho() {
    return this.ancho;
  }
  
  getAlto() {
    return this.alto;
  }
  
}
