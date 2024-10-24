// Ejemplo tomado de https://pieces.app/blog/solidifying-your-code-front-end-development-best-practices
class User {

    constructor(name, email) {

        this.name = name;

        this.email = email;

    }

    saveUser() {

        // Logic to save user data to a database

        console.log("User saved successfully!");

    }

    greet() {

        console.log(`Hello, my name is ${this.name}`);

    }

}

// Usage

const user = new User("Alice", "alice@example.com");

user.saveUser();

user.greet();


/*
  
* La clase de usuario se encarga de la gestión de los datos y las interacciones de los usuarios.

* Esto viola el SRP porque la clase tiene múltiples motivos para cambiar. Cambia la forma en que almacenamos 
* los datos de los usuarios y la lógica de interacción de los usuarios.  
*/