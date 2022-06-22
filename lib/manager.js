const Employee = require("./employee");

class Manager extends Employee{
    constructor(name, id, email, officeNmuber){
        //gets from employee.js
        super(name,id,email);

        this.officeNmuber = officeNmuber;
        
    }
    getOfficeNumber(){
        return this.officeNmuber;
    }
    getRole(){
        return "Manager"
    }
}
module.exports = Manager;