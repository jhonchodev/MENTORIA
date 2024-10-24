// Ejemplo tomado de https://pieces.app/blog/solidifying-your-code-front-end-development-best-practices

class User {

    constructor(name, email) {

        this.name = name;

        this.email = email;

    }

    greet() {

        console.log(`Hello, my name is ${this.name}`);

    }

}

// User Service

class UserService {

    static saveUser(user) {

        // Logic to save user data to a database

        console.log("User saved successfully!");

    }

}

// Usage

const user = new User("Alice", "alice@example.com");

user.greet();

UserService.saveUser(user);


/* 
* La clase User proporciona un método de saludo y solo se encarga de representar los datos del usuario.

* Introducimos la nueva clase UserService para gestionar las acciones relacionadas con el usuario, como guardar datos. 
* De esta forma, cada clase tiene una única responsabilidad: la clase User gestiona la interacción del usuario, 
* mientras que la clase UserService maneja la gestión de datos. 
*/