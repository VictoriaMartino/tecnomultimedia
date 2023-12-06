let app 
  function setup() {
  createCanvas(windowWidth, windowHeight)
    background(120)
    app = new App()
    textSize(12)
}


function draw() {
  app.dibujar()
  
  
  if (keyIsPressed) {

    juego.interaccionPersonaje(keyCode);
  }
}

function mouseClicked() {
  app.mouseClicked()
}
