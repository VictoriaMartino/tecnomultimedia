function pelotasquecaen() {
  for (let i = 0; i < numPelotas; i++) {
    pelotaX[i] = random(width); //posición aleatoria de la pelota en X
    pelotaY[i] = random(-400, -50); //posición Y inicial arriba de la pantalla
    pelotaSpeed[i] = 5; //velocidad 
    pelotaDiameter[i] = 50;
  }
}


function dibujarpelotas () {
      for (let i = 0; i < numPelotas; i++) {
      pelotaY[i] += pelotaSpeed[i];
      fill(255);
       ellipse(pelotaX[i], pelotaY[i], 54);
      //calcula las coordenadas para centrar la imagen en la elipse
      let x = pelotaX+50;
      let y = pelotaY+50;

      if (pelotaY[i] > height + 50) {
        //reiniciar en la parte superior
        pelotaY[i] = random(-400, -50);
        pelotaX[i] = random(width);
      }
      //cuando la pelota toca el personaje aumenta el puntaje
      if (dist(pelotaX[i], pelotaY[i], personajeX, personajeY) < (pelotaDiameter[i] + 65) / 2) {
        puntaje++;
        //resetea la pelota cuando toca al personaje
        pelotaY[i] = random(-400, -50);
        pelotaX[i] = random(10, 590);
      }
    }
}
