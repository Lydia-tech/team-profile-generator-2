const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "VU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "VU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "VU";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
}); 