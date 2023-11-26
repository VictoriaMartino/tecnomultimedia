/*
 Alumno: Victoria Martino.
 
 Legajo: 85114/3.
 
 Comision: 5.
 
 Profesor: Tobias Albirosa
 
 Link:https://www.youtube.com/watch?v=8H1IEUhpEc4
 */



let estado = 0;

let personajeY, personajeX
let avanzar
let retroceder
let piso

let pelotaX = [];
let pelotaY = [];
let numPelotas = 1;
let pelotaSpeed = [];
let pelotaDiameter = [];

let puntaje = 0;
let pressed = false
let mousePress;

function setup() {
  createCanvas(600,600);
  
  textSize(28);
  textAlign(CENTER);
  
  personajeY = height - 50
  personajeX = width/2
  piso = height - 30
  
  pelotasquecaen();

}


function draw() {
  pantalla();

}


function mousePressed(){
  mousePress = !mousePress;
}

function keyPressed() {
  if (key == 'a' || key == 'A') {
    retroceder=true;
  }
  if (key == 'd' || key == 'D') {
    avanzar=true;
  }
}

function keyReleased() {
  if (key == 'a' || key == 'A') {
    retroceder=false
  }
  if (key == 'd' || key == 'D') {
    avanzar=false
  }
}
