/*
 Alumno: Victoria Martino.
 
 Legajo: 85114/3.
 
 Comision: 5.
 
 Profesor: Tobias Albirosa
 
 Link:
 */

PImage [] fondo;





void setup() {

  fondo = new PImage [10];



  for (int i = 0; i < fondo.length; i++) {
    if (i == 0) {
      fondo[i] = loadImage(i + ".png");
    }
  }

  image(fondo [0], 0, 0, 600, 600);
  println(fondo.length);

  size(600, 600);
}
