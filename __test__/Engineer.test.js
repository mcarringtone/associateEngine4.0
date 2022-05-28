const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "Carrington";
  const employeeInstance = new Engineer(
    "Carrington",
    2,
    "carrignton@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "Carrington";
  const employeeInstance = new Engineer(
    "Carrington",
    2,
    "Carrington@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Carrington",
    2,
    "Carrington@gmail.com",
    "Carrington"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
