function createUserProfile(
  name,
  age,
  email,
  address,
  phone,
  occupation,
  hobbies
) {
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

const profile = createUserProfile(
  "Alice",
  30,
  "alice@example.com",
  "123 Main St",
  "555-1234",
  "Engineer",
  ["reading", "hiking"]
);

function createUserProfile({
  name,
  age,
  email,
  address,
  phone,
  occupation,
  hobbies,
}) {
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
