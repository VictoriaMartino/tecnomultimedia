function juego(){
  push()
  
  personaje(personajeX, 50, 50);
  
  pop()
}

function personaje(personajeXParam, personajeTamX, personajeTamY){
  
  if (avanzar == true) {
    personajeX++
  }
  if (retroceder == true) {
    personajeX--
  }
  fill(255,0,0);
  rect(personajeXParam, personajeY, personajeTamX, personajeTamY)

}
