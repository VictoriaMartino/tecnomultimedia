/*
 Alumno: Victoria Martino.
 
 Legajo: 85114/3.
 
 Comision: 5.
 
 Profesor: Tobias Albirosa
 
 Link:https://www.youtube.com/watch?v=pMzSZJjNy2E
 */

let juego;
let vida;

function setup() {

  createCanvas( 600, 600 );

  juego = new Juego(vida);

//config esteticas
  textAlign (CENTER);
  textLeading (25);
}


function draw() {
  //background (200);

  juego.dibujar();

  juego.actualizar();

  if (keyIsPressed) {

    juego.interaccionPersonaje(keyCode);
  }
}

function preload () {

  vida= loadImage ('data/vida.PNG');

}
