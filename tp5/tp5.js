//VIDEO: 
//https://youtu.be/HgtZJMH9Mzg

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

  fondo = loadImage ('data/cielo.PNG');
  vida= loadImage ('data/vida.PNG');

}
