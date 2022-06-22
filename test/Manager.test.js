const Manager = require("../lib/manager");
const manager = new Manager('rob', '1', 'test@question.com' , '500')
describe("Manager", () => {
it("Can get values for manager", () =>{
    expect(manager.name).toBe('rob');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('test@question.com');
    expect(manager.officeNumber).toBe('500');

})
      it("Can get name via getName()" , () =>{
        expect(manager.getName()).toBe('rob')
      });
      it("Can get id via getId()" , () =>{
        expect(manager.getId()).toBe('1')
      });
      it("Can get name via getEmail()" , () =>{
        expect(manager.getEmail()).toBe('test@question.com')
      });
      it("Can get role via getRole()", () =>{
        expect(manager.getRole()).toBe('Manager')
      });
      it("Can get officeNumber via getOfficeNumber()", () =>{
        expect(manager.getOfficeNumber()).toBe('500')
      });
});