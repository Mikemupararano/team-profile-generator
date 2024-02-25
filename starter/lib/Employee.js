// Define the Employee class
class Employee {
    // Constructor to initialize name, id, and email
    constructor(name, id, email) {
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

        this.name = name; // Set the 'name' property of the instance to the value passed as parameter
        this.id = id; // Set the 'id' property of the instance to the value passed as parameter
        this.email = email; // Set the 'email' property of the instance to the value passed as parameter
    }

    // Method to get name
    getName() {
        return this.name; // Return the value of the 'name' property of the instance
    }

    // Method to get id
    getId() {
        return this.id; // Return the value of the 'id' property of the instance
    }

    // Method to get email
    getEmail() {
        return this.email; // Return the value of the 'email' property of the instance
    }

    // Method to get role (always returns 'Employee' for the base class)
    getRole() {
        return 'Employee'; // Return the role 'Employee'
    }
}

// Export the Employee class
module.exports = Employee; // Make the Employee class available for use in other files

// Function to validate email format
function isValidEmail(email) {
    // Simple email format validation (can be improved)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
