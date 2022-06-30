// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const genPage = require("./generate-page")
const path = require("path");
const output_Dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_Dir, "my-team.html")
const teamMember = [];

const promptManager = () =>{
return inquirer.prompt([
    {
type: "input",
name: "name",
message: "What is their name?",
// validate: nameInput => {
//     if(nameInput = ""){
//         console.log("Enter a name!")
//     }
// }
},
{
    type: "input",
    name: "personId",
    message: "What is their ID?",
    // validate: personId => {
    //     if(personId === ""){
    //         console.log("Enter an ID!")
    //         return false;
    //     }
    // }
    },
    {
        type: "input",
        name: "email",
        message: "What is their Email?",
        // validate: email => {
        //     if(email = ""){
        //         console.log("Enter an Email!")
        //     }
        // }
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is your office number?",
            // validate: officeNum => {
            //     if(officeNum = ""){
            //         console.log("Enter an office number!")
            //     }
            // }
            }
            //outputs results
]).then(response =>{
    console.log(response);
    const manager = new Manager(response.name, response.personId, response.email, response.officeNum)
    teamMember.push(manager);
    promptMenu();
})
};
//menu for picking if what level of job they have
const promptMenu = () =>{
    return inquirer.prompt([
        {
type: "list",
name: "menu",
message: "Select which option you would like: ",
choices: ["Add an Engineer", "Add an Intern", "Finished My Team"]
        }
    ]).then(userChoice => {
        switch(userChoice.menu){
            case"Add an Engineer":
            promptEngineer();
            break;
            case "Add an Intern":
            promptIntern();
            break;
            default:
                buildMyTeam();
        }
    })
}
//gets input for new enginerr
const promptEngineer = () =>{
    return inquirer.prompt([
        {
    type: "input",
    name: "name",
    message: "What is their name?",
    // validate: nameInput => {
    //     if(nameInput = ""){
    //         console.log("Enter a name!")
    //     }
    // }
    },
    {
        type: "input",
        name: "personId",
        message: "What is their ID?",
        // validate: personId => {
        //     if(personId === ""){
        //         console.log("Enter an ID!")
        //         return false;
        //     }
        // }
        },
        {
            type: "input",
            name: "email",
            message: "What is their Email?",
            // validate: email => {
            //     if(email = ""){
            //         console.log("Enter an Email!")
            //     }
            // }
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is your gitHub?",
                // validate: gitHub => {
                //     if(gitHub = ""){
                //         console.log("Enter a gitHub username!")
                //     }
                // }
                }
                //outputs results
    ]).then(response =>{
        console.log(response);
        const engineer = new Engineer(response.name, response.personId, response.email, response.gitHub)
        teamMember.push(engineer);
        promptMenu();
    })
    };
    //gets inputs for new intern
    const promptIntern = () =>{
        return inquirer.prompt([
            {
        type: "input",
        name: "name",
        message: "What is their name?",
        // validate: nameInput => {
        //     if(nameInput = ""){
        //         console.log("Enter a name!")
        //     }
        // }
        },
        {
            type: "input",
            name: "personId",
            message: "What is their ID?",
            // validate: personId => {
            //     if(personId === ""){
            //         console.log("Enter an ID!")
            //         return false;
            //     }
            // }
            },
            {
                type: "input",
                name: "email",
                message: "What is their Email?",
                // validate: email => {
                //     if(email = ""){
                //         console.log("Enter an Email!")
                //     }
                // }
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school did you go to?",
                    // validate: school => {
                    //     if(school = ""){
                    //         console.log("Enter your school name!")
                    //     }
                    // }
                    }
                    //outputs results
        ]).then(response =>{
            console.log(response);
            const intern = new Intern(response.name, response.personId, response.email, response.school)
            teamMember.push(intern);
            promptMenu();
        }).catch(function(error) {
            console.log(error);
          })
        };
        
        const buildMyTeam = () => {
if(!fs.existsSync(output_Dir)){
    fs.mkdirSync(output_Dir)
}
fs.writeFileSync(outputPath, genPage(teamMember, "utf-8"))

}
promptManager();