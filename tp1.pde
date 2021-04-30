//Circulo cromatico 
//Se llama Rodrigo
 
 void setup(){
   size(800,200);
   background(0);
 }
 
 void draw(){
   noStroke();
   fill(0,255,0);//verde
   circle(30,100,80); //1
   fill(153,255,0);//lima
   circle(80,100,80);//2
   fill(255,255,0);//amarillo
   circle(130,100,80);//3
   fill(255,140,0);//naranja
   circle(180,100,80);//4
   fill(255,0,0);//rojo
   circle(230,100,80);//5
   fill(255,0,140);//fuccia
   circle(280,100,80);//6
   fill(255,0,255);//magenta
   circle(330,100,80);//7
   fill(153,0,255);//violeta
   circle(380,100,80);//8
   fill(0,0,255);//azul
   circle(430,100,80);//9
   fill(0,153,255);//ceruleo
   circle(480,100,80);//10
   fill(0,255,255);//cian
   circle(530,100,80);//11
   fill(0,255,140);//verde cian
   circle(580,100,80);//12
   fill(0,255,0);//verde
   circle(630,100,80);//13
   fill(255);
   circle(660,100,20);
   fill(0);
   circle(665,100,10);
   stroke(153,255,0);
   strokeWeight(6);
   line(660,80,690,60);
   noStroke();
   fill(255,255,0);
   circle(690,60,20);
}
