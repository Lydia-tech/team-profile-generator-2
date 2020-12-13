const path = require('path');
const fs = require('fs');

const templateDir = path.resolve(__dirname, '../src')

const render = employees => {
    const html = [];

    html.push(
        employees.filter(employee => employee.getRole() === 'Manager')
        .map(manager => renderManager(manager))
    );
    html.push(
        employees.filter(employee => employee.getRole() === 'Engineer')
        .map(engineer => renderEngineer(engineer))
    );
    html.push(
        employees.filter(employee => employee.getRole() === 'Intern')
        .map(intern => renderIntern(intern))
    );
    return renderMain(html.join(''))
}

const renderManager = manager => {
    let template = manager.generateManagerHtml();
    return template;
}

const renderEngineer = engineer => {
    let template = engineer.generateEngineerHtml();
    return template;
}

const renderIntern = intern => {
    let template = intern.generateInternHtml()
    return template;
}

const renderMain = html => {
    const template = fs.readFileSync(
        path.resolve(templateDir, 'main.html'), 'utf-8'
    )
    return populatePlaceholders(template, 'team', html)
}

const populatePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp(`{{ ${placeholder} }}`, 'gm')
    return template.replace(pattern, value)
}

module.exports=render;