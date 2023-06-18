/*
 Alumno: Victoria Martino.
 
 Legajo: 85114/3.
 
 Comision: 5.
 
 Profesor: Tobias Albirosa
 
 Link:
 */


PImage fondo;

int cant = 22;

int cantidadXDeModulos;
int cantidadYDeModulos;

int anchoDeModulo;
int altoDeModulo;

int ancho, alto;

color a,b;

void setup() {
  size( 800, 400);
  

  fondo = loadImage("imagen.png");

  cantidadXDeModulos = 2;
  cantidadYDeModulos = 2;

  anchoDeModulo = width/4;
  altoDeModulo = height/2;


  alto = altoDeModulo/cant;
  ancho = anchoDeModulo/cant;
}


void draw() {

  background(0);

  image(fondo, 400, 0, 400, 400);

  for (int i = 0; i < cantidadXDeModulos; i++) {
    for (int j = 0; j < cantidadYDeModulos; j++) {
      cuadrados(i, j);
    }
  }
}
void cuadrados(int parametroX, int parametroY) {

  for (int i = cant; i > 0; i--) {
    dibujo(i, parametroX, parametroY);
  }
}

void dibujo(int x, int pX, int pY) {

  push();
  if (x % 2 == 0) {
    fill(0);
  } else {
    fill( 255);
  }
  translate(pX * anchoDeModulo, pY * altoDeModulo);

  rect(0, 0, ancho * x, alto * x);


  pop();
}
