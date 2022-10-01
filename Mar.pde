//principal

class Mar {
  
  float tamanioX;
  PImage fondo;
  
  
  Barco barco;
  Nube nube1, nube2, nube3;
  


  Mar () {
    
    
    barco = new Barco( 50, 150, 250 );
    nube1 = new Nube();
    nube2 = new Nube();
    
    fondo = loadImage ("fondo.jpg");
    
  }
  
  
  
   void actualizar(){
  
  }
  
  void dibujar(){

   
   background( 100 );
   
   image(fondo, 0,0 ,400,600);
   
    barco.dibujar();
    nube1.dibujar();
    nube2.dibujar();

  }
}
