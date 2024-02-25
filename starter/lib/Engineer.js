// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Engineer.js

// Require the Employee class to inherit from
const Employee = require("./Employee");

// Define the Engineer class, which extends the Employee class
class Engineer extends Employee {
    // Constructor to initialize name, id, email, and github username
    constructor(name, id, email, github) {
        // Validate inputs
        if (typeof name !== 'string' || !name.trim()) {
            throw new Error("Expected 'name' to be a non-empty string");
        }
        if (typeof id !== 'number' || isNaN(id) || id <= 0) {
            throw new Error("Expected 'id' to be a positive number");
        }
        if (typeof email !== 'string' || !email.trim() || !isValidEmail(email)) {
            throw new Error("Expected 'email' to be a non-empty string in a valid email format");
        }
        if (typeof github !== 'string' || !github.trim()) {
            throw new Error("Expected 'github' to be a non-empty string");
        }

        // Call the constructor of the parent class (Employee) with super()
        super(name, id, email);
        this.github = github; // Set the 'github' property of the instance to the value passed as parameter
    }

    // Method to get the engineer's GitHub username
    getGithub() {
        return this.github; // Return the value of the 'github' property of the instance
    }

    // Method to get role (overrides getRole() method of the parent class)
    getRole() {
        return 'Engineer'; // Return the string 'Engineer'
    }
}

// Export the Engineer class
module.exports = Engineer; // Make the Engineer class available for use in other files

// Function to validate email format
function isValidEmail(email) {
    // Simple email format validation (can be improved)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Require the Employee class to inherit from
const Employee = require("./Employee");

// Define the Engineer class, which extends the Employee class
class Engineer extends Employee {
    // Constructor to initialize name, id, email, and github username
    constructor(name, id, email, github) {
        // Call the constructor of the parent class (Employee) with super()
        super(name, id, email);
        this.github = github; // Set the 'github' property of the instance to the value passed as parameter
    }

    // Method to get the engineer's GitHub username
    getGithub() {
        return this.github; // Return the value of the 'github' property of the instance
    }

    // Method to get role (overrides getRole() method of the parent class)
    getRole() {
        return 'Engineer'; // Return the string 'Engineer'
    }
}

// Export the Engineer class
module.exports = Engineer; // Make the Engineer class available for use in other files*/
