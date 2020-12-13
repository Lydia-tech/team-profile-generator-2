const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, github){
        super(name, id, email)
            this.github = github;

    }
    getGithub() {
        return this.github;
    }
    getRole(){
        return "Engineer";
    };

    generateEngineerHtml() {
        const literal = `<div class="card employee-card col-12 col-md-4">
        <div class="card-header">
            <h2 class="card-title"aa>${this.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.email}" target="_blank">${
                this.email
            }</a></li>
                <li class="list-group-item">School: ${this.school}</li>
            </ul>
        </div>
    </div>`
    return literal
    }

}

module.exports = Engineer;