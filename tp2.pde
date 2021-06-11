// star wars 
PFont text;
PImage image;
String star;
color ccolor;
int x,y;

void setup(){
  size (900,900);
  x=170;
  y=height;
  
  text= loadFont("Verdana-Bold-100.vlw");
  image= loadImage("Ep1_OST.png");
  
  frameRate(10);
  textAlign(CENTER);
  textFont(text,30);
  star="Star Wars \n Episode 1 \n The Phantom Menace \n Director \n George Lucas \n Musico \n John William \n Reparto \n Liam Neeson \n Ewan McGregor \n Natalie Portman";
  ccolor= color(50,100,180);
}

void draw(){
  x=x-1;
  y=y-6;
  background(image);
  textSize(x);
  fill(ccolor);
  text(star,width/2,y);
}
