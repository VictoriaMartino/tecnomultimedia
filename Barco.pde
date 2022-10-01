//Clase 2

class Barco{
  
  float x, y, t;
  
  PImage barco;
  
  Barco( float x_ , float y_, float t_ ){
    x = x_;
    y = y_;
    t = t_;
    
    barco = loadImage ("barco.png");
  }
  
  void actualizar(){
  
  }
  
  void dibujar(){
    pushStyle();
    image( barco,mouseX, y, t, t );
    popStyle();
  }
  
  
  
}
