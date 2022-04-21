// Trabajo Practico 0
// Muñeco de nieve 
// Nombre: Carlos

size(800, 800);
background(98, 147, 149);
noStroke();

//Pasto

fill(197, 203, 198);
rect(0, 500, 800, 300);

//Montañas

fill(140, 140, 142 );
triangle(200, 500, 400, 50, 600, 500);

fill(163, 170, 164);
triangle(0, 500, 150, 150, 300, 500);
triangle(800, 500, 650, 150, 500, 500);

//Carlos

fill(255);
ellipse(400,650,250,250);
ellipse(400,500,200,200);
ellipse(400,375,150,150);

//ojos

fill(0);
ellipse(375,375,25,50);
ellipse(425,375,25,50);

//botones

ellipse(400,450,20,20);
ellipse(400,500,20,20);
ellipse(400,550,20,20);

//brazos

stroke(152,111,72);
strokeWeight(10);
line(330,450, 300,600);
line(470,450, 500,600);

//gorro
noStroke();
fill(0);
rect(360,225,80,100);
rect(325,300,150,30);
fill(255,15,43);
rect(360,270,80,30);
