class Animal {
    constructor(species) {
        this._species = species;
    }
    get species() {
        return this._species;
    }
    makeSound() {
        console.log(`${this._species} makes a sound`); // Corrected this line
    }
}

class Dog extends Animal {
    bark() {
        console.log('woof');
    }
}

class Cat extends Animal {
    purr() {
        console.log('purr');
    }
}

// Creating instances to test
const myCat = new Cat("Siamese");
myCat.makeSound(); // Should output: "Siamese makes a sound"
myCat.purr(); // Should output: "purr"

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Should output: "Golden Retriever makes a sound"
myDog.bark(); // Should output: "woof"

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;