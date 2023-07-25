// Clase Ninja
class Ninja {
  constructor(nombre) {
    this.nombre = nombre;
    this.salud = 100;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName() {
    console.log(`Nombre: ${this.nombre}`);
  }

  showStats() {
    console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
  }

  drinkSake() {
    this.salud += 10;
    console.log(`${this.nombre} bebió sake y recuperó 10 puntos de salud.`);
  }
}

// Clase Sensei
class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }

  speakWisdom() {
    this.drinkSake(); // Llama al método drinkSake() heredado de la clase Ninja
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
  }
}

// Ejemplo de uso
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
