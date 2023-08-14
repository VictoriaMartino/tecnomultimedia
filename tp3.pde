/*
 Alumno: Victoria Martino.
 
 Legajo: 85114/3.
 
 Comision: 5.
 
 Profesor: Tobias Albirosa.
 
 Cuento: La Cenicienta por Charles Perrault.
 
 Link:https://youtu.be/4cOSnH8IBXU
 */


PImage[] fondos;

int pantalla = 0;

String[] textos = new String[18];

void setup() {

  size(600, 600);

  //cargo las fotos

  fondos = new PImage[8];

  fondos[0] = loadImage("casamiento.jpg");
  fondos[1] = loadImage("hada madrina.jpg");
  fondos[2] = loadImage("Hermanastras.jpg");
  fondos[3] = loadImage("Carta.jpg");
  fondos[4] = loadImage("magia.png");
  fondos[5] = loadImage("salon.jpg");
  fondos[6] = loadImage("sinmagia.jpg");
  fondos[7] = loadImage("Titulo.jpg");


  //cargo los textos de la aventura


  textos [1] = "Tu nombre es Cenicienta \n Luego de la muerte de tu madre, tu padre se caso con tu madrastra. \n Ella y sus hijas te tratan como una sirvienta ";
  textos [2] = "Llego una invitacion a un baile real para que el principe elija a su futura esposa";
  textos [3] = "Tus hermanastra te piden ayuda para prepararse";
  textos [4] = "Decides no ayudarlas. Le cuentas a tu padre como te han estado tratando desde que se caso con su madre y el decide echarlas. Dias despues lo acompañas al baile real";
  textos [5] = "Decides ayudarlas. Sin embargo, el dia del baile, ellas ven que estas vestida mejor y destruyen tu vestido";
  textos [6] = "Tu padre te presenta al rey y al principe";
  textos [7] = "El principe y tu se llevan tan bien que el decide casarse contigo";

  textos [9] ="Triste, corres al jardin y te encuentras con tu hada madina";
  textos [10] ="Tu hada madrina te ofrece ayuda";
  textos [11] ="Tu hada madina crea un vestido";
  textos [12] ="Conoces al principe y se enamoran. Bailan hasta que se hacen las 12 de la noche";
  textos [13] ="Las reglas del hada madina te obligan a salir corriendo a las 12 de la noche, pero terminas perdiendo una zapatilla. Dias despues un empleado del reino comienza a probar la zapatilla en todas las mujeres del reino. Pero solo te queda a ti";
  textos [14] ="No aceptas la ayuda. Vas al baile con un vestido que creaste";
  textos [15] ="En el baile conoces al principe del reino vecino";
  textos [16] ="Al conocer tu identidad, el principe decide casarse contigo. Y vivieron felices para siempre";
  textos [17] ="El principe de reino vecino y tu se casan en un gran ceremonia";

}
void draw() {
  println(pantalla);


  background(0);

  //titulo
  if ( pantalla==0) {

    fill(255);

    image( fondos[7], 0, 0, width, height);
    Boton("Comienzo", 150, 500, 120);
    Boton("Creditos", 450, 500, 120);

    //inicio
  } else if ( pantalla == 1 ) {
    background(0);

    textSize(30);
    textAlign( CENTER );
    text( textos[1], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);

    //invitacion
  } else if ( pantalla == 2 ) {
    textSize(30);
    fill(0);
    image( fondos[3], 0, 0, width, height);
    //textAlign( CENTER );
    text( textos[2], 0, 200, 600, 600);
    Boton("Siguiente", 150, 500, 120);

    //Creditos
  } else if ( pantalla == 3 ) {
    background(0);

    textSize(30);
    textAlign( CENTER );

    fill(255);

    text("Cenicienta - Charles Perrault", 0, 100, 600, 600);

    textSize(20);
    text( "Alumno: Victoria Martino. \n Legajo: 85114/3. \n Comision: 5. \n Profesor: Tobias Albirosa.", 0, 200, 600, 600);

    Boton("inicio", 450, 500, 120);


    //Decision 1
  } else if ( pantalla == 4 ) {
    textSize(30);
    fill(255);
    image (fondos[2], 0, 0, width, height);
    // textAlign( CENTER );
    text( textos[3], 0, 100, 600, 600);
    Boton("No ayudarlas", 150, 500, 120);
    Boton("Ayudarlas", 450, 500, 120);


    //No ayudarlas
  } else if ( pantalla == 5 ) {
    textSize(30);
    textAlign( CENTER );
    text( textos[4], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);


    //Ayudarlas
  } else if ( pantalla == 6 ) {
    background(0);
    textSize(30);
    textAlign( CENTER );
    text( textos[5], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);


    //Baile con el padre
  } else if ( pantalla == 7 ) {
    image (fondos[5], 0, 0, width, height);

    fill(0, 255, 255);
    textSize(30);
    textAlign( CENTER );
    text( textos[6], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);

    //Final 1
  } else if ( pantalla == 8 ) {
    image( fondos[0], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    fill(0);
    text( textos[7], 0, 100, 600, 600);
    Boton("Inicio", 150, 500, 120);
    
    //Hada madrina
  } else if ( pantalla == 9 ) {
    image( fondos[1], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    
    text( textos[9], 0, 100, 600, 600);
    
    
    Boton("Siguiente", 150, 500, 120);
    
    
    //Decision 2
  } else if ( pantalla == 10 ) {
    image( fondos[1], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    text( textos[10], 0, 100, 600, 600);
    Boton("Aceptar la ayuda", 150, 500, 120);
    Boton("No aceptar la ayuda", 450, 500, 120);
    
    //Aceptar la ayuda
  } else if ( pantalla == 11 ) {
    image( fondos[4], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    text( textos[11], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);
    
    
    //Vas al baile
  } else if ( pantalla == 12 ) {
    image( fondos[5], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    fill(0,255,255);
    text( textos[12], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);
    
    //explicacion
  } else if ( pantalla == 13 ) {
    background(0);
    fill(255);
    textSize(30);
    textAlign( CENTER );
    text( textos[13], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);
    
    float spacing = 80;
    float diameter = 30;
    for (int i = 0; i < 3; i++) {
      float x = i * spacing + spacing/2;

      fill(250);
      ellipse(x, 400, diameter, 40);
    }
    
    //No acepta la ayuda
  } else if ( pantalla == 14 ) {
    image( fondos[6], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    text( textos[14], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);
    
    //Conoces a otro principe
  } else if ( pantalla == 15 ) {
    image( fondos[5], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    text( textos[15], 0, 100, 600, 600);
    Boton("Siguiente", 150, 500, 120);
    
    //final 2
  } else if ( pantalla == 16 ) {
    image(fondos[0],0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    text( textos[17], 0, 100, 600, 600);
    Boton("Inicio", 150, 500, 120);
    
    
    //final 3
  } else if ( pantalla == 17 ) {

    image( fondos[0], 0, 0, width, height);
    textSize(30);
    textAlign( CENTER );
    text( textos[16], 0, 100, 600, 600);
    Boton("Inicio", 150, 500, 120);
    
    
  } 
}


void mouseClicked() {
  if ( pantalla==0) {
    //muestro la pantalla 0 y el resto de las pantallas
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=1;
    }
    if ( superficie ( mouseX, mouseY, 450, 500, 120)) {
      pantalla=3;
    }
  } else if ( pantalla == 1 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=2;
    }
  } else if ( pantalla == 2 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=4;
    }
  } else if ( pantalla == 3 ) {
    if ( superficie ( mouseX, mouseY, 450, 500, 120)) {
      pantalla=0;
    }
  } else if ( pantalla == 4 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=5;
    }
    if ( superficie ( mouseX, mouseY, 450, 500, 120)) {
      pantalla=6;
    }
  } else if ( pantalla == 5 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=7;
    }
  } else if ( pantalla == 6 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=9;
    }
  } else if ( pantalla == 7 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=8;
    }
  } else if ( pantalla == 8 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=0;
    }
  } else if ( pantalla == 9 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=10;
    }
  } else if ( pantalla == 10 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=11;
    }
    if ( superficie ( mouseX, mouseY, 450, 500, 120)) {
      pantalla=14;
    }
  } else if ( pantalla == 11 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=12;
    }
  } else if ( pantalla == 12 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=13;
    }
  } else if ( pantalla == 13 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=17;
    }
  } else if ( pantalla == 14 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=15;
    }
  } else if ( pantalla == 15 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=16;
    }
  } else if ( pantalla == 16 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=0;
    }
  } else if ( pantalla == 17 ) {
    if ( superficie ( mouseX, mouseY, 150, 500, 120)) {
      pantalla=0;
    }
  } 
}
