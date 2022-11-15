class Pelota {

  float x;
  float y;
  float velx;
  float vely;
  float diam;
  color c;

  Pelota(float tempX, float tempY, float tempdiam) {
    x = tempX;
    y = tempY;
    diam = tempdiam;
    velx = 0;
    vely = 0;
    c = (255);
  }

  void movimiento() {
    y = y + vely;
    x = x + velx;
  }

  void dibujar() {
    fill(c);
    ellipse(x, y, diam, diam);
  }

  float izq() {
    return x - diam/2;
  }

  float der() {
    return x + diam/2;
  }

  float arriba() {
    return y - diam/2;
  }

  float abajo() {
    return y + diam/2;
  }
}
