/*
 Alumno: Victoria Martino.
 
 Legajo: 85114/3.
 
 Comision: 5.
 
 Profesor: Tobias Albirosa
 
 */

let app

  let imagen = []

  function preload() {
 imagen[0] = (loadImage('assets/imagen0.png'))
 imagen[1] = (loadImage('assets/imagen1.png'))
 imagen[2] = (loadImage('assets/imagen2.png'))
 imagen[3] = (loadImage('assets/imagen3.png'))
 imagen[4] = (loadImage('assets/imagen4.png'))
 imagen[5] = (loadImage('assets/imagen5.jpg'))
 imagen[6] = (loadImage('assets/imagen6.png'))
 imagen[7] = (loadImage('assets/imagen7.png'))
 imagen[8] = (loadImage('assets/imagen8.png'))
 imagen[9] = (loadImage('assets/imagen9.png'))
 imagen[10] = (loadImage('assets/imagen10.png'))
 imagen[11] = (loadImage('assets/imagen11.png'))
 imagen[12] = (loadImage('assets/imagen12.png'))
 imagen[13] = (loadImage('assets/imagen13.png'))
 imagen[14] = (loadImage('assets/imagen14.png'))
 imagen[15] = (loadImage('assets/imagen15.png'))
 imagen[16] = (loadImage('assets/imagen16.png'))

}

function setup() {
  createCanvas(windowWidth, windowHeight)
    background(120)
    app = new App()
    textSize(12)
}


function draw() {
  app.dibujar()
}
function keyPressed() {
  app.juego.interaccionPersonaje(keyCode);
}
function mouseClicked() {
  app.mouseClicked()
}
