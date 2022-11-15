class Barra {

  float x;
  float y;
  float w;
  float h;
  float vely;
  float velx;
  color c;

  Barra(float tempX, float tempY, float tempW, float tempH) {
    x = tempX;
    y = tempY;
    w = tempW;
    h = tempH;
    vely = 0;
    velx = 0;
    c=(255);
  }

  void movimiento() {
    y += vely;
    x += velx;
  }

  void dibujar() {
    fill(c);
    rect(x-w/2, y-h/2, w, h);
  } 

  float izq() {
    return x-w/2;
  }
  float der() {
    return x+w/2;
  }
  float arriba() {
    return y-h/2;
  }
  float abajo() {
    return y+h/2;
  }
}
