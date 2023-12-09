/*
 Alumno: Victoria Martino.
 
 Legajo: 85114/3.
 
 Comision: 5.
 
 Profesor: Tobias Albirosa
 
 */

let app 
  function setup() {
  createCanvas(windowWidth, windowHeight)
    background(120)
    app = new App()
    textSize(12)
}


function draw() {
  app.dibujar()
  
  

}
function keyPressed(){
    app.juego.interaccionPersonaje(keyCode);

}
function mouseClicked() {
  app.mouseClicked()
}
