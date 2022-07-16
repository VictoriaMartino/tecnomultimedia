

String estado;

int cant, tam, newMemoria;
PImage [] image = new PImage[6];
int []columnas = new int[5];
int []filas = new int[4];
boolean []ganar= new boolean[6];
int contador;

void setup() {
  size(600, 400 );
  textSize( 24 );
  textAlign( CENTER, CENTER );

  cant= 4;
  tam= 800/cant;
  newMemoria=5;

  columnas [0] = 0;
  columnas [1] = 200;
  columnas [2] = 400;
  columnas [3] = 600;

  filas [0] = 0;
  filas [1] = 200;
  filas [2] = 400;
  filas [3] = 600;

  image[0]  = loadImage("1.jpg");
  image[1]  = loadImage("2.png"); 
  image[2]  = loadImage("3.png");
  image[3]  = loadImage("4.png"); 
  image[4]  = loadImage("5.png"); 
  image[5]  = loadImage("6.png"); 


  ganar[0] =false;
  ganar[1] =false;
  ganar[2] =false;
  ganar[3] =false;
  ganar[4] =false;
  ganar[5] =false;

  estado = "inicio";
  contador = 0;
}

void draw() {
  //Inicio
  if ( estado.equals("inicio") ) {
    background( 150 );
    texto( "Bienvenido", 50, 300, 100 );
    fill(255);
    botones(200, 200, 200, 50);
    texto( "Instrucciones", 20, 300, 230 ); 
    botones(200, 300, 200, 50);
    texto("Creditos", 20, 300, 330);



    //Creditos
  } else if ( estado.equals("creditos") ) {   
    background(0, 0, 255); 

    texto("Victoria Martino", 20, 122, 230);
    texto("85114/3", 20, 250, 232);
    texto("Gracias por jugar", 50, 300, 100);
    texto("Tecno multimedia 1", 40, 300, 150);
    texto("Matías Jauregui Lorda", 20, 280, 200);
    texto("Comisión 2", 20, 100, 200);



    //Instrucciones
  } else if ( estado.equals("instrucciones") ) {
    background( 200, 100, 0 );
    texto( "Presione 'enter' para comensar a jugar", 25, 300, 250 );  





    //Jugando
  } else if ( estado.equals("jugando") ) {
    for (int i=0; i< cant; i++) {
      for (int l=0; l<cant; l++) {
        noFill();
        rect(i*tam, l*tam, 200, 200);
        contador++;
        println( contador );
        println( contador/700 );
      }
    }
    if (contador>=5*700) {
      estado = "perdiste";
    }
    for (int g = 0; g < ganar.length; g++) {
      if (ganar[i]==true) {
        estado = "ganaste";
      }

      if (estado.equals("ganaste")) {
        background(255, 0, 0);
        text("Ganaste!", 400, 300);
      }
      if (estado.equals("perdiste")) {
        background(255);
        fill(255, 0, 0);
        text("PERDISTE", 400, 300);
      }
    }


    void keyPressed() {

      if ( estado.equals("instrucciones") && key == ENTER ) {
        estado = "jugando";
      }
      //  condicion para reiniciar
      if ( keyCode == ' ' ) {
        if ( estado.equals("perderdiste") || estado.equals("ganaste") ) {
          reiniciar();
        }
      }
    }




    void mousePressed() {
      if (estado.equals("inicio") && ((mouseX>200)&& (mouseY<200+200)&&(mouseY>200)&&(mouseY < 200+50)) ) {
        estado = "instrucciones";
      }

      if (estado.equals("inicio") && ((mouseX>200)&& (mouseY<200+300)&&(mouseY>200)&&(mouseY < 300+50)) ) {
        estado = "creditos";
      }


      if ( estado.equals("instrucciones") && dist( mouseX, mouseY, width/2, height/2+100) <= 25 ) {
        estado = "jugando";
      }

      if (estado =="jugando") {
        fotos();
      }

      if (estado.equals("jugando") && (contador>=3*700)) {
        estado = "perdiste";
      }
    }


    void texto( String texto, float tam, float x, float y) {
      pushStyle();
      colorMode( HSB, 360, 100, 100 );
      fill( 0 );
      textAlign( CENTER );
      textSize( tam );
      text( texto, x, y );
      popStyle();
    }

    void botones(float x, float y, int tam, int man) {
      rect(x, y, tam, man);
    }


    void fotos() {
      if (mouseX>columnas[0] && mouseX<columnas[1] && mouseY>filas[0] && mouseY <filas[1]) {
        image(image[0], 0, 0, 200, 200);
        ganar[0] =true;
      }
      if (mouseX>columnas[1] && mouseX<columnas[2] && mouseY>filas[0] && mouseY <filas[1]) {
        //apeceAlbum=false;
        image(image[1], 200, 0, 200, 200);
        ganar[1] =true;
      }
      if (mouseX>columnas[2] && mouseX<columnas[3] && mouseY>filas[0] && mouseY <filas[1]) {
        image(image[2], 400, 0, 200, 200);
        ganar[2] =true;
      }

      if (mouseX>columnas[0] && mouseX<columnas[1] && mouseY>filas[1] && mouseY <filas[2]) {
        image(image[3], 0, 200, 200, 200);
        ganar[3] =true;
      }
      if (mouseX>columnas[1] && mouseX<columnas[2] && mouseY>filas[1] && mouseY <filas[2]) {
        image(image[4], 200, 200, 200, 200);
        ganar[4] =true;
      }
      if (mouseX>columnas[2] && mouseX<columnas[3] && mouseY>filas[1] && mouseY <filas[2]) {
        image(image[5], 400, 200, 200, 200);
        ganar[5] =true;
      }
    }


    void reiniciar() {
      cant= 4;
      tam= 800/cant;
      newMemoria=5;
      estado = "inicio";
      contador = 0;
    }
