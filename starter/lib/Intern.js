// Intern.js

// Require the Employee class to inherit from
const Employee = require("./Employee");

// Define the Intern class, which extends the Employee class
class Intern extends Employee {
    // Constructor to initialize name, id, email, and school
    constructor(name, id, email, school) {
        // Call the constructor of the parent class (Employee) with super()
        super(name, id, email);

        // Validate school argument
        if (typeof school !== 'string' || school.trim() === '') {
            throw new Error("Expected 'school' to be a non-empty string");
        }

        // Set the 'school' property of the instance to the value passed as parameter
        this.school = school.trim();
    }

    // Method to get the intern's school
    getSchool() {
        return this.school; // Return the value of the 'school' property of the instance
    }

    // Method to get role (overrides getRole() method of the parent class)
    getRole() {
        return 'Intern'; // Return the string 'Intern'
    }
}

// Export the Intern class
module.exports = Intern; // Make the Intern class available for use in other files
