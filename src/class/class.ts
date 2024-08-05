class Person2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hello. I'm ${this.name}.`);
    }
}

const irumi = new Person2("Irumi");
irumi.greet();

