const Employee = require("../lib/employee");

describe("Employee", () => {

  it("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  it("Can set name via constructor arguments" , () => {
      const name = "rob";
      const e = new Employee(name);
      expect(e.name).toBe(name);
    });
    it("Can set id via constructor arguments" , () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
      });
      it("Can set email via constructor arguments" , () => {
        const testValue = "test@question.com";
        const e = new Employee("Foo", 1 , testValue);
        expect(e.email).toBe(testValue);
      });
      it("Can get name via getName()" , () =>{
        expect(e.getName()).toBe('rob')
      });
      it("Can get id via getId()" , () =>{
        expect(e.getId()).toBe('1')
      });
      it("Can get name via getEmail()" , () =>{
        expect(e.getEmail()).toBe('test@question.com')
      });
      it("Can ger role via getRole()", () =>{
        expect(e.getRole()).toBe('Employee')
      });
});