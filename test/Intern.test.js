const Intern = require("../lib/intern");
const intern = new Intern('rob', '1', 'test@question.com' , 'ECU')
describe("Intern", () => {
it("Can get values for intern", () =>{
    expect(intern.name).toBe('rob');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('test@question.com');
    expect(intern.school).toBe('ECU');

})
      it("Can get name via getName()" , () =>{
        expect(intern.getName()).toBe('rob')
      });
      it("Can get id via getId()" , () =>{
        expect(intern.getId()).toBe('1')
      });
      it("Can get name via getEmail()" , () =>{
        expect(intern.getEmail()).toBe('test@question.com')
      });
      it("Can get role via getRole()", () =>{
        expect(intern.getRole()).toBe('Engineer')
      });
      it("Can get school via getSchool()", () =>{
        expect(intern.getSchool()).toBe('ECU')
      });
});