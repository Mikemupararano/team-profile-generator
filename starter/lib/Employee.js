// TODO: Write code to define and export the Employee class
// Define the Employee class
class Employee {
    // Constructor to initialize name, id, and email
    constructor(name, id, email) {
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
        return 'Employee'; // Return the string 'Employee'
    }
}

// Export the Employee class
module.exports = Employee; // Make the Employee class available for use in other files
