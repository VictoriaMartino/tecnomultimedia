//Circulo cromatico 

void setup() {
  size(800, 800);
  background(0);
}

void draw() {
 
  noStroke();
  
  fill(0, 255, 0);//verde
  circle(150, 550, 130); //1

  fill(153, 255, 0);//lima
  circle(150, 390, 50);//2

  fill(255, 255, 0);//amarillo
  circle(120, 260, 90);//3

  fill(255, 140, 0);//naranja
  circle(240, 200, 50);//4

  fill(255, 0, 0);//rojo
  circle(400, 150, 130);//5
  
  fill(255, 0, 140);//fuccia
  circle(550, 200, 50);//6
  
  fill(255, 0, 255);//magenta
  circle(680, 250, 90);//7
  
  fill(153, 0, 255);//violeta
  circle(680, 400, 50);//8
  
  fill(0, 0, 255);//azul
  circle(650, 550, 130);//9
  
  fill(0, 153, 255);//ceruleo
  circle(520, 630, 50);//10
  
  fill(0, 255, 255);//cian
  circle(400, 700, 90);//11
  
  fill(0, 255, 140);//verde cian
  circle(290, 630, 50);//12
 
}
