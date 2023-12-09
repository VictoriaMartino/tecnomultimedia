class App {
  constructor() {
    this.cantidadDePantallas = 25
      this.pantalla = 0
      this.botonSiguiente = new Boton(width/2, 600, 100, 50, "Siguiente", "siguiente")
      this.botonVolver = new Boton(width/3, 600, 100, 50, "Volver", "volver")
      this.botonUniversal1 = new Boton(width/4, height/4, 100, 50, "Jugar", 17)
      this.botonUniversal2 = new Boton(width/2, height/4, 100, 50, "Volver", 0)
      this.botonUniversal3 = new Boton(900, 500, 100, 50, "Iniciar", 1)
      this.botonCreditos = new Boton(width/4, height/2, 100, 50, "Créditos", 20)

      this.juego = new Juego();
  }

  dibujar() {

    if (this.pantalla == 0) {
      push()
        background(0)
        textSize(30)
        fill(255)
        text("La Cenicienta", 700, 100);
      pop()
        this.botonUniversal3.dibujar()
        this.botonCreditos.dibujar()
    } else if (this.pantalla == 1) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Te encarnaras en la vida de Cenicienta, una chica que hace todo lo que su madrastra y hermanastras le ordenen.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
    } else if (this.pantalla == 2) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Un día mientra limpias, llega una carta.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 3) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("El rey invitaba a todas las docellas del reino a un banquete en nombre del principe. Los rumores daban a enterder que el principe elegiria a su esposa ese día.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 4) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Tu madrastra y tus hermanstras comensaron a darte ordenes, ellas no querian que vayas al baile.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 5) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("El dia del baile tus hermanastras destruyeron tu vestido.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 6) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Lloraste en la fuente de tu patio, hasta que sentiste una mano acariciando tu pelo.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 7) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Era tu hada madrina!.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 8) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Ella con su magia te creo un caruaje, un vestido y unas hermosas zapatillas de cristal.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 9) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Pero ella tenia una condicion. Debias volver antes de la doce de la noche.", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 10) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Cuando llegaste al baile, inmediatamente llamaste la atencion de todo el mundo, incluido el principe", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 11) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("El principe y tu bailaron todo el tiempo hasta que dieron las doce", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 12) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Haciendo le caso al hada madrina. Salieste corriendo del palacio, perdiendo una zapatilla por el camino", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 13) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("El principe quedo enamorado de la dama con la que bailo, comenzo una busqueda en todo el reino para encontrarla", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 14) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Cuando llegaron a tu casa tu madrastra te encerro en tu habitacion, pero lograte salir", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 15) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Cuando tus hermanastras te vieron, comenzaron a tirarte almohadas para que el mensajero del rey no te viera", 100, 500);
      pop()
        this.botonSiguiente.dibujar()
        this.botonVolver.dibujar()
    } else if (this.pantalla == 16) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Esquiba las almohadas!", 100, 500);
      pop()
        this.botonUniversal1.dibujar()
    } else if (this.pantalla == 17) {
      background(0)
        this.juego.dibujar();
      this.juego.actualizar();
    } else if (this.pantalla == 18) {
      push()
        background(0)
        textSize(20)
        fill(255)
        text("Perdiste", 500, 100);
      text("Oh No! las hermanastras lograron su cometido y el mesajero del rey no te vio", 100, 500);
      pop()
        this.botonUniversal2.dibujar()
    } else if (this.pantalla == 19) {
      push()
        background(0)
        textSize(20)
        fill(255);
      text("Ganaste", 500, 100);
      text("Lograste llegarar al living y el mensajero del rey confirmo que eres la dama que bailo con el principe", 100, 500);
      pop()
        this.botonUniversal2.dibujar()
    } else if (this.pantalla == 20) {
      push()
        background(0)
        textSize(20)
        fill(255)
        text("Creditos", 500, 100)
        pop()
    }
  }
    mouseClicked() {
      if (this.pantalla == 0) {
        this.botonUniversal3.mouseClicked()
        this.botonCreditos.mouseClicked()
      } else  if (this.pantalla == 1) {
        this.botonSiguiente.mouseClicked()
      } else if (this.pantalla == 2) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 3) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 4) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 5) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 6) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 7) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 8) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 9) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 10) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 11) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 12) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 13) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 14) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 15) {
        this.botonSiguiente.mouseClicked()
          this.botonVolver.mouseClicked()
      } else if (this.pantalla == 16) {
        this.botonUniversal1.mouseClicked()
      } else if (this.pantalla == 18 && this.pantalla == 19) {
        this.botonUniversal2.mouseClicked()
      }
    }

    cambiarPantalla(param) {

      if (param == "Victoria") {
        this.pantalla = 19
      } else if (param == "Derrota") {
        this.pantalla = 18
      } else  if (param == "siguiente" && this.pantalla < this.cantidadDePantallas) {
        this.pantalla++
      } else if (param == "volver" && this.pantalla > 0) {
        this.pantalla--
      } else if (param != "volver" && param != "siguiente") {
        this.pantalla=param
      }
    }
  }
