//Undertale

String Pan1, Pan2, Pan3, Info;
PImage I1, I2, I3, I4, I5, I6, I7, I8, I9;
int T;
float y, x;
PFont fuente;


//------------------------------------------------------------------------------------------------------------------------
void setup() {
  size(1000, 600);
  textAlign(CENTER, CENTER);
  noCursor();


  //Asignacion
  Pan1 = " UNDERTALE ";
  Pan2 = " By Toby Fox ";
  Pan3 = " UNDERTALE \n((Cast)) ";
  Info = " Victoria Martino \n Comision 2 \n Matias Jauregui Lorda";
  T = 1;
  y = height;
  x = width/2;


  fuente = createFont("determination-alt-sans.ttf", 48);

  //imagenes
  I1 = loadImage("1.png");
  I2 = loadImage("2.png");
  I3 = loadImage("3.png");
  I4 = loadImage("4.png");
  I5 = loadImage("5.png");
  I6 = loadImage("6.png");
  I7 = loadImage("7.png");
  I8 = loadImage("8.png");
  I9 = loadImage("9.png");
}

//----------------------------------------------------------------------------------------------------------------------------------

void draw() {
  background(0);
  println("y:" + y);
  T ++;
  println("Tiempo:" + T);
  textFont(fuente);



  //Pantalla 1
  textSize(80);
  text(Pan1, width/2, height/2);

  //Pantalla 2
  if (T > 100) {
    background(0);
    text(Pan2, width/2, height/2);
  }

  //Pantalla 3
  if (T > 200) {
    textAlign(CENTER, TOP);
    background(0);
    text(Pan3, x, y);
    textSize(40);
    text("    \n \n \n \n \n \n Frisk \n Flowey \n Toriel \n Sans \n Papyrus \n Undyne \n Alphys \n Asgore ", x, y);

    image(I2, x+150, y+410, 120, 120);
    image(I3, x-250, y+410, 100, 100);
    image(I4, x+150, y+560, 120, 120);
    image(I5, x-250, y+560, 100, 100);
    image(I6, x+150, y+710, 100, 100);
    image(I7, x-250, y+710, 100, 100);
    image(I8, x+150, y+840, 100, 100);
    image(I9, x-250, y+830, 100, 100);
  }
  if (T < 1600) {
    y -= 1;
  }



  //corazon
  image(I1, mouseX, mouseY, 50, 50);
}


void keyPressed() {
  if (key == ' ')
    T=1;
  y= height;
  x = width/2;
}
