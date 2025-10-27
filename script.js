class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this._species} makes a sound`); // Corrected output format
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

// Testing the implementation
const myCat = new Cat("Siamese");
myCat.makeSound(); // Expected Output: "The Siamese makes a sound"
myCat.purr(); // Expected Output: "purr"

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Expected Output: "The Golden Retriever makes a sound"
myDog.bark(); // Expected Output: "woof"

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;