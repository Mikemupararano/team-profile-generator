// Import required modules and classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Define the output directory and file path for the HTML file
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Import the render function
const render = require("./src/page-template.js");

// Function to gather information about development team members and render the HTML file
async function gatherAndRenderTeamInfo() {
    try {
        // Array to store team members
        const team = [];

        // Prompt user for manager's information
        const managerInfo = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the manager's name:",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the manager's employee ID:",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the manager's email:",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter the manager's office number:",
            },
        ]);

        // Create a new Manager object and add it to the team array
        const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        team.push(manager);

        // Prompt user to choose an option to add an engineer, add an intern, or finish building the team
        let addMemberOption = "";
        do {
            addMemberOption = await inquirer.prompt([
                {
                    type: "list",
                    name: "option",
                    message: "Choose an option:",
                    choices: ["Add an engineer", "Add an intern", "Finish building the team"],
                },
            ]);

            // Based on the selected option, prompt user for engineer's or intern's information
            if (addMemberOption.option === "Add an engineer") {
                const engineerInfo = await inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter the engineer's name:",
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Enter the engineer's employee ID:",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Enter the engineer's email:",
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "Enter the engineer's GitHub username:",
                    },
                ]);
                const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
                team.push(engineer);
            } else if (addMemberOption.option === "Add an intern") {
                const internInfo = await inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "Enter the intern's name:",
                    },
                    {
                        type: "input",
                        name: "id",
                        message: "Enter the intern's employee ID:",
                    },
                    {
                        type: "input",
                        name: "email",
                        message: "Enter the intern's email:",
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "Enter the intern's school:",
                    },
                ]);
                const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
                team.push(intern);
            }
        } while (addMemberOption.option !== "Finish building the team");

        // Render the HTML file using the render function and team array
        const renderedHTML = render(team);

        // Write the rendered HTML to the output file
        fs.writeFileSync(outputPath, renderedHTML);

        console.log("Team HTML file has been generated successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the function to gather information and render the HTML file
gatherAndRenderTeamInfo();

