const generateMyTeam = (team) => {
    console.log(team);

    const html = [];

    const generateManager = manager =>{
        console.log(manager);
        let managerHtml =
        `

    <div class="grid">

        <div>
           <h2>${manager.name}</h2> 
           <h2>Role: Manager </h2>
           <p>ID: ${manager.id}</p>
           <p>Email: <a href="${manager.email}">${manager.email}</a></p>
           <p>Officer number: ${manager.officeNumber}</p>
        </div>
`;
html.push(managerHtml)
    }
    const generateEngineer = engineer =>{
        console.log(engineer);
        let engineerHtml =
        `
  
    <div class="grid">

        <div>
           <h2>${engineer.name}</h2> 
           <h2>Role: Engineer </h2>
           <p>ID: ${engineer.id}</p>
           <p>Email: <a href="${engineer.email}">${engineer.email}</a></p>
           <p>GitHub <a href="http://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
        </div>`;
}
html.push(engineerHtml)

const generateIntern = intern =>{
    console.log(intern);
    let internHtml =
    `
   
<div class="grid">

    <div>
       <h2>${intern.name}</h2> 
       <h2>Role: Engineer </h2>
       <p>ID: ${intern.id}</p>
       <p>Email: <a href="${intern.email}">${intern.email}</a></p>
       <p>School: ${intern.school}</p>
    </div>`;
}
html.push(internHtml)

for(let i = 0; i < team.lenth; i++){
    if(team[i].getRole() === "Manager"){
        generateManager(team[i]);
    }
    if(team[i].getRole() === "Engineer"){
        generateEngineer(team[i]);
    }
    if(team[i].getRole() === "Intern"){
        generateIntern(team[i]);
    }
}
return html.join('');


}

module.exports = team => {


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
       <link rel="stylesheet" href="./index.css">
    </head>
    <body>
        <div class="header">
            <h1>My Team</h1>
    
        </div>

<main>${generateMyTeam(team)}</main>


        </body>
</html>
    `
}
