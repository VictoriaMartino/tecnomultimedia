/*
 Alumno: Victoria Martino.
 Legajo: 85114/3.
 Comision: 5.
 
 Profesor: Tobias Albirosa
 
 Herramienta: destornillador
 
 */

String pantalla;

int tiempo = 0;
int movy;

int posX = 220;
int posY = 350;
int tamX = 200;
int tamY = 50;

PImage fondo, dest, p , tp, c, tc;

boolean boton = false;

color colorB = 255;

void setup() {
  size(640, 480);

  pantalla = "1";
  
  movy = 0;

  fondo = loadImage ("madera.jpg");
  dest = loadImage ("destor.png");
  p = loadImage ("plano.png");
  tp = loadImage ("tplano.png");
  c = loadImage ("cruz.png");
  tc = loadImage ("tcruz.png");
  
}


void draw() {

  textSize(30);


  println(tiempo);
  println(pantalla);

  //pantalla 1

  if (pantalla == "1") {
    tiempo ++;
    movy++;

    background(fondo);
    
    image(dest,10,10);
    
    textSize(80);
    text( "Destornilladores", 50, -10+movy);

    if (tiempo >= 250) {
      tiempo = 0;
      pantalla = "2";
    }

    //pantalla 2
  } else if (pantalla == "2") {
    tiempo ++;
    background(fondo);
    
    image(p,10,10);
    image(tp,330,220);
    
    text ("destornillador plano \n se utiliza en \n tornillos planos", 20,40);
    
    if (tiempo >= 250) {
      tiempo = 0;
      pantalla = "3";
    }

    //pantalla 3
  } else if (pantalla == "3") {
    tiempo ++;
    background(fondo);
    
    image(c,10,10);
    image(tc,300,220);
    
    text ("destornillador cruz \n se utiliza en \n tornillos cruz", 20,40);
    
    if (tiempo >= 250) {
      tiempo = 0;
      pantalla = "4";
    }

    //pantalla 4
    
  } else if (pantalla == "4") {
    background(fondo);
    
    text ("reiniciar barra",100,50);
    
    //fill(colorB);
    //rect (posX, posY, tamX, tamY);

    //fill(0);
    //text("Reiniciar", posX + tamX/2, posY + tamY/2);
  }
}

//void mouseMoved(){
//  if(mouseX > posX && mouseY < posX + tamX && mouseY > posY && mouseY < posY + tamY){
//    colorB = color(255,0,0);
//    boton = true;
//  }else{
//    colorB = color(0,0,255);
//    boton = false;
//  }
//}
//  void mouseClicked(){
//    if(boton == true){
//      pantalla = "1";
//      tiempo = 0;
//      movy = 0;
//    }
//  }
//}
void keyPressed(){
  if (key == ' '){
    tiempo = 0;
    pantalla = "1";
    movy= 0;
  } 
}
