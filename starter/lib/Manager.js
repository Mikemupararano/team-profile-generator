// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Manager.js

// Require the Employee class to inherit from
const Employee = require("./Employee");

// Define the Manager class, which extends the Employee class
class Manager extends Employee {
    // Constructor to initialize name, id, email, and office number
    constructor(name, id, email, officeNumber) {
        // Call the constructor of the parent class (Employee) with super()
        super(name, id, email);

        // Validate officeNumber argument
        if (typeof officeNumber !== 'number' || isNaN(officeNumber) || officeNumber <= 0) {
            throw new Error("Expected 'officeNumber' to be a positive number");
        }

        // Set the 'officeNumber' property of the instance to the value passed as parameter
        this.officeNumber = officeNumber;
    }

    // Method to get the manager's office number
    getOfficeNumber() {
        return this.officeNumber; // Return the value of the 'officeNumber' property of the instance
    }

    // Method to get role (overrides getRole() method of the parent class)
    getRole() {
        return 'Manager'; // Return the string 'Manager'
    }
}

// Export the Manager class
module.exports = Manager; // Make the Manager class available for use in other files
