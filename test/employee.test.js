const Employee = require("../lib/employee");
const employee = new Employee('rob', '1', 'test@question.com')
describe("Employee", () => {
it("Can get values for employee", () =>{
    expect(employee.name).toBe('rob');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('test@question.com');
})
      it("Can get name via getName()" , () =>{
        expect(employee.getName()).toBe('rob')
      });
      it("Can get id via getId()" , () =>{
        expect(employee.getId()).toBe('1')
      });
      it("Can get name via getEmail()" , () =>{
        expect(employee.getEmail()).toBe('test@question.com')
      });
      it("Can get role via getRole()", () =>{
        expect(employee.getRole()).toBe('Employee')
      });
});