//Clase 1

class Nube{
  
  float x, y, t;
  
  PImage nube;
  
  Nube(){
    x = random(50, width-50);
    y = random( 10, 50);
    t = random(100,200);
    
    nube = loadImage("nube.png");
  }
  
  void actualizar(){
   
  }
  
  void dibujar(){
    pushStyle();
    image( nube ,x, y,t,t);
    popStyle();
  }
}
