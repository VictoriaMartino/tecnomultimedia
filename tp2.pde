// Link de YouTube: Disculpe que aun no este, pero me cortaron los cable del 
//internet y no puede hacerlo. Cuendo vuelva el servicio hare el video y modificare
//el trabajo en github. Se que es una de las pautas de evalucion pero el trabajo lo tuve que subir con datos.

int cant = 10;
int tam, pos;
int F = 0;
color Blue = color (0,0,255);
void setup() {
  size(500, 500);

  tam = width/cant;
  pos = 0;
}

void draw() {
  background(0);
  noStroke();
  
   circulo();
   pos ++;
   
  for (int i=0; i<cant; i++) {
    for (int j=0; j<cant; j++) {

      float distan = dist(mouseX, mouseY, i*tam+tam/2, j*tam+tam/2);
      float diagonal = dist(0, 0, width, height);
      float ancho = map(distan, 0, diagonal, tam/4, tam*2);


      if ((i+j)%2==0) {
        fill(0, 0, 255);
      }
      rect (i*tam, j*tam, ancho, ancho);
    }
  }
}

void circulo(){
 fill(F);
  circle(mouseX,mouseY, pos);
}

void mousePressed(){
  if ( F == 0){
    F = Blue;
    } else {
      F = 0;
  }
}

void keyPressed (){
  if(key == ' '){
    pos = 0;
  }
}
