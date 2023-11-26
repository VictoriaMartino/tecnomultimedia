function boton(x,y,tam,texto,fondo, colorDeTexto){
  push()
  
  fill(fondo);
  
  if(mousePress &&
  dist(mouseX, mouseY, x, y)<tam/2){
    irA(texto)
  }
  
  circle(x, y, tam);
  fill(colorDeTexto);
  text(texto, x, y);
  pop()
}
