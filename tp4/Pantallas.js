function pantalla(){
 switch (estado){
   case 0:
   background(250,177,238);
   noStroke();
   boton(width/2, height/2, width/4, "Inicio", 255, 0);
   break
   
   case 1:
   background(0);
   
   rectMode(CENTER);
    fill(108, 58, 24);
    rect(300, 590, 600, 30);
    
   juego();
    dibujarpelotas();
    puntos();
    perder();
   break
   
   case 2:
   background(255,60,150);
   textAlign(CENTER, CENTER);
    textSize(20);
    text(" Perdiste, los circulos tocaron el suelo ", 300, 250);
 
   break
   
   case 3:
   
   background(255,60,150);
   textAlign(CENTER, CENTER);
    textSize(20);
    text(" Ganaste, atrapaste todos los circulos ", 300, 250);
   
 }
}

function irA(texto) {

  if (texto == "Inicio") {
    estado = 1
  }
  
  if (texto == "volver") {
    estado = 0
  }
}

//muestra el puntaje
function puntos () {
  textSize(20);
    fill(255);
    text("Puntaje: " + puntaje, 55, 30);
    if (puntaje >= 2) {
      estado = 3; 
    }
}

//cuando la pelota colisiona con el suelo perdes
function perder () {
  if (pelotaY[0] + pelotaDiameter[0] / 2 > height - 30) {
      estado = 2;
    }
}
