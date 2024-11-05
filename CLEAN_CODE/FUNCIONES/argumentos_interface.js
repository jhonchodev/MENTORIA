interface UserProfileProps {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
    occupation: string;
    hobbies: string[];
  }
  
  function createUserProfile({ name, age, email, address, phone, occupation, hobbies }: UserProfileProps) {
    return {
      name,
      age,
      email,
      address,
      phone,
      occupation,
      hobbies,
    };
  }
  
  const profile = createUserProfile({
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    address: "123 Main St",
    phone: "555-1234",
    occupation: "Engineer",
    hobbies: ["reading", "hiking"],
  });
  