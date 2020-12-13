const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


const outputPath = path.resolve(__dirname, 'output', 'team.html');

const render = require('./output/renderer');

const teamMembers = [];
const idArray = [];

function App() {
    function createManager() {
        console.log('Build your team')
        inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'managerName',
                    message: "What is the name of the Manager?",
                    validate: answer => {
                        return answer !== '' ? true : 'please enter at least one character'
                    }
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'What is the new Manager\'s ID?',
                    validate: answer => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        } 
                        return 'please input a positive integer greater than zero'
                    }
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'What is the Manager email?',
                    validate: answer => {
                        const pass = answer.match(
                            // Regex:
							// /->open; start of email address
							// \S->not whitespace; user email name
							// +->plus; combine user email with @
							// @->@; matches @ symbol for email address
							// \S->not whitespace; email client name
							// +->plus; combine email client name with "."
							// \.->escaped char; matches "." char for email
							// \S->not whitespace; email client domain
							// +->plus; match one or more of preceding token
							// /->close; finish of email address
							/\S+@\S+\.\S+/
                        )
                        if (pass) {
                            return true
                        }

                        return 'please enter a valid email address'
                    }
                },
                {
                    type: 'input',
                    name: 'managerOfficeNumber',
                    message: 'What is the manager office number?',
                    validate: answer => {
                        const pass = answer.match(/^[1-9]\d*$/)
                        if (pass) {
                            return true
                        }
                        return 'Please input a positive number greater than zero'
                    }
                }

                
            ]
        ).then(answers => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.mangerOfficeNumber
            );
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberSelect',
                message: 'Which type of team member would you like to add next?',
                choices: [
                    'Engineer',
                    'Intern',
                    'No more team members!'
                ]
            }
        ]).then(userSelect => {
            switch (userSelect.memberSelect) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        })
    }

    function addEngineer() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'engineerName',
					message: "What is your engineer's name?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				},
				{
					type: 'input',
					name: 'engineerId',
					message: "What is your engineer's id?",
					validate: answer => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							if (idArray.includes(answer)) {
								return 'This ID is already taken. Please enter a different number.';
							} else {
								return true;
							}
						}
						return 'Please enter a positive number greater than zero.';
					}
				},
				{
					type: 'input',
					name: 'engineerEmail',
					message: "What is your engineer's email?",
					validate: answer => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return 'Please enter a valid email address.';
					}
				},
				{
					type: 'input',
					name: 'engineerGithub',
					message: "What is your engineer's GitHub username?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				}
			])
			.then(answers => {
				const engineer = new Engineer(
					answers.engineerName,
					answers.engineerId,
					answers.engineerEmail,
					answers.engineerGithub
				);
				teamMembers.push(engineer);
				idArray.push(answers.engineerId);
				createTeam();
			});
	}

	function addIntern() {
		inquirer
			.prompt([
				{
					type: 'input',
					name: 'internName',
					message: "What is your intern's name?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				},
				{
					type: 'input',
					name: 'internId',
					message: "What is your intern's id?",
					validate: answer => {
						const pass = answer.match(/^[1-9]\d*$/);
						if (pass) {
							if (idArray.includes(answer)) {
								return 'This ID is already taken. Please enter a different number.';
							} else {
								return true;
							}
						}
						return 'Please enter a positive number greater than zero.';
					}
				},
				{
					type: 'input',
					name: 'internEmail',
					message: "What is your intern's email?",
					validate: answer => {
						const pass = answer.match(/\S+@\S+\.\S+/);
						if (pass) {
							return true;
						}
						return 'Please enter a valid email address.';
					}
				},
				{
					type: 'input',
					name: 'internSchool',
					message: "What is your intern's school?",
					validate: answer => {
						if (answer !== '') {
							return true;
						}
						return 'Please enter at least one character.';
					}
				}
			])
			.then(answers => {
				const intern = new Intern(
					answers.internName,
					answers.internId,
					answers.internEmail,
					answers.internSchool
				);
				teamMembers.push(intern);
				idArray.push(answers.internId);
				createTeam();
			});
    }
    
    function buildTeam() {
        fs.writeFileSync(outputPath, render(teamMembers), 'utf-8')
    }
    createManager();
}

App();