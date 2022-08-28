//Testing:
//Gives confidence in the code

/* 3 Main Types of Tests:

1. End to End (with Cypress)
   - Run the project in an actual browser
   - Run as many user scenarios as possible
   - Take a long time to run
   - Take a lot of computing power (compared to the other two below)
   - Broad focus/coverage of testing (backend, front end, UI experience)

2. Integration (React Testing Library, Enzyme)
   - Test how different pieces of the code work or integrate together
       - Smaller in focus/coverage

3. Unit  (Jest)
   - Test a single unit of code to make sure it always runs correctly under various different scenarios
      -example scenario: one function within a component
*/

//Integration test:
test('test name', () => {
   //if the test does not throw an error, the test will pass
   //if the test does throw an error, the test will fail
   throw new Error();
})

