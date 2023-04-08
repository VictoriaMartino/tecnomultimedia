//Alumno: Victoria Martino 85114/3.

//Profesor: Matias Jauregui Lorda.
//Comision 2.

//Animal: Nutria.

PImage nutria;

void setup() {
  size(800, 400);


  nutria = loadImage("nutria.jpg");
}

void draw() {
  background(51, 57, 23);
  noStroke();
  //Cabeza
  fill(81, 60, 55);
  circle(100, 200, 350);


  //trompa
  fill(255);
  quad(0, 250, 180, 190, 180, 400, 0, 400);

  //ojo

  fill(81, 60, 55);
  circle(150, 180, 60);

  fill(0);
  circle(150, 170, 50);
  
  //hocico
  pushStyle();
  fill(255);
  ellipse(250,250,200,130);
  ellipse(210,300,200,150);
  popStyle();

fill(81, 60, 55);
triangle(290,240,340,230,350,260);

fill(0);
circle(310,250,20);

  image(nutria, 400, 0);
}
