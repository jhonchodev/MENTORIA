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