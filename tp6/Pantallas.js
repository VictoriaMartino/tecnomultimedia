class App {
  constructor() {
    this.cantidadDePantallas = 20
      this.pantalla = 0
      this.botonSiguiente = new Boton(width/2, 600, 100, 50, "Siguiente", "siguiente")
      this.botonVolver = new Boton(width/3, 600, 100, 50, "Volver", "volver")
      this.botonUniversal1 = new Boton(width/4, height/4, 100, 50, "Jugar", 17)
      this.botonUniversal2 = new Boton(width/4, height/4, 100, 50, "Volver", 0)
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
      text("Te encarnaras en la vida de Cenicienta, una chica que hace todo lo que su madrastra y hermanastras le ordenen.", 100, 500);
      this.botonSiguiente.dibujar()
    } else if (this.pantalla == 2) {
      background(0)
        fill(255);
      text("Un día mientra limpias, llega una carta.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 3) {
      background(0)
        text("El rey invitaba a todas las docellas del reino a un banquete en nombre del principe. Los rumores daban a enterder que el principe elegiria a su esposa ese día.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 4) {
      background(0)
        text("Tu madrastra y tus hermanstras comensaron a darte ordenes, ellas no querian que vayas al baile.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 5) {
      background(0)
        text("El dia del baile tus hermanastras destruyeron tu vestido.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 6) {
      background(0)
        text("Lloraste en la fuente de tu patio, hasta que sentiste una mano acariciando tu pelo.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 7) {
      background(0)
        text("Era tu hada madrina!.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 8) {
      background(0)
        text("Ella con su magia te creo un caruaje, un vestido y unas hermosas zapatillas de cristal.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 9) {
      background(0)
        text("Pero ella tenia una condicion. Debias volver antes de la doce de la noche.", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 10) {
      background(0)
        text("Cuando llegaste al baile, inmediatamente llamaste la atencion de todo el mundo, incluido el principe", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 11) {
      background(0)
        text("El principe y tu bailaron todo el tiempo hasta que dieron las doce", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 12) {
      background(0)
        text("Haciendo le caso al hada madrina. Salieste corriendo del palacio, perdiendo una zapatilla por el camino", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 13) {
      background(0)
        text("El principe quedo enamorado de la dama con la que bailo, comenzo una busqueda en todo el reino para encontrarla", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 14) {
      background(0)
        text("Cuando llegaron a tu casa tu madrastra te encerro en tu habitacion, pero lograte salir", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 15) {
      background(0)
        text("Cuando tus hermanastras te vieron, comenzaron a tirarte almohadas para que el mensajero del rey no te viera", 100, 500);
      this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 16) {
      background(0)
        text("Esquiba las almohadas!", 100, 500);
      this.botonUniversal1.dibujar()
    } else if (this.pantalla == 17) {
      background(0)
        this.juego.dibujar();
      this.juego.actualizar();
    } else if (this.pantalla == "Derrota"){
      background(0)
      text("Perdiste", 500, 100);
    text("Oh No! las hermanastras lograron su cometido y el mesajero del rey no te vio", 100, 500);
    this.botonUniversal2.dibujar()
    
  } else if (this.pantalla == "Victoria"){
      background(0)
      text("Ganaste", 500, 100);
    text("Lograste llegarar al living y el mensajero del rey confirmo que eres la dama que bailo con el principe", 100, 500);
  }
}

  mouseClicked() {
    this.botonSiguiente.mouseClicked()
      this.botonVolver.mouseClicked()

      if (this.pantalla == 0) {
      this.botonUniversal3.mouseClicked()
    }

    if (this.pantalla == 16) {
      this.botonUniversal1.mouseClicked()
    }
    if (this.pantalla == "Derrota") {
      this.botonUniversal2.mouseClicked()
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
