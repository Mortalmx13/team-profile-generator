const Engineer = require("../lib/engineer");
const engineer = new Engineer('rob', '1', 'test@question.com' , 'Mortalmx13')
describe("Engineer", () => {
it("Can get values for engineer", () =>{
    expect(engineer.name).toBe('rob');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('test@question.com');
    expect(engineer.gitHub).toBe('Mortalmx13');

})
      it("Can get name via getName()" , () =>{
        expect(engineer.getName()).toBe('rob')
      });
      it("Can get id via getId()" , () =>{
        expect(engineer.getId()).toBe('1')
      });
      it("Can get name via getEmail()" , () =>{
        expect(engineer.getEmail()).toBe('test@question.com')
      });
      it("Can get role via getRole()", () =>{
        expect(engineer.getRole()).toBe('Engineer')
      });
      it("Can get gitHub username via getGitHub()", () =>{
        expect(engineer.getGitHub()).toBe('Mortalmx13')
      });
});