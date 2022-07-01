
    

    
   //sends out the box of the manager
    const generateManager = manager =>{
        return`

    <div class="grid">

        <div>
           <h2>${manager.name}</h2> 
           <h2>Role: Manager </h2>
           <p>ID: ${manager.id}</p>
           <p>Email: <a href="${manager.email}">${manager.email}</a></p>
           <p>Officer number: ${manager.officeNmuber}</p>
        </div>
        </div>
`;

    }
    //sends out box of engineer
    const generateEngineer = engineer =>{
     return`
  
    <div class="grid">

        <div>
           <h2>${engineer.name}</h2> 
           <h2>Role: Engineer </h2>
           <p>ID: ${engineer.id}</p>
           <p>Email: <a href="${engineer.email}">${engineer.email}</a></p>
           <p>GitHub <a href="http://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
        </div>
        </div>`;
}
//sends out box of the intern
const generateIntern = intern =>{
    return `
   
<div class="grid">

    <div>
       <h2>${intern.name}</h2> 
       <h2>Role: Engineer </h2>
       <p>ID: ${intern.id}</p>
       <p>Email: <a href="${intern.email}">${intern.email}</a></p>
       <p>School: ${intern.school}</p>
    </div>
    </div>`;
}


genHTML= (data) => {



const html = [];

for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole(); 


    // call manager 
    if (role === 'Manager') {
        const managerCard = generateManager(employee);

        html.push(managerCard);
    }

    // call engineer 
    if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        html.push(engineerCard);
    }

    // call intern 
    if (role === 'Intern') {
        const internCard = generateIntern(employee);

        html.push(internCard);
    }
    
}





const team = html.join('');

//main outline of the htm
const gen = genPage(team);
return gen;
}
const genPage = team => {
    return `<!DOCTYPE html>
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

<main>${team}</main>


        </body>
</html>
    `
}

module.exports = genHTML;