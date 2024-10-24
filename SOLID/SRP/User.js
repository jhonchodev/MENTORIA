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
  