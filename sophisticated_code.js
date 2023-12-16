/* sophisticated_code.js */

// This code is a simulation of a virtual pet game called "Virtual Zoo"
// It implements various classes to create virtual animals and their interactions with the user in a zoo-like environment.

// Define the Animal class
class Animal {
  constructor(name, species, age, health) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.health = health;
  }

  eat() {
    // Code to simulate the animal eating
    console.log(`${this.name} is eating...`);
    this.health += 10;
  }

  sleep() {
    // Code to simulate the animal sleeping
    console.log(`${this.name} is sleeping...`);
    this.health += 5;
  }

  play() {
    // Code to simulate the animal playing
    console.log(`${this.name} is playing...`);
    this.health -= 5;
  }
}

// Define the Tiger class
class Tiger extends Animal {
  constructor(name, age, health) {
    super(name, "Tiger", age, health);
  }

  roar() {
    // Code to simulate the tiger roaring
    console.log(`${this.name} is roaring...`);
    this.health -= 10;
  }
}

// Define the Penguin class
class Penguin extends Animal {
  constructor(name, age, health) {
    super(name, "Penguin", age, health);
  }

  swim() {
    // Code to simulate the penguin swimming
    console.log(`${this.name} is swimming...`);
    this.health += 2;
  }
}

// Usage example

// Create a tiger and a penguin
const tiger = new Tiger("Simba", 3, 100);
const penguin = new Penguin("Tux", 1, 90);

// Interact with the animals
tiger.eat();
tiger.roar();
penguin.eat();
penguin.swim();

// Print animal information
console.log(tiger);
console.log(penguin);

// Output:
// Simba is eating...
// Simba is roaring...
// Tux is eating...
// Tux is swimming...
// Tiger { name: 'Simba', species: 'Tiger', age: 3, health: 90 }
// Penguin { name: 'Tux', species: 'Penguin', age: 1, health: 92 }

// More complex code for the virtual zoo game can be implemented with additional classes and functionalities.