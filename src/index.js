// const Manager = require("../lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// const generateMarkdown = require("./src/generateMarkdown");
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// const render = require("./src/page-template.js");
// const teamMembers = [];
// const idArray = [];
// function appMenu() {
// function createManager() {
//     console.log("Please build your team");
    
// function promptUser(answers) {
//     return inquirer.prompt([
//       {
//           type: "list",
//           name: "role",
//           message: "what is your role?",
//           choices: ["Engineer", "Intern", "Manager"]
//       },
//   ]).then(function (res) {
      
//       console.log(res)
//       if (res.role === "Engineer") {
//           inquirer.prompt([
//               {
//                   name: "name",
//                   message: "What is your name?",
//                   type: "input"
//               },
//               {
//                   name: "github",
//                   type: "input",
//                   message: "What is your github Username?"
//               },
//               {
//                   name: "email",
//                   type: "input",
//                   message: "What is your email?"
//               }
//         ]).then(function (engineerRes) {
//           var newEngineer = new Engineer(engineerRes.name, engineerRes.email, uniqueId, engineerRes.github);
//           uniqueId = uniqueId + 1; // could be "uniqueId++"
//           console.log(newEngineer);
//           // run promptUser 
//           teamArray.push(newEngineer);
//           addUser();
//         });
//       };
//       // should use switch case instead of if/else up until this point

//   })
//       .catch(function (err) {
//           console.log(err);
//       });

// };    
// function generateHTML() {
//   // html here?
  
//   console.log(teamArray)

//   function renderManager() {

//   };
//   function renderIntern() {

//   };
//   function renderEngineer() {

//   };

// };

// function addUser(){
//   inquirer.prompt([
//       {   
//           name: "continue",
//           message: "Do you want to add another team member?",
//           type: "confirm"
//       }
//   ]).then(function(confirmRes){
//       confirmRes.continue ? promptUser() : generateHTML()
//   })
// };


// promptUser