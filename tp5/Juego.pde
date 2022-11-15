class Juego {

  Pelota pelota;
  Barra barra1;
  Barra barra2;

  Juego() {
    pelota = new Pelota(width/2, height/2, 50);
    pelota.velx = 5;
    pelota.vely = random( -3, 3);

    barra1= new Barra(15, height/2, 30, 200);
    barra2 = new Barra( width-15, height/2, 30, 200);
  }

  void dibujar() {
    pelota.dibujar();
    pelota.movimiento();
    pelota.dibujar();

    barra1.movimiento();
    barra1.dibujar();
    barra2.movimiento();
    barra2.dibujar();


    if (pelota.der() > width) {
      pelota.velx = - pelota.velx;
    }

    if (pelota.izq() < 0) {
      pelota.velx = - pelota.velx;
    }

    if ( pelota.abajo() > height) {
      pelota.vely = - pelota.vely;
    }

    if (pelota.arriba() < 0) {
      pelota.vely = -pelota.vely;
    }

    if (barra1.abajo() > height) {
      barra1.y = height-barra1.h/2;
    }

    if (barra1.arriba() < 0) {
      barra1.y = barra1.h/2;
    }

    if (barra2.abajo() > height) {
      barra2.y = height-barra2.h/2;
    }

    if (barra2.arriba() < 0) {
      barra2.y = barra2.h/2;
    }
  }

  void keyPressed() {
    if (keyCode == UP) {
      barra2.vely=-3;
    }
    if (keyCode == DOWN) {
      barra2.vely=3;
    }
    if (key == 'a') {
      barra1.vely=-3;
    }
    if (key == 'z') {
      barra1.vely=3;
    }
  }

  void keyReleased() {
    if (keyCode == UP) {
      barra2.vely=0;
    }
    if (keyCode == DOWN) {
      barra2.vely=0;
    }
    if (key == 'a') {
      barra1.vely=0;
    }
    if (key == 'z') {
      barra1.vely=0;
    }
  }
}
