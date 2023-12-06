class App {
  constructor() {
    this.cantidadDePantallas = 10
      this.pantalla = 0
      this.botonSiguiente = new Boton(1300, 600, 100, 50, "Siguiente", "siguiente")
      this.botonVolver = new Boton(1100, 600, 100, 50, "Volver", "volver")
      this.botonUniversal1 = new Boton(width/4, height/4, 100, 50, "Ir a pantalla 3", 3)
      this.botonUniversal2 = new Boton(width/4, height/4, 100, 50, "Ir a pantalla 0", 0)
      this.botonUniversal3 = new Boton(900, 500, 100, 50, "Iniciar", 1)
      
      this.juego = new Juego();
  }

  dibujar() {
    if (this.pantalla == 0) {
      background(0)
        fill(255);
      text("La Cenicienta", 700, 100);
      this.botonUniversal3.dibujar()
    } else if (this.pantalla == 1) {
      background(0)
        fill(255);
      text("Te encarnaras en la vida de Cenicienta, una chica que hace todo lo que su madrastra y hermanastras le ordenen.", 100, 600);
      this.botonSiguiente.dibujar()
    } else if (this.pantalla == 2) {
      background(0)
        fill(255);
      text("Un día mientra limpias, llega una carta.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 3) {
      background(0)
        text("El rey invitaba a todas las docellas del reino a un banquete en nombre del principe. Los rumores daban a enterder que el principe elegiria a su esposa ese día.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 4) {
      background(0)
        text("Tu madrastra y tus hermanstras comensaron a darte ordenes, ellas no querian que vayas al baile.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 5) {
      background(0)
        text("El dia del baile tus hermanastras destruyeron tu vestido.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 6) {
      background(0)
        text("Lloraste en la fuente de tu patio, hasta que sentiste una mano acariciando tu pelo.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 7) {
      background(0)
        text("Era tu hada madrina!.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 8) {
      background(0)
        text("Ella con su magia te creo un caruaje, un vestido y unas hermosas zapatillas de cristal.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 9) {
      background(0)
        text("Pero ella tenia una condicion. Debias volver antes de la doce de la noche.", 100, 600);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 10){
      background(0)
      juego.dibujar();
}
  
  actualizar() {
      juego.actualizar();
  }
  }

mouseClicked() {
  this.botonSiguiente.mouseClicked()
    this.botonVolver.mouseClicked()

    if (this.pantalla == 0) {
    this.botonUniversal3.mouseClicked()
  }
}

cambiarPantalla(param) {
  console.log(this.pantalla)
    console.log(param)

    if (param == "siguiente" && this.pantalla < this.cantidadDePantallas) {

    this.pantalla++
  } else if (param == "volver" && this.pantalla > 0) {
    this.pantalla--
  } else if (param != "volver" && param != "siguiente") {
    this.pantalla=param
  }
}
}
